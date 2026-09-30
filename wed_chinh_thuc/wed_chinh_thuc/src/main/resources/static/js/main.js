/* ==========================================================
   EYEWEAR - MAIN.JS
   ========================================================== */

const PRODUCT_API = "/api/products";


document.addEventListener("DOMContentLoaded", function () {

    loadFeaturedProducts();

    updateCartCount();

    setupSearch();

});


/* ==========================================================
   LẤY TẤT CẢ SẢN PHẨM
   ========================================================== */

async function getAllProducts() {

    try {

        const response =
            await fetch(PRODUCT_API);

        if (!response.ok) {

            throw new Error(
                "Khong the tai san pham"
            );

        }

        return await response.json();

    } catch (error) {

        console.error(
            "Loi API:",
            error
        );

        return [];

    }
}


/* ==========================================================
   SẢN PHẨM NỔI BẬT
   ========================================================== */

async function loadFeaturedProducts() {

    const productList =
        document.getElementById(
            "productList"
        );

    if (!productList) {
        return;
    }


    productList.innerHTML = `
        <p class="loading">
            Đang tải sản phẩm...
        </p>
    `;


    const products =
        await getAllProducts();


    if (products.length === 0) {

        productList.innerHTML = `
            <p class="error-message">
                Không thể tải sản phẩm.
            </p>
        `;

        return;
    }


    // Lấy 4 sản phẩm đầu tiên
    const featuredProducts =
        products.slice(0, 4);


    renderProducts(
        featuredProducts,
        productList
    );
}


/* ==========================================================
   HIỂN THỊ SẢN PHẨM
   ========================================================== */

function renderProducts(
    products,
    container
) {

    container.innerHTML = "";


    products.forEach(product => {

        container.innerHTML += `

            <div class="product">

                <div class="productImage">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <div class="productInfo">

                    <h3>
                        ${product.name}
                    </h3>


                    <p class="productCategory">

                        ${getCategoryName(
                            product.categoryId
                        )}

                    </p>


                    <p class="productPrice">

                        ${formatPrice(
                            product.price
                        )}

                    </p>


                    <button
                        class="addToCartButton"
                        onclick="addToCart(${product.id})"
                    >
                        Thêm vào giỏ
                    </button>

                </div>

            </div>

        `;

    });
}


/* ==========================================================
   TÊN DANH MỤC
   ========================================================== */

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
            return "Khác";
    }
}


/* ==========================================================
   FORMAT GIÁ
   ========================================================== */

function formatPrice(price) {

    return Number(price)
        .toLocaleString("vi-VN")
        + " VNĐ";
}


/* ==========================================================
   TÌM KIẾM
   ========================================================== */

function setupSearch() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const searchButton =
        document.getElementById(
            "searchButton"
        );


    if (!searchInput ||
        !searchButton) {

        return;
    }


    searchButton.addEventListener(
        "click",
        searchProducts
    );


    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                searchProducts();

            }

        }
    );
}


/* ==========================================================
   TÌM KIẾM SẢN PHẨM
   ========================================================== */

async function searchProducts() {

    const input =
        document.getElementById(
            "searchInput"
        );


    const keyword =
        input.value
            .trim()
            .toLowerCase();


    if (keyword === "") {

        loadFeaturedProducts();

        return;
    }


    const products =
        await getAllProducts();


    const result =
        products.filter(product =>
            product.name
                .toLowerCase()
                .includes(keyword)
        );


    const productList =
        document.getElementById(
            "productList"
        );


    if (result.length === 0) {

        productList.innerHTML = `
            <p class="empty-message">
                Không tìm thấy sản phẩm.
            </p>
        `;

        return;
    }


    renderProducts(
        result,
        productList
    );


    document
        .getElementById("products")
        ?.scrollIntoView({
            behavior: "smooth"
        });
}


/* ==========================================================
   GIỎ HÀNG
   ========================================================== */

function getCart() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "eyewear_cart"
            )
        ) || [];

    } catch {

        return [];
    }
}


/* ==========================================================
   CẬP NHẬT SỐ LƯỢNG GIỎ
   ========================================================== */

function updateCartCount() {

    const cart =
        getCart();


    const count =
        cart.reduce(
            (total, item) =>
                total +
                Number(
                    item.quantity || 0
                ),
            0
        );


    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (cartCount) {

        cartCount.textContent =
            `(${count})`;
    }
}


/* ==========================================================
   THÊM GIỎ HÀNG
   ========================================================== */

async function addToCart(productId) {

    try {

        const response =
            await fetch(
                `${PRODUCT_API}/${productId}`
            );


        if (!response.ok) {

            throw new Error(
                "Khong tim thay san pham"
            );
        }


        const product =
            await response.json();


        const cart =
            getCart();


        const existing =
            cart.find(
                item =>
                    Number(item.id) ===
                    Number(product.id)
            );


        if (existing) {

            existing.quantity += 1;

        } else {

            cart.push({

                id: product.id,

                name: product.name,

                price: product.price,

                image: product.image,

                categoryId:
                    product.categoryId,

                quantity: 1

            });

        }


        localStorage.setItem(
            "eyewear_cart",
            JSON.stringify(cart)
        );


        updateCartCount();


        alert(
            "Đã thêm sản phẩm vào giỏ hàng!"
        );


    } catch (error) {

        console.error(error);

        alert(
            "Không thể thêm sản phẩm vào giỏ hàng."
        );
    }
}