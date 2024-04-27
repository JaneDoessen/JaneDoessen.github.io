// ===============SHOW MENU===================//
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// =============== MENU SHOW ===================//
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu')
    });
}

// =============== MENU HIDDEN===================//
// Validate if constant exists
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    });
}

// ===============SHOW CART===================//
const cart = document.getElementById('cart');
const cartShop = document.getElementById('cart-shop');
const cartClose = document.getElementById('cart-close');

// =============== CART SHOW ===================//
// Validate if constant exists
if (cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add('show-cart')
    });
}

// =============== CART HIDDEN===================//
// Validate if constant exists
if (cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove('show-cart')
    });
}

// =============== CART ======================= //
let products = null;
// get data from json
fetch('product.json')
.then(response => response.json())
.then(data => {
    products = data;
    addDataToHTML();
})

// show data in list html
function addDataToHTML() {
    //remove default data in html
    let listProductHTML = document.querySelector('.shop__items');
    listProductHTML.innerHTML = '';

    //add new data
    if(products != null){
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<div class="shop__content">
            <div class="shop__tag">Sale</div>
            <img src="${product.image}" alt="" class="shop__img">
            <h3 class="shop__title">${product.title}</h3>
            <span class="shop__subtitle">${product.subtitle} </span>

            <div class="shop__prices">
                <span class="shop__price">$${product.price}</span>
                <span class="shop__discount">$${product.discount}</span>
            </div>
            <a class="button shop__button" onclick="addCart(${product.id})">
                <i class="bx bx-cart-alt shop__icon"></i>
            </a>;
            </div>`
            listProductHTML.appendChild(newProduct);
        });
    }
}

let listCart = [];
// let's get cookie data cart
function checkCart() {
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
    if(cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart();

function addCart($idProduct) {
    let productCopy = JSON.parse(JSON.stringify(products));
    //if this product is not in the cart yet
    if(!listCart[$idProduct]) {
        let dataProduct = productCopy.filter(
            product => product.id == $idProduct
        )[0];
        //add product to cart
        listCart[$idProduct] = dataProduct;
        listCart[$idProduct].quantity = 1;
    }else{
        //if this product is already in the cart, the quantity is being increased
        listCart[$idProduct].quantity++;
    }
    //saving data in cookie
    let timeSave = "expires=Thu, 31 Dec 2024 23:59:59 UTC";
    document.cookie = "listCart="+JSON.stringify(listCart)+"; "+timeSave+"; path=/;";
    addCartToHTML();
}
addCartToHTML();

function addCartToHTML() {
    // clear default data 
    let listCartHTML = document.querySelector('.list__cart');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('.total__mark');
    let totalQuantity = 0;

    if(listCart) {
        listCart.forEach(product => {
            if(product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                `<img src="${product.image}">
                    <div class="content">
                        <div class="name">${product.title}</div>
                        <div class="price">$${product.price}</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${product.id}, '-')">-</button>
                        <span class="value">${product.quantity}</span>
                        <button onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
            }
        })
    }
totalHTML.innerText = totalQuantity;
}

function changeQuantity($idProduct, $type) {
    switch ($type) {
        case '+':
            listCart[$idProduct].quantity++;
            break;
        case '-':
            listCart[$idProduct].quantity--;
            if(listCart[$idProduct] = 0) {
                delete listCart[$idProduct];
            }
            break;
        default:
            break;
    }
    //save new data in cookie
    let timeSave = "expires=Thu, 31 Dec 2024 23:59:59 UTC";
    document.cookie = "listCart="+JSON.stringify(listCart)+"; "+timeSave+"; path=/;";

    //reload list cart in HTML
    addCartToHTML();

}

// ===============SHOW LOGIN===================//
const login = document.getElementById('login');
const loginButton = document.getElementById('login-button');
const loginClose = document.getElementById('login-close');

// =============== LOGIN SHOW ===================//
// Validate if constant exists
if (loginButton) {
    loginButton.addEventListener("click", () => {
        login.classList.add('show-login')
    });
}

// =============== LOGIN HIDDEN===================//
// Validate if constant exists
if (loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove('show-login')
    });
}

// ===============HOME SWIPER===================//
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 50,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


// ===============CHANGE BACKGROUND HEADER===================//
function scrollHeader() {
    const header = document.getElementById('header')
    // when then scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
  


// ===============NEW SWIPER===================//
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: 'true',
    slidesPerView: "auto",
    loop: 'true',
  });


// ===============SHOW SCROLL UP ===================//
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// ===============LIGHT BOX ===================//

// ===============QUESTIONS ACCORDION ===================//
const accordionItem = document.querySelectorAll('.questions__item');
accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');

        toggleItem(item);

        if(openItem && openItem !== item) {
            toggleItem(openItem);
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
    }
}
