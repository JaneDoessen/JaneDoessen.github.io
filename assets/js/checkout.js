let listCart = [];
// get data from coockie

function checkCart() {
    var cookieValue = document.cookie.split('; ')
    .find(row => row.startsWith('listCart='));
    if(cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart();
addCartToHTML();

function addCartToHTML() {
    //clear data from html
    let listCartHTML = document.querySelector('.return__cart .list');
    listCartHTML.innerHTML = '';
    let totalQuantityHTML = document.querySelector('.total__quantity');
    let totalPriceHTML = document.querySelector('.total__price');

    let totalQuantity = 0;
    let totalPrice = 0;

    //if product is in cart
    if(listCart) {
        listCart.forEach(product => {
            if(product) {
                let newP = document.createElement('div');
                newP.classList.add('item');
                newP.innerHTML = 
                `<img src="${product.image}" alt="">
                <div class="info">
                    <div class="name">${product.title}</div>
                    <div class="price">$${product.price}</div>
                </div>
                <div class="quantity">${product.quantity}</div>
                <div class="return__price">
                $${product.price * product.quantity}
                </div>`;
                listCartHTML.appendChild(newP);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantity.innerText = totalQuantity;
}
