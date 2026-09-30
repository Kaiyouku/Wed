/* ==========================================================
   EYEWEAR - CHECKOUT.JS
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    renderCheckout();

    setupCheckoutForm();

    updateCartCount();

});


/* ==========================================================
   CART
   ========================================================== */

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


/* ==========================================================
   FORMAT
   ========================================================== */

function formatPrice(price) {

    return Number(price)
        .toLocaleString("vi-VN")
        + " VNĐ";
}


/* ==========================================================
   RENDER CHECKOUT
   ========================================================== */

function renderCheckout() {

    const cart = getCart();

    const itemsContainer =
        document.getElementById("checkoutItems");


    if (cart.length === 0) {

        itemsContainer.innerHTML = `
            <div class="checkout-empty">
                <p>Giỏ hàng đang trống.</p>
                <a href="products.html">
                    Quay lại sản phẩm
                </a>
            </div>
        `;

        document.querySelector(
            ".placeOrderButton"
        ).disabled = true;

        updateSummary(0, 0, 0);

        return;
    }


    let quantity = 0;
    let subtotal = 0;

    itemsContainer.innerHTML = "";


    cart.forEach(function (item) {

        const itemQuantity =
            Number(item.quantity) || 1;

        const price =
            Number(item.price) || 0;

        const itemTotal =
            itemQuantity * price;


        quantity += itemQuantity;
        subtotal += itemTotal;


        itemsContainer.innerHTML += `

            <div class="checkout-item">

                <div class="checkout-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>

                <div class="checkout-item-info">

                    <strong>
                        ${item.name}
                    </strong>

                    <span>
                        ${itemQuantity} x
                        ${formatPrice(price)}
                    </span>

                </div>

                <strong class="checkout-item-total">
                    ${formatPrice(itemTotal)}
                </strong>

            </div>

        `;

    });


    // Hiện tại miễn phí vận chuyển
    const shipping = 0;

    const total =
        subtotal + shipping;


    updateSummary(
        quantity,
        subtotal,
        shipping,
        total
    );
}


/* ==========================================================
   SUMMARY
   ========================================================== */

function updateSummary(
    quantity,
    subtotal,
    shipping,
    total = subtotal + shipping
) {

    document.getElementById(
        "checkoutQuantity"
    ).textContent = quantity;


    document.getElementById(
        "checkoutSubtotal"
    ).textContent =
        formatPrice(subtotal);


    document.getElementById(
        "checkoutShipping"
    ).textContent =
        formatPrice(shipping);


    document.getElementById(
        "checkoutTotal"
    ).textContent =
        formatPrice(total);
}


/* ==========================================================
   CART COUNT
   ========================================================== */

function updateCartCount() {

    const cart = getCart();

    const count =
        cart.reduce(
            function (total, item) {

                return total +
                    Number(
                        item.quantity || 0
                    );

            },
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
   VALIDATION
   ========================================================== */

function clearErrors() {

    const errors = [
        "fullNameError",
        "phoneError",
        "emailError",
        "addressError"
    ];


    errors.forEach(function (id) {

        document.getElementById(
            id
        ).textContent = "";

    });
}


function validateForm() {

    clearErrors();


    const fullName =
        document.getElementById(
            "fullName"
        ).value.trim();


    const phone =
        document.getElementById(
            "phone"
        ).value.trim();


    const email =
        document.getElementById(
            "email"
        ).value.trim();


    const address =
        document.getElementById(
            "address"
        ).value.trim();


    let valid = true;


    if (fullName.length < 2) {

        document.getElementById(
            "fullNameError"
        ).textContent =
            "Vui lòng nhập họ và tên.";

        valid = false;
    }


    const phoneRegex =
        /^(0|\+84)[0-9]{9,10}$/;


    if (!phoneRegex.test(phone)) {

        document.getElementById(
            "phoneError"
        ).textContent =
            "Số điện thoại không hợp lệ.";

        valid = false;
    }


    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(email)) {

        document.getElementById(
            "emailError"
        ).textContent =
            "Email không hợp lệ.";

        valid = false;
    }


    if (address.length < 10) {

        document.getElementById(
            "addressError"
        ).textContent =
            "Vui lòng nhập địa chỉ nhận hàng.";

        valid = false;
    }


    return valid;
}


/* ==========================================================
   FORM SUBMIT
   ========================================================== */

function setupCheckoutForm() {

    const form =
        document.getElementById(
            "checkoutForm"
        );


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const cart = getCart();


            if (cart.length === 0) {

                alert(
                    "Giỏ hàng đang trống."
                );

                return;
            }


            if (!validateForm()) {

                return;
            }


            const fullName =
                document.getElementById(
                    "fullName"
                ).value.trim();


            const phone =
                document.getElementById(
                    "phone"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const address =
                document.getElementById(
                    "address"
                ).value.trim();


            const note =
                document.getElementById(
                    "note"
                ).value.trim();


            const paymentMethod =
                document.querySelector(
                    'input[name="paymentMethod"]:checked'
                ).value;


            const quantity =
                cart.reduce(
                    (total, item) =>
                        total +
                        Number(
                            item.quantity || 0
                        ),
                    0
                );


            const subtotal =
                cart.reduce(
                    (total, item) =>
                        total +
                        Number(item.price || 0) *
                        Number(item.quantity || 0),
                    0
                );


            const order = {

                id:
                    "EW" +
                    Date.now(),

                createdAt:
                    new Date().toISOString(),

                customer: {

                    fullName,
                    phone,
                    email,
                    address,
                    note

                },

                paymentMethod,

                items: cart,

                quantity,

                subtotal,

                shipping: 0,

                total: subtotal

            };


            /*
             * Đây là bản frontend demo.
             * Đơn hàng được lưu trong localStorage.
             * Khi backend Order API được tạo,
             * có thể thay đoạn này bằng fetch POST.
             */

            localStorage.setItem(
                "eyewear_last_order",
                JSON.stringify(order)
            );


            localStorage.removeItem(
                "eyewear_cart"
            );


            showOrderSuccess(
                order
            );

        }
    );
}


/* ==========================================================
   SUCCESS
   ========================================================== */

function showOrderSuccess(order) {

    const paymentText = {

        cod:
            "Thanh toán khi nhận hàng (COD)",

        bank:
            "Chuyển khoản ngân hàng",

        momo:
            "Ví điện tử"

    };


    document.querySelector(
        ".checkout-page"
    ).innerHTML = `

        <div class="order-success">

            <div class="success-icon">
                ✓
            </div>

            <h1>
                Đặt hàng thành công!
            </h1>

            <p>
                Cảm ơn
                <strong>
                    ${order.customer.fullName}
                </strong>
                đã mua hàng tại EyeWear.
            </p>


            <div class="order-success-info">

                <div>
                    <span>Mã đơn hàng</span>
                    <strong>${order.id}</strong>
                </div>

                <div>
                    <span>Số điện thoại</span>
                    <strong>${order.customer.phone}</strong>
                </div>

                <div>
                    <span>Thanh toán</span>
                    <strong>
                        ${paymentText[order.paymentMethod]}
                    </strong>
                </div>

                <div>
                    <span>Tổng tiền</span>
                    <strong>
                        ${formatPrice(order.total)}
                    </strong>
                </div>

            </div>


            <p class="success-note">
                Đơn hàng của bạn đã được ghi nhận.
                Nhân viên EyeWear sẽ liên hệ để xác nhận đơn hàng.
            </p>


            <div class="success-actions">

                <a
                    href="index.html"
                    class="success-button">
                    Về trang chủ
                </a>

                <a
                    href="products.html"
                    class="success-button secondary">
                    Tiếp tục mua hàng
                </a>

            </div>

        </div>

    `;
}
