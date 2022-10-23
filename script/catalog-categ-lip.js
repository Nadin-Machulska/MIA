const openFilterModal = document.querySelector('.categ-flter');
const filterModal = document.querySelector('.modal-filter');
//filter btns
const showAllButton = document.querySelector('.show-all');
const filterLipstick = document.querySelector('.stick');
const filterLiner = document.querySelector('.liner');
//containers
const cosmeticsContainer = document.querySelector('.lips-cosm-container');
const filterOutputContainer = document.querySelector('.filt-container');

const allLipsProducts = []
let stick
let liner


openFilterModal.addEventListener('click', () => {
    filterModal.classList.toggle('shown');
})

createAllLipsProducts();


function createAllLipsProducts() {
    const urlStick = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick'
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlStick);
    xhttp.send();
    xhttp.onload = () => {
        stick = JSON.parse(xhttp.responseText);
        console.log(stick);
        allLipsProducts.push(stick);
        for (let i = 0; i < stick.length; i++) {

            const productItem = document.createElement('div');
            productItem.classList.add('face-cosm-prod');

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
            const buttonBasket = document.createElement('button');
            buttonBasket.classList.add('toggle-basket');


            cosmeticsContainer.appendChild(productItem);
            productItem.appendChild(div);
            div.append(productImg, productTitle, productPrice, productBrand, productRating, buttonBasket);

            productImg.setAttribute('src', stick[i].image_link)
            productTitle.innerText = stick[i].name;
            productPrice.innerHTML = stick[i].price + '$';
            productBrand.innerText = stick[i].brand
            productRating.innerHTML = stick[i].rating;
            productImg.addEventListener('error', () => {
                productImg.setAttribute('src', '../assets/images/error-img.jpg')
            })
            buttonBasket.innerText = 'add';
            // buttonBasket.dataset.id = products[i].id;
            buttonBasket.addEventListener('click', () => {

                basket[products[i].id] = (basket[products[i].id] || 0) + 1;
                localStorage.setItem('cart', JSON.stringify(basket));
                let boughtProduct = JSON.parse(localStorage.getItem('cart'));
                let propBoughtProd = Object.keys(boughtProduct);
                console.log(boughtProduct);
                console.log(propBoughtProd)


                let currentProduct = products.find(item => item.id == (Number(propBoughtProd[0])));

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


                productBoughtName.innerText = currentProduct.name + currentProduct.brand;
                productBoughtPrice.innerText = currentProduct.price + '$';
                prodBoughtCount.innerHTML = Object.values(boughtProduct);

            }
            )

        }

    }

    const urlLiner = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip%20liner';
    const xhttpSecond = new XMLHttpRequest();
    xhttpSecond.open('GET', urlLiner);
    xhttpSecond.send();
    xhttpSecond.onload = () => {
        liner = JSON.parse(xhttpSecond.responseText);
        console.log(liner);
        allLipsProducts.push(liner);
        for (let i = 0; i < liner.length; i++) {

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

            const buttonBasket = document.createElement('button');
            buttonBasket.classList.add('toggle-basket');

            cosmeticsContainer.appendChild(productItem);
            productItem.appendChild(div);
            div.append(productImg, productTitle, productPrice, productBrand, productRating, buttonBasket);

            productImg.setAttribute('src', liner[i].image_link)
            productTitle.innerText = liner[i].name;
            productPrice.innerHTML = liner[i].price + '$';
            productBrand.innerText = liner[i].brand
            productRating.innerHTML = liner[i].rating;
            productImg.addEventListener('error', () => {
                productImg.setAttribute('src', '../assets/images/error-img.jpg')
            })
            buttonBasket.innerText = 'add';
            // buttonBasket.dataset.id = products[i].id;
            buttonBasket.addEventListener('click', () => {

                basket[products[i].id] = (basket[products[i].id] || 0) + 1;
                localStorage.setItem('cart', JSON.stringify(basket));
                let boughtProduct = JSON.parse(localStorage.getItem('cart'));
                let propBoughtProd = Object.keys(boughtProduct);
                console.log(boughtProduct);
                console.log(propBoughtProd)


                let currentProduct = products.find(item => item.id == (Number(propBoughtProd[0])));

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


                productBoughtName.innerText = currentProduct.name + currentProduct.brand;
                productBoughtPrice.innerText = currentProduct.price + '$';
                prodBoughtCount.innerHTML = Object.values(boughtProduct);

            }
            )

        }
    }

}

filterLipstick.addEventListener('click', () => renderFilteredProductsCards(stick))
filterLiner.addEventListener('click', () => renderFilteredProductsCards(liner))
showAllButton.addEventListener('click', () => createAllLipsProducts(allLipsProducts.flat()));

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
    }

}


// filterLipstick.addEventListener('click', () => {
//     const urlStick = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick'
//     const xhttp = new XMLHttpRequest();

//     xhttp.open('GET', urlStick);
//     xhttp.send();
//     xhttp.onload = () => {
//         let a = JSON.parse(xhttp.responseText);
//         console.log(a);
//         for (let i = 0; i < a.length; i++) {

//             const productItem = document.createElement('div');
//             productItem.classList.add('eyes-cosm-prod');

//             const div = document.createElement('div')
//             div.classList.add('eyes-cosm-prod-cont');

//             const productImg = document.createElement('img');
//             productImg.classList.add('eyes-prod-img');

//             const productTitle = document.createElement('h4');
//             productTitle.classList.add('eyes-prod-name');

//             const productBrand = document.createElement('p');
//             productBrand.classList.add('eyes-prod-brand');

//             const productPrice = document.createElement('p');
//             productPrice.classList.add('eyes-prod-price');

//             const productRating = document.createElement('span');
//             productRating.classList.add('hair-prod-rating');

//             const buttonBasket = document.createElement('button');
//             buttonBasket.classList.add('toggle-basket');

//             lipstickContainer.appendChild(productItem);
//             productItem.appendChild(div);
//             div.append(productImg, productTitle, productPrice, productBrand, productRating), buttonBasket;

//             productImg.setAttribute('src', a[i].image_link)
//             productTitle.innerText = a[i].name;
//             productPrice.innerHTML = a[i].price + '$';
//             productBrand.innerText = a[i].brand
//             productRating.innerHTML = a[i].rating;
//             productImg.addEventListener('error', () => {
//                 productImg.setAttribute('src', '../assets/images/error-img.jpg')
//             })
//             buttonBasket.innerText = 'add';
//             // buttonBasket.dataset.id = products[i].id;
//             buttonBasket.addEventListener('click', () => {

//                 basket[products[i].id] = (basket[products[i].id] || 0) + 1;
//                 localStorage.setItem('cart', JSON.stringify(basket));
//                 let boughtProduct = JSON.parse(localStorage.getItem('cart'));
//                 let propBoughtProd = Object.keys(boughtProduct);
//                 console.log(boughtProduct);
//                 console.log(propBoughtProd)


//                 let currentProduct = products.find(item => item.id == (Number(propBoughtProd[0])));

//                 const boughtProductsContainer = document.createElement('div');
//                 boughtProductsContainer.classList.add('pr-bought-cont')

//                 const productBoughtName = document.createElement('div');
//                 productBoughtName.classList.add('pr-bought-name');

//                 const productBoughtPrice = document.createElement('div');
//                 productBoughtPrice.classList.add('pr-bought-price');

//                 const prodBoughtCount = document.createElement('div');
//                 prodBoughtCount.classList.add('prod-count');
//                 basketModalBody.appendChild(boughtProductsContainer)
//                 boughtProductsContainer.append(productBoughtName, productBoughtPrice, prodBoughtCount);


//                 productBoughtName.innerText = currentProduct.name + currentProduct.brand;
//                 productBoughtPrice.innerText = currentProduct.price + '$';
//                 prodBoughtCount.innerHTML = Object.values(boughtProduct);

//             }
//             )


//         }

//         cosmeticsContainer.style.display = "none";
//         linerContainer.style.display = "none";
//         lipstickContainer.style.display = "grid";

//     }
// })

// filterLiner.addEventListener('click', () => {
//     const urlLiner = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip liner';
//     const xhttpSecond = new XMLHttpRequest();
//     xhttpSecond.open('GET', urlLiner);
//     xhttpSecond.send();
//     xhttpSecond.onload = () => {
//         let b = JSON.parse(xhttpSecond.responseText);
//         console.log(b);
//         for (let i = 0; i < b.length; i++) {

//             const productItem = document.createElement('div');
//             productItem.classList.add('eyes-cosm-prod');

//             const div = document.createElement('div')
//             div.classList.add('eyes-cosm-prod-cont');

//             const productImg = document.createElement('img');
//             productImg.classList.add('eyes-prod-img');

//             const productTitle = document.createElement('h4');
//             productTitle.classList.add('eyes-prod-name');

//             const productBrand = document.createElement('p');
//             productBrand.classList.add('eyes-prod-brand');

//             const productPrice = document.createElement('p');
//             productPrice.classList.add('eyes-prod-price');

//             const productRating = document.createElement('span');
//             productRating.classList.add('hair-prod-rating');

//             const buttonBasket = document.createElement('button');
//             buttonBasket.classList.add('toggle-basket');

//             linerContainer.appendChild(productItem);
//             productItem.appendChild(div);
//             div.append(productImg, productTitle, productPrice, productBrand, productRating, buttonBasket);

//             productImg.setAttribute('src', b[i].image_link)
//             productTitle.innerText = b[i].name;
//             productPrice.innerHTML = b[i].price + '$';
//             productBrand.innerText = b[i].brand
//             productRating.innerHTML = b[i].rating;
//             productImg.addEventListener('error', () => {
//                 productImg.setAttribute('src', '../assets/images/error-img.jpg')
//             })
//             buttonBasket.innerText = 'add';
//             // buttonBasket.dataset.id = products[i].id;
//             buttonBasket.addEventListener('click', () => {

//                 basket[products[i].id] = (basket[products[i].id] || 0) + 1;
//                 localStorage.setItem('cart', JSON.stringify(basket));
//                 let boughtProduct = JSON.parse(localStorage.getItem('cart'));
//                 let propBoughtProd = Object.keys(boughtProduct);
//                 console.log(boughtProduct);
//                 console.log(propBoughtProd)


//                 let currentProduct = products.find(item => item.id == (Number(propBoughtProd[0])));

//                 const boughtProductsContainer = document.createElement('div');
//                 boughtProductsContainer.classList.add('pr-bought-cont')

//                 const productBoughtName = document.createElement('div');
//                 productBoughtName.classList.add('pr-bought-name');

//                 const productBoughtPrice = document.createElement('div');
//                 productBoughtPrice.classList.add('pr-bought-price');

//                 const prodBoughtCount = document.createElement('div');
//                 prodBoughtCount.classList.add('prod-count');
//                 basketModalBody.appendChild(boughtProductsContainer)
//                 boughtProductsContainer.append(productBoughtName, productBoughtPrice, prodBoughtCount);


//                 productBoughtName.innerText = currentProduct.name + currentProduct.brand;
//                 productBoughtPrice.innerText = currentProduct.price + '$';
//                 prodBoughtCount.innerHTML = Object.values(boughtProduct);

//             }
//             )

//         }
//     }
//     cosmeticsContainer.style.display = "none";
//     lipstickContainer.style.display = "none";

//     linerContainer.style.display = "grid";

// })

