const openFilterModal = document.querySelector('.categ-flter');
const filterModal = document.querySelector('.modal-filter')
//filter btns
const showAllButton = document.querySelector('.show-all');
const filterLiner = document.querySelector('.liner');
const filterShadows = document.querySelector('.shadows');
const filterMascara = document.querySelector('.mascara');
const filterBrows = document.querySelector('.brows')
//containers
const cosmeticsContainer = document.querySelector('.eyes-cosm-container');
const filterOutputContainer = document.querySelector('.filt-container');
//cart
const openCartBtn = document.getElementById('cart-btn');
const shopBasketCloseButton = document.querySelector('.modal-close');
const basketModal = document.querySelector('.modal-window');
const basketModalBody = document.querySelector('.modal-body');

openCartBtn.addEventListener('click', showCartModal);
shopBasketCloseButton.addEventListener('click', hideCartModal);

const allMakeUpProducts = [];
const productsId = [];
const cart = JSON.parse(localStorage.getItem('cart')) || {};

const allEyesProducts = []
let brows
let eyeLiners
let shadows
let mascaras

openFilterModal.addEventListener('click', () => {
    filterModal.classList.toggle('shown');
})

getAllProducts();
function getAllProducts() {
    const url = [
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush",
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer",
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation",
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner",
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow",
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow",
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara",
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick",
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip liner"
    ]
  
    for (let i = 0; i < url.length; i++) {
  
      const xhttp = new XMLHttpRequest();
  
      xhttp.open('GET', url[i]);
      xhttp.send();
      xhttp.onload = () => {
        let response = JSON.parse(xhttp.responseText);
        allMakeUpProducts.push(response);
      }
    }
  
}

createAllEyesProducts();
function createAllEyesProducts() {
    const urlEyebrow = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow'
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlEyebrow);
    xhttp.send();
    xhttp.onload = () => {
        brows = JSON.parse(xhttp.responseText);
        console.log(brows);
        allEyesProducts.push(brows);
        for (let i = 0; i < brows.length; i++) {

            const productItem = document.createElement('div');
            productItem.classList.add('eyes-cosm-prod');

            const div = document.createElement('div')
            div.classList.add('eyes-cosm-prod-cont');

            const productImg = document.createElement('img');
            productImg.classList.add('eyes-prod-img');

            const productTitle = document.createElement('h4');
            productTitle.classList.add('eyes-prod-name');

            const productBrand = document.createElement('p');
            productBrand.classList.add('eyes-prod-brand');

            const productPrice = document.createElement('p');
            productPrice.classList.add('eyes-prod-price');

            const productRating = document.createElement('span');
            productRating.classList.add('hair-prod-rating');

            const addBtn = document.createElement('button');
            addBtn.classList.add('toggle-basket');


            cosmeticsContainer.appendChild(productItem);
            productItem.appendChild(div);
            div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);

            productImg.setAttribute('src', brows[i].image_link)
            productTitle.innerText = brows[i].name;
            productPrice.innerHTML = brows[i].price + '$';
            productBrand.innerText = brows[i].brand
            productRating.innerHTML = brows[i].rating;
            productImg.addEventListener('error', () => {
                productImg.setAttribute('src', '../assets/images/error-img.jpg')
            })
            addBtn.innerText = 'add';
            addBtn.addEventListener('click', () => handleAddToCart(brows[i].id))

        }

    }
    const urlLiner = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner';
    const xhttpSecond = new XMLHttpRequest();
    xhttpSecond.open('GET', urlLiner);
    xhttpSecond.send();
    xhttpSecond.onload = () => {
        eyeLiners = JSON.parse(xhttpSecond.responseText);
        allEyesProducts.push(eyeLiners);
        console.log(eyeLiners);
        for (let i = 0; i < eyeLiners.length; i++) {

            const productItem = document.createElement('div');
            productItem.classList.add('eyes-cosm-prod');

            const div = document.createElement('div')
            div.classList.add('eyes-cosm-prod-cont');

            const productImg = document.createElement('img');
            productImg.classList.add('eyes-prod-img');

            const productTitle = document.createElement('h4');
            productTitle.classList.add('eyes-prod-name');

            const productBrand = document.createElement('p');
            productBrand.classList.add('eyes-prod-brand');

            const productPrice = document.createElement('p');
            productPrice.classList.add('eyes-prod-price');

            const productRating = document.createElement('span');
            productRating.classList.add('hair-prod-rating');

            const addBtn = document.createElement('button');
            addBtn.classList.add('toggle-basket');


            cosmeticsContainer.appendChild(productItem);
            productItem.appendChild(div);
            div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);


            productImg.setAttribute('src', eyeLiners[i].image_link)
            productTitle.innerText = eyeLiners[i].name;
            productPrice.innerHTML = eyeLiners[i].price + '$';
            productBrand.innerText = eyeLiners[i].brand
            productRating.innerHTML = eyeLiners[i].rating;
            productImg.addEventListener('error', () => {
                productImg.setAttribute('src', '../assets/images/error-img.jpg')
            })
            addBtn.innerText = 'add';
            addBtn.addEventListener('click', () => handleAddToCart(eyeLiners[i].id))
        }
    }

    const urlShadows = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow';
    const xttpThird = new XMLHttpRequest();
    xttpThird.open('GET', urlShadows);
    xttpThird.send();
    xttpThird.onload = () => {
        shadows = JSON.parse(xttpThird.responseText);
        allEyesProducts.push(shadows);
        console.log(shadows);
        for (let i = 0; i < shadows.length; i++) {

            const productItem = document.createElement('div');
            productItem.classList.add('eyes-cosm-prod');

            const div = document.createElement('div')
            div.classList.add('eyes-cosm-prod-cont');

            const productImg = document.createElement('img');
            productImg.classList.add('eyes-prod-img');

            const productTitle = document.createElement('h4');
            productTitle.classList.add('eyes-prod-name');

            const productBrand = document.createElement('p');
            productBrand.classList.add('eyes-prod-brand');

            const productPrice = document.createElement('p');
            productPrice.classList.add('eyes-prod-price');

            const productRating = document.createElement('span');
            productRating.classList.add('hair-prod-rating');

            const addBtn = document.createElement('button');
            addBtn.classList.add('toggle-basket');


            cosmeticsContainer.appendChild(productItem);
            productItem.appendChild(div);
            div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);

            productImg.setAttribute('src', shadows[i].image_link)
            productTitle.innerText = shadows[i].name;
            productPrice.innerHTML = shadows[i].price + '$';
            productBrand.innerText = shadows[i].brand
            productRating.innerHTML = shadows[i].rating;
            productImg.addEventListener('error', () => {
                productImg.setAttribute('src', '../assets/images/error-img.jpg')
            })
            addBtn.innerText = 'add';
            addBtn.addEventListener('click', () => handleAddToCart(shadows[i].id))
        }
    }

    const urlMascara = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara';
    const xttpFourth = new XMLHttpRequest();
    xttpFourth.open('GET', urlMascara);
    xttpFourth.send();
    xttpFourth.onload = () => {
        mascaras = JSON.parse(xttpFourth.responseText);
        allEyesProducts.push(mascaras);
        console.log(mascaras);
        for (let i = 0; i < mascaras.length; i++) {

            const productItem = document.createElement('div');
            productItem.classList.add('eyes-cosm-prod');

            const div = document.createElement('div')
            div.classList.add('eyes-cosm-prod-cont');

            const productImg = document.createElement('img');
            productImg.classList.add('eyes-prod-img');

            const productTitle = document.createElement('h4');
            productTitle.classList.add('eyes-prod-name');

            const productBrand = document.createElement('p');
            productBrand.classList.add('eyes-prod-brand');

            const productPrice = document.createElement('p');
            productPrice.classList.add('eyes-prod-price');

            const productRating = document.createElement('span');
            productRating.classList.add('hair-prod-rating');

            const addBtn = document.createElement('button');
            addBtn.classList.add('toggle-basket');


            cosmeticsContainer.appendChild(productItem);
            productItem.appendChild(div);
            div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);

            productImg.setAttribute('src', mascaras[i].image_link)
            productTitle.innerText = mascaras[i].name;
            productPrice.innerHTML = mascaras[i].price + '$';
            productBrand.innerText = mascaras[i].brand
            productRating.innerHTML = mascaras[i].rating;
            productImg.addEventListener('error', () => {
                productImg.setAttribute('src', '../assets/images/error-img.jpg')
            })
            addBtn.innerText = 'add';
            addBtn.addEventListener('click', () => handleAddToCart(mascaras[i].id))

        }
    }

    // allEyesProducts.push(brows, eyeLiners, shadows, mascaras);
}

filterBrows.addEventListener('click', () => renderFilteredProductsCards(brows))
filterLiner.addEventListener('click', () => renderFilteredProductsCards(eyeLiners))
filterShadows.addEventListener('click', () => renderFilteredProductsCards(shadows))
filterMascara.addEventListener('click', () => renderFilteredProductsCards(mascaras))
showAllButton.addEventListener('click', () => renderFilteredProductsCards(allEyesProducts.flat()));

function renderFilteredProductsCards(array) {
    filterOutputContainer.innerHTML = '';
    cosmeticsContainer.style.display = 'none';
    filterOutputContainer.style.display = 'grid';

    for (let i = 0; i < array.length; i++) {

        const productItem = document.createElement('div');
        productItem.classList.add('eyes-cosm-prod');

        const div = document.createElement('div')
        div.classList.add('eyes-cosm-prod-cont');

        const productImg = document.createElement('img');
        productImg.classList.add('eyes-prod-img');

        const productTitle = document.createElement('h4');
        productTitle.classList.add('eyes-prod-name');

        const productBrand = document.createElement('p');
        productBrand.classList.add('eyes-prod-brand');

        const productPrice = document.createElement('p');
        productPrice.classList.add('eyes-prod-price');

        const productRating = document.createElement('span');
        productRating.classList.add('hair-prod-rating');

        const addBtn = document.createElement('button');
        addBtn.classList.add('toggle-basket');

        filterOutputContainer.appendChild(productItem);
        productItem.appendChild(div);
        div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);

        productImg.setAttribute('src', array[i].image_link)
        productTitle.innerText = array[i].name;
        productPrice.innerHTML = array[i].price + '$';
        productBrand.innerText = array[i].brand
        productRating.innerHTML = array[i].rating;
        productImg.addEventListener('error', () => {
            productImg.setAttribute('src', '../assets/images/error-img.jpg')
        })
        addBtn.innerText = 'add';
        addBtn.addEventListener('click', () => handleAddToCart(array[i].id))

    }

}

function showCartModal() {
    renderCart();
    basketModal.style.display = 'block';
  }
  
  function hideCartModal() {
    basketModal.style.display = 'none';
  }
  
  function handleAddToCart(id){
    cart[id] = (cart[id] || 0) + 1;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function renderCart() {
    let ids = Object.keys(cart);
    
    for (let i = 0; i < ids.length; i++) {
  
        let currentProduct = allMakeUpProducts.flat().find(item => item.id == ids[i]);
  
        const boughtProductsContainer = document.createElement('div');
        boughtProductsContainer.classList.add('pr-bought-cont')
  
        const productBoughtName = document.createElement('div');
        productBoughtName.classList.add('pr-bought-name');
  
        const productBoughtPrice = document.createElement('div');
        productBoughtPrice.classList.add('pr-bought-price');
  
        const prodBoughtCount = document.createElement('div');
        prodBoughtCount.classList.add('prod-count');
        basketModalBody.appendChild(boughtProductsContainer)
        boughtProductsContainer.append(productBoughtName, productBoughtPrice, prodBoughtCount);
  
  
        productBoughtName.innerHTML = currentProduct.name + currentProduct.brand;
        productBoughtPrice.innerText = currentProduct.price + '$';
        prodBoughtCount.innerText = cart[ids[i]];
    }
  }
  
  
  

// filterBrows.addEventListener('click', () => {
//     const urlEyebrow = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow'
//     const xhttp = new XMLHttpRequest();

//     xhttp.open('GET', urlEyebrow);
//     xhttp.send();
//     xhttp.onload = () => {
//         let a = JSON.parse(xhttp.responseText);
//         console.log(a);
//             for (let i=0; i < a.length; i++ ){

//                 const productItem = document.createElement('div');
//                 productItem.classList.add('eyes-cosm-prod');

//                 const div = document.createElement('div')
//                 div.classList.add('eyes-cosm-prod-cont');

//                 const productImg = document.createElement('img');
//                 productImg.classList.add('eyes-prod-img');

//                 const productTitle = document.createElement('h4');
//                 productTitle.classList.add('eyes-prod-name');

//                 const productBrand = document.createElement('p');
//                 productBrand.classList.add('eyes-prod-brand');

//                 const productPrice = document.createElement('p');
//                 productPrice.classList.add('eyes-prod-price');

//                 const productRating = document.createElement('span');
//                 productRating.classList.add('hair-prod-rating');

//                 const addBtn = document.createElement('button');
//                 addBtn.classList.add('toggle-basket');


//                 browsContainer.appendChild(productItem);
//                 productItem.appendChild(div);
//                 div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);

//                 productImg.setAttribute('src', a[i].image_link)            
//                 productTitle.innerText = a[i].name;
//                 productPrice.innerHTML = a[i].price + '$';
//                 productBrand.innerText = a[i].brand
//                 productRating.innerHTML = a[i].rating;
//                 productImg.addEventListener('error', () => {
//                     productImg.setAttribute('src', '../assets/images/error-img.jpg')
//                 })
//                 addBtn.innerText = 'add';

//         }

//     cosmeticsContainer.style.display = "none";
//     linerContainer.style.display = "none";
//     shadowContainer.style.display = "none";
//     mascaraContainer.style.display = "none";
//     browsContainer.style.display = "grid";

//     }
// })

// filterLiner.addEventListener('click', () => {
//     const urlLiner = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner';
//     const xhttpSecond = new XMLHttpRequest();
//     xhttpSecond.open('GET', urlLiner);
//     xhttpSecond.send();
//     xhttpSecond.onload = () => {
//         let b = JSON.parse(xhttpSecond.responseText);
//         console.log(b);
//             for (let i=0; i < b.length; i++ ){

//                 const productItem = document.createElement('div');
//                 productItem.classList.add('eyes-cosm-prod');

//                 const div = document.createElement('div')
//                 div.classList.add('eyes-cosm-prod-cont');

//                 const productImg = document.createElement('img');
//                 productImg.classList.add('eyes-prod-img');

//                 const productTitle = document.createElement('h4');
//                 productTitle.classList.add('eyes-prod-name');

//                 const productBrand = document.createElement('p');
//                 productBrand.classList.add('eyes-prod-brand');

//                 const productPrice = document.createElement('p');
//                 productPrice.classList.add('eyes-prod-price');

//                 const productRating = document.createElement('span');
//                 productRating.classList.add('hair-prod-rating');

//                 const addBtn = document.createElement('button');
//                 addBtn.classList.add('toggle-basket');            

//                 linerContainer.appendChild(productItem);
//                 productItem.appendChild(div);
//                 div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);

//                 productImg.setAttribute('src', b[i].image_link)            
//                 productTitle.innerText = b[i].name;
//                 productPrice.innerHTML = b[i].price + '$';
//                 productBrand.innerText = b[i].brand
//                 productRating.innerHTML = b[i].rating;
//                 productImg.addEventListener('error', () => {
//                     productImg.setAttribute('src', '../assets/images/error-img.jpg')
//                 })
//                 addBtn.innerText = 'add';
//         }
//     }
//     cosmeticsContainer.style.display = "none";
//     browsContainer.style.display = "none";
//     shadowContainer.style.display = "none";
//     mascaraContainer.style.display = "none";

//     linerContainer.style.display = "grid";

// })

// filterShadows.addEventListener('click', () => {
//     const urlShadows = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow';
//     const xttpThird = new XMLHttpRequest();
//     xttpThird.open('GET', urlShadows);
//     xttpThird.send();
//     xttpThird.onload = () => {
//         let c = JSON.parse(xttpThird.responseText);
//         console.log(c);
//             for (let i=0; i < c.length; i++ ){

//                 const productItem = document.createElement('div');
//                 productItem.classList.add('eyes-cosm-prod');

//                 const div = document.createElement('div')
//                 div.classList.add('eyes-cosm-prod-cont');

//                 const productImg = document.createElement('img');
//                 productImg.classList.add('eyes-prod-img');

//                 const productTitle = document.createElement('h4');
//                 productTitle.classList.add('eyes-prod-name');

//                 const productBrand = document.createElement('p');
//                 productBrand.classList.add('eyes-prod-brand');

//                 const productPrice = document.createElement('p');
//                 productPrice.classList.add('eyes-prod-price');

//                 const productRating = document.createElement('span');
//                 productRating.classList.add('hair-prod-rating');

//                 const addBtn = document.createElement('button');
//                 addBtn.classList.add('toggle-basket');


//                 shadowContainer.appendChild(productItem);
//                 productItem.appendChild(div);
//                 div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);

//                 productImg.setAttribute('src', c[i].image_link)            
//                 productTitle.innerText = c[i].name;
//                 productPrice.innerHTML = c[i].price + '$';
//                 productBrand.innerText = c[i].brand
//                 productRating.innerHTML = c[i].rating;
//                 productImg.addEventListener('error', () => {
//                     productImg.setAttribute('src', '../assets/images/error-img.jpg')
//                 })
//                 addBtn.innerText = 'add';

//         }
//         }
//     cosmeticsContainer.style.display = "none";
//     browsContainer.style.display = "none";
//     linerContainer.style.display = "none";
//     mascaraContainer.style.display = "none";

//     shadowContainer.style.display = "grid";
// })

// filterMascara.addEventListener('click', () => {
//     const urlMascara = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara';
//     const xttpFourth = new XMLHttpRequest();
//     xttpFourth.open('GET', urlMascara);
//     xttpFourth.send();
//     xttpFourth.onload = () => {
//         let d = JSON.parse(xttpFourth.responseText);
//         console.log(d);
//             for (let i=0; i < d.length; i++ ){

//                 const productItem = document.createElement('div');
//                 productItem.classList.add('eyes-cosm-prod');

//                 const div = document.createElement('div')
//                 div.classList.add('eyes-cosm-prod-cont');

//                 const productImg = document.createElement('img');
//                 productImg.classList.add('eyes-prod-img');

//                 const productTitle = document.createElement('h4');
//                 productTitle.classList.add('eyes-prod-name');

//                 const productBrand = document.createElement('p');
//                 productBrand.classList.add('eyes-prod-brand');

//                 const productPrice = document.createElement('p');
//                 productPrice.classList.add('eyes-prod-price');

//                 const productRating = document.createElement('span');
//                 productRating.classList.add('hair-prod-rating');

//                 const addBtn = document.createElement('button');
//                 addBtn.classList.add('toggle-basket');

//                 mascaraContainer.appendChild(productItem);
//                 productItem.appendChild(div);
//                 div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);

//                 productImg.setAttribute('src', d[i].image_link)            
//                 productTitle.innerText = d[i].name;
//                 productPrice.innerHTML = d[i].price + '$';
//                 productBrand.innerText = d[i].brand
//                 productRating.innerHTML = d[i].rating;
//                 productImg.addEventListener('error', () => {
//                     productImg.setAttribute('src', '../assets/images/error-img.jpg')
//                 })
//                 addBtn.innerText = 'add';

//         }
//     }
//     cosmeticsContainer.style.display = "none";
//     browsContainer.style.display = "none";
//     linerContainer.style.display = "none";
//     shadowContainer.style.display = "none";

//     mascaraContainer.style.display = "grid";

// })
// showAllButton.addEventListener('click', createAllEyesProducts);




// function createproducts(){
//     const url = 'https://api.rainforestapi.com/request?api_key=6FCA30D1D3C04CBBBEB478E1E7023A0F&category_id=11057241&amazon_domain=amazon.com&type=category';
//     const xhttp = new XMLHttpRequest();

//     xhttp.open('GET', url);

//     xhttp.send();

//     xhttp.onload = () => {
//         let a = JSON.parse(xhttp.responseText);
//         console.log(a);

//         for (let i=0; i <= a.category_results.length; i++ ){

//             const productItem = document.createElement('div');
//             productItem.classList.add('hair-cosm-prod');

//             const div = document.createElement('div')
//             div.classList.add('hair-cosm-prod-cont');

//             const productImg = document.createElement('img');
//             productImg.classList.add('hair-prod-img');

//             const productTitle = document.createElement('h4');
//             productTitle.classList.add('hair-prod-name');

//             const productPrice = document.createElement('p');
//             productPrice.classList.add('hair-prod-price');

//             const productRating = document.createElement('span');
//             productRating.classList.add('hair-prod-rating')

//             cosmeticsContainer.appendChild(productItem);
//             productItem.appendChild(div);
//             div.append(productImg, productTitle, productPrice, productRating);

//             productImg.setAttribute('src', `${a.category_results[i].image}`);
//             productTitle.innerText = a.category_results[i].title;
//             productPrice.innerHTML = a.category_results[i].price;
//             productRating.innerHTML = a.category_results[i].rating;
//         }
//     }
//     filterShampoo.addEventListener('click', () => {
//         xhttp.abort();
//         const shampooFilteredUrl = 'https://api.rainforestapi.com/request?api_key=6FCA30D1D3C04CBBBEB478E1E7023A0F&category_id=11057651&amazon_domain=amazon.com&type=category';
//         const request = new XMLHttpRequest;
//         request.open('GET', shampooFilteredUrl);
//         request.send();
//         request.onload = () => {
//             let b = JSON.parse(request.responseText);
//             console.log(b);

//             for (let i=0; i <= b.category_results.length; i++ ){
//                 cosmeticsContainer.style.display = "none"
//                 const productItem = document.createElement('div');
//                 productItem.classList.add('hair-cosm-prod');

//                 const div = document.createElement('div')
//                 div.classList.add('hair-cosm-prod-cont');

//                 const productImg = document.createElement('img');
//                 productImg.classList.add('hair-prod-img');

//                 const productTitle = document.createElement('h4');
//                 productTitle.classList.add('hair-prod-name');

//                 const productPrice = document.createElement('p');
//                 productPrice.classList.add('hair-prod-price');

//                 const productRating = document.createElement('span');
//                 productRating.classList.add('hair-prod-rating')

//                 shampoosContainer.appendChild(productItem);
//                 productItem.appendChild(div);
//                 div.append(productImg, productTitle, productPrice, productRating);

//                 productImg.setAttribute('src', `${b.category_results[i].image}`);
//                 productTitle.innerText = b.category_results[i].title;
//                 productPrice.innerHTML = b.category_results[i].price;
//                 productRating.innerHTML = b.category_results[i].rating;
//             }

//         }})

//     filterConditioner.addEventListener('click', () => {

//             xhttp.abort();
//             request.abort();
//             const conditionerFilteredUrl = 'https://api.rainforestapi.com/request?api_key=6FCA30D1D3C04CBBBEB478E1E7023A0F&category_id=17911765011,17911766011,11057251,17911767011&amazon_domain=amazon.com&type=category';
//             const requestSecond = new XMLHttpRequest;
//             requestSecond.open('GET', conditionerFilteredUrl);
//             requestSecond.send();
//             requestSecond.onload = () => {
//                 let c = JSON.parse(requestSecond.responseText);
//                 console.log(c);

//                 for (let i=0; i <= c.category_results.length; i++ ){

//                     const productItem = document.createElement('div');
//                     productItem.classList.add('hair-cosm-prod');

//                     const div = document.createElement('div')
//                     div.classList.add('hair-cosm-prod-cont');

//                     const productImg = document.createElement('img');
//                     productImg.classList.add('hair-prod-img');

//                     const productTitle = document.createElement('h4');
//                     productTitle.classList.add('hair-prod-name');

//                     const productPrice = document.createElement('p');
//                     productPrice.classList.add('hair-prod-price');

//                     const productRating = document.createElement('span');
//                     productRating.classList.add('hair-prod-rating')

//                     cosmeticsContainer.appendChild(productItem);
//                     productItem.appendChild(div);
//                     div.append(productImg, productTitle, productPrice, productRating);

//                     productImg.setAttribute('src', `${c.category_results[i].image}`);
//                     productTitle.innerText = c.category_results[i].title;
//                     productPrice.innerHTML = c.category_results[i].price;
//                     productRating.innerHTML = c.category_results[i].rating;
//                 }

//             }
//         })
//10666437011 - masks
// 17911765011 - 2in1 shampoo and conditioner
// 17911766011 - 3-in-1 Shampoo, Conditioner & Body Wash
// 11057251 - conditioners
// 17911767011 - deep conditioner
// 10656664011 - dry shampoo
// 11057651 - shampoos
// }
