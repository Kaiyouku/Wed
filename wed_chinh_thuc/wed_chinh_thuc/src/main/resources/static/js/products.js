/* ==========================================================
   EYEWEAR - PRODUCTS PAGE
   ========================================================== */

const PRODUCT_API = "/api/products";

let allProducts = [];
let currentProducts = [];

/* ----------------------------------------------------------
   KHI TRANG LOAD
   ---------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", async function () {

    updateCartCount();

    setupProductEvents();

    const categoryId = getCategoryFromURL();

    if (categoryId) {
        document.getElementById("categoryFilter").value = String(categoryId);
    }

    await loadProducts(categoryId);
});


/* ----------------------------------------------------------
   LOAD PRODUCTS
   ---------------------------------------------------------- */

async function loadProducts(categoryId = null) {

    const productList = document.getElementById("productList");

    productList.innerHTML = `
        <p class="loading">Đang tải sản phẩm...</p>
    `;

    try {

        let url = PRODUCT_API;

        if (categoryId) {
            url = `${PRODUCT_API}/category/${categoryId}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Không thể tải sản phẩm");
        }

        const products = await response.json();

        allProducts = products;
        currentProducts = [...products];

        updatePageTitle(categoryId);

        renderProducts(currentProducts);

    } catch (error) {

        console.error(error);

        productList.innerHTML = `
            <p class="error-message">
                Không thể kết nối đến máy chủ.
                Hãy kiểm tra Spring Boot có đang chạy hay không.
            </p>
        `;
    }
}


/* ----------------------------------------------------------
   ĐỌC CATEGORY TỪ URL
   ---------------------------------------------------------- */

function getCategoryFromURL() {

    const params = new URLSearchParams(window.location.search);
    const value = params.get("category");

    if (!value) {
        return null;
    }

    const categoryId = Number(value);

    if (categoryId >= 1 && categoryId <= 4) {
        return categoryId;
    }

    return null;
}


/* ----------------------------------------------------------
   TÊN CATEGORY
   ---------------------------------------------------------- */

function getCategoryName(categoryId) {

    switch (Number(categoryId)) {

        case 1:
            return "Kính cận";

        case 2:
            return "Kính râm";

        case 3:
            return "Kính thời trang";

        case 4:
            return "Kính chống ánh sáng xanh";

        default:
            return "Tất cả sản phẩm";
    }
}


/* ----------------------------------------------------------
   CẬP NHẬT TIÊU ĐỀ
   ---------------------------------------------------------- */

function updatePageTitle(categoryId) {

    const title = document.getElementById("pageTitle");
    const description = document.getElementById("categoryDescription");

    if (categoryId) {

        const name = getCategoryName(categoryId);

        title.textContent = name;
        description.textContent =
            `Các sản phẩm thuộc danh mục ${name}.`;

    } else {

        title.textContent = "Tất cả sản phẩm";
        description.textContent =
            "Khám phá toàn bộ sản phẩm của EyeWear.";
    }
}


/* ----------------------------------------------------------
   HIỂN THỊ SẢN PHẨM
   ---------------------------------------------------------- */

function renderProducts(products) {

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    if (products.length === 0) {

        productList.innerHTML = `
            <p class="empty-message">
                Không có sản phẩm phù hợp.
            </p>
        `;

        return;
    }

    products.forEach(product => {

        productList.innerHTML += `
            <div class="product">

                <div class="productImage">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="this.src='img/Category/KinhCan.webp'"
                    >
                </div>

                <div class="productInfo">

                    <h3>${product.name}</h3>

                    <p class="productCategory">
                        ${getCategoryName(product.categoryId)}
                    </p>

                    <p class="productPrice">
                        ${formatPrice(product.price)}
                    </p>

                    <button
                        class="addToCartButton"
                        onclick="addToCart(${product.id})">
                        Thêm vào giỏ
                    </button>

                </div>
            </div>
        `;
    });
}


/* ----------------------------------------------------------
   FORMAT GIÁ
   ---------------------------------------------------------- */

function formatPrice(price) {

    return Number(price).toLocaleString("vi-VN") + " VNĐ";
}


/* ----------------------------------------------------------
   FILTER + SORT EVENTS
   ---------------------------------------------------------- */

function setupProductEvents() {

    const categoryFilter =
        document.getElementById("categoryFilter");

    const sortSelect =
        document.getElementById("sortSelect");

    const searchButton =
        document.getElementById("searchButton");

    const searchInput =
        document.getElementById("searchInput");


    categoryFilter.addEventListener("change", async function () {

        const categoryId = this.value;

        if (categoryId === "") {

            history.replaceState(null, "", "products.html");

            await loadProducts();

        } else {

            history.replaceState(
                null,
                "",
                `products.html?category=${categoryId}`
            );

            await loadProducts(Number(categoryId));
        }

    });


    sortSelect.addEventListener("change", function () {

        sortProducts(this.value);

    });


    searchButton.addEventListener("click", function () {

        searchProducts();

    });


    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            searchProducts();
        }

    });
}


/* ----------------------------------------------------------
   SEARCH
   ---------------------------------------------------------- */

function searchProducts() {

    const keyword =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();

    if (keyword === "") {

        currentProducts = [...allProducts];
        renderProducts(currentProducts);
        return;
    }

    currentProducts =
        allProducts.filter(product =>
            product.name
                .toLowerCase()
                .includes(keyword)
        );

    renderProducts(currentProducts);
}


/* ----------------------------------------------------------
   SORT
   ---------------------------------------------------------- */

function sortProducts(type) {

    currentProducts = [...currentProducts];

    switch (type) {

        case "priceAsc":

            currentProducts.sort(
                (a, b) => a.price - b.price
            );

            break;

        case "priceDesc":

            currentProducts.sort(
                (a, b) => b.price - a.price
            );

            break;

        case "nameAsc":

            currentProducts.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name,
                        "vi"
                    )
            );

            break;

        case "nameDesc":

            currentProducts.sort(
                (a, b) =>
                    b.name.localeCompare(
                        a.name,
                        "vi"
                    )
            );

            break;

        default:
            break;
    }

    renderProducts(currentProducts);
}


/* ----------------------------------------------------------
   CART
   ---------------------------------------------------------- */

function getCart() {

    try {

        return JSON.parse(
            localStorage.getItem("eyewear_cart")
        ) || [];

    } catch {

        return [];
    }
}


function saveCart(cart) {

    localStorage.setItem(
        "eyewear_cart",
        JSON.stringify(cart)
    );
}


/* ----------------------------------------------------------
   ADD TO CART
   ---------------------------------------------------------- */

async function addToCart(productId) {

    try {

        const response =
            await fetch(`${PRODUCT_API}/${productId}`);

        if (!response.ok) {
            throw new Error("Không tìm thấy sản phẩm");
        }

        const product =
            await response.json();

        const cart = getCart();

        const existing =
            cart.find(item =>
                Number(item.id) === Number(product.id)
            );


        if (existing) {

            existing.quantity += 1;

        } else {

            cart.push({

                id: product.id,

                name: product.name,

                price: product.price,

                image: product.image,

                categoryId: product.categoryId,

                quantity: 1

            });
        }


        saveCart(cart);
        updateCartCount();

        alert("Đã thêm sản phẩm vào giỏ hàng!");

    } catch (error) {

        console.error(error);

        alert("Không thể thêm sản phẩm vào giỏ hàng.");
    }
}


/* ----------------------------------------------------------
   CART COUNT
   ---------------------------------------------------------- */

function updateCartCount() {

    const cart = getCart();

    const count =
        cart.reduce(
            (total, item) =>
                total + Number(item.quantity || 0),
            0
        );

    const element =
        document.getElementById("cartCount");

    if (element) {
        element.textContent = `(${count})`;
    }
}
