/* ==========================================================
   EYEWEAR - CART PAGE
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    renderCart();

    setupCartEvents();

});


/* ----------------------------------------------------------
   GET CART
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


/* ----------------------------------------------------------
   SAVE CART
   ---------------------------------------------------------- */

function saveCart(cart) {

    localStorage.setItem(
        "eyewear_cart",
        JSON.stringify(cart)
    );
}


/* ----------------------------------------------------------
   FORMAT PRICE
   ---------------------------------------------------------- */

function formatPrice(price) {

    return Number(price).toLocaleString("vi-VN") + " VNĐ";
}


/* ----------------------------------------------------------
   CATEGORY NAME
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
            return "Khác";
    }
}


/* ----------------------------------------------------------
   RENDER CART
   ---------------------------------------------------------- */

function renderCart() {

    const cart = getCart();

    const cartList =
        document.getElementById("cartList");

    const summaryQuantity =
        document.getElementById("summaryQuantity");

    const summarySubtotal =
        document.getElementById("summarySubtotal");

    const summaryShipping =
        document.getElementById("summaryShipping");

    const summaryTotal =
        document.getElementById("summaryTotal");

    const cartCount =
        document.getElementById("cartCount");


    if (cart.length === 0) {

        cartList.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>

                <h2>Giỏ hàng đang trống</h2>

                <p>
                    Bạn chưa có sản phẩm nào trong giỏ hàng.
                </p>

                <a
                    href="products.html"
                    class="continueShoppingButton">
                    Xem sản phẩm
                </a>
            </div>
        `;

        summaryQuantity.textContent = "0";
        summarySubtotal.textContent = "0 VNĐ";
        summaryShipping.textContent = "0 VNĐ";
        summaryTotal.textContent = "0 VNĐ";
        cartCount.textContent = "(0)";

        return;
    }


    let totalQuantity = 0;
    let subtotal = 0;


    cartList.innerHTML = "";


    cart.forEach((item, index) => {

        const quantity =
            Number(item.quantity) || 1;

        const price =
            Number(item.price) || 0;

        const itemTotal =
            price * quantity;


        totalQuantity += quantity;
        subtotal += itemTotal;


        cartList.innerHTML += `

            <div class="cart-item">

                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        onerror="this.src='img/Category/KinhCan.webp'"
                    >

                </div>


                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p class="cart-item-category">
                        ${getCategoryName(item.categoryId)}
                    </p>

                    <p class="cart-item-price">
                        ${formatPrice(price)}
                    </p>

                </div>


                <div class="cart-item-quantity">

                    <button
                        class="quantityButton"
                        onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>
                        ${quantity}
                    </span>

                    <button
                        class="quantityButton"
                        onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>


                <div class="cart-item-total">
                    ${formatPrice(itemTotal)}
                </div>


                <button
                    class="removeButton"
                    onclick="removeItem(${index})">
                    Xóa
                </button>

            </div>

        `;
    });


    /*
     * Tạm thời miễn phí vận chuyển.
     * Sau này có thể đổi theo điều kiện đơn hàng.
     */

    const shipping = 0;

    const total =
        subtotal + shipping;


    summaryQuantity.textContent =
        totalQuantity;

    summarySubtotal.textContent =
        formatPrice(subtotal);

    summaryShipping.textContent =
        formatPrice(shipping);

    summaryTotal.textContent =
        formatPrice(total);

    cartCount.textContent =
        `(${totalQuantity})`;
}


/* ----------------------------------------------------------
   INCREASE
   ---------------------------------------------------------- */

function increaseQuantity(index) {

    const cart = getCart();

    if (!cart[index]) {
        return;
    }

    cart[index].quantity =
        Number(cart[index].quantity || 0) + 1;

    saveCart(cart);

    renderCart();
}


/* ----------------------------------------------------------
   DECREASE
   ---------------------------------------------------------- */

function decreaseQuantity(index) {

    const cart = getCart();

    if (!cart[index]) {
        return;
    }

    const quantity =
        Number(cart[index].quantity || 1);


    if (quantity <= 1) {

        const confirmDelete =
            confirm(
                "Số lượng đang là 1. Bạn có muốn xóa sản phẩm này không?"
            );

        if (confirmDelete) {
            cart.splice(index, 1);
        }

    } else {

        cart[index].quantity =
            quantity - 1;
    }


    saveCart(cart);

    renderCart();
}


/* ----------------------------------------------------------
   REMOVE
   ---------------------------------------------------------- */

function removeItem(index) {

    const cart = getCart();

    if (!cart[index]) {
        return;
    }

    const confirmDelete =
        confirm(
            `Bạn có chắc muốn xóa "${cart[index].name}" khỏi giỏ hàng?`
        );

    if (!confirmDelete) {
        return;
    }

    cart.splice(index, 1);

    saveCart(cart);

    renderCart();
}


/* ----------------------------------------------------------
   CLEAR CART
   ---------------------------------------------------------- */

function clearCart() {

    const cart = getCart();

    if (cart.length === 0) {
        return;
    }

    const confirmDelete =
        confirm(
            "Bạn có chắc muốn xóa toàn bộ giỏ hàng?"
        );

    if (!confirmDelete) {
        return;
    }

    localStorage.removeItem("eyewear_cart");

    renderCart();
}


/* ----------------------------------------------------------
   CART EVENTS
   ---------------------------------------------------------- */

function setupCartEvents() {

    const clearButton =
        document.getElementById(
            "clearCartButton"
        );

    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );


    clearButton.addEventListener(
        "click",
        clearCart
    );


	checkoutButton.addEventListener(
	    "click",
	    function () {

	        const cart = getCart();

	        if (cart.length === 0) {

	            alert("Giỏ hàng đang trống.");

	            return;
	        }

	        window.location.href = "checkout.html";
	    }
	);
}
