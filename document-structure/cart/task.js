const cartProducts = document.querySelector('.cart__products');
document.addEventListener('click', (event) => {

    const productInc = event.target.classList.contains('product__quantity-control_inc');
    const productDec = event.target.classList.contains('product__quantity-control_dec');
    const productValue = event.target.parentElement.querySelector('.product__quantity-value');
    const productAdd = event.target.classList.contains('product__add');

    if (productInc) {
        productValue.textContent++;
    };
    if (productDec) {
        if (productValue.textContent > 1) {
            productValue.textContent--;
        };
    };
    
    if (productAdd) {
        const parent = event.target.closest('.product');
        const check = document.querySelector('.cart__product[data-id="'+parent.dataset.id+'"]');
        if (check) {
            const checkValue = check.querySelector('.cart__product-count');
            const sum = Number(productValue.textContent) + Number(checkValue.textContent);
            checkValue.textContent = sum;
        } else {
            cartProducts.innerHTML += `
            <div class="cart__product" data-id="${parent.dataset.id}">
                <img class="cart__product-image" src="${parent.querySelector('.product__image').src}">
                <div class="cart__product-count">${productValue.textContent}</div>
            </div>`
        };
    };
    event.preventDefault();
});