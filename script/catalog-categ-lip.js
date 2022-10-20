
const openFilterModal = document.querySelector('.categ-flter');
const filterModal = document.querySelector('.modal-filter')

openFilterModal.addEventListener('click', () => {
    filterModal.classList.toggle('shown');
})

//filter btns
const showAllButton = document.querySelector('.show-all');
const filterLipstick = document.querySelector('.stick');
const filterLiner = document.querySelector('.liner');

//containers
const cosmeticsContainer = document.querySelector('.lips-cosm-container');
const lipstickContainer = document.querySelector('.lipstic-filt-cont');
const linerContainer = document.querySelector('.liner-filt-cont');

createAllLipsProducts();

function createAllLipsProducts() {
    const urlStick = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick'
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlStick);
    xhttp.send();
    xhttp.onload = () => {
        let a = JSON.parse(xhttp.responseText);
        console.log(a);
        for (let i = 0; i < a.length; i++) {

            const productItem = document.createElement('div');
            productItem.classList.add('face-cosm-prod');

            const div = document.createElement('div')
            div.classList.add('face-cosm-prod-cont');

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

            productImg.setAttribute('src', a[i].image_link)
            productTitle.innerText = a[i].name;
            productPrice.innerHTML = a[i].price + '$';
            productBrand.innerText = a[i].brand
            productRating.innerHTML = a[i].rating;
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

    const urlLiner = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip%20Hliner';
    const xhttpSecond = new XMLHttpRequest();
    xhttpSecond.open('GET', urlLiner);
    xhttpSecond.send();
    xhttpSecond.onload = () => {
        let b = JSON.parse(xhttpSecond.responseText);
        console.log(b);
        for (let i = 0; i < b.length; i++) {

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

            productImg.setAttribute('src', b[i].image_link)
            productTitle.innerText = b[i].name;
            productPrice.innerHTML = b[i].price + '$';
            productBrand.innerText = b[i].brand
            productRating.innerHTML = b[i].rating;
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

filterLipstick.addEventListener('click', () => {
    const urlStick = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick'
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlStick);
    xhttp.send();
    xhttp.onload = () => {
        let a = JSON.parse(xhttp.responseText);
        console.log(a);
        for (let i = 0; i < a.length; i++) {

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

            lipstickContainer.appendChild(productItem);
            productItem.appendChild(div);
            div.append(productImg, productTitle, productPrice, productBrand, productRating), buttonBasket;

            productImg.setAttribute('src', a[i].image_link)
            productTitle.innerText = a[i].name;
            productPrice.innerHTML = a[i].price + '$';
            productBrand.innerText = a[i].brand
            productRating.innerHTML = a[i].rating;
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

        cosmeticsContainer.style.display = "none";
        linerContainer.style.display = "none";
        lipstickContainer.style.display = "grid";

    }
})

filterLiner.addEventListener('click', () => {
    const urlLiner = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip liner';
    const xhttpSecond = new XMLHttpRequest();
    xhttpSecond.open('GET', urlLiner);
    xhttpSecond.send();
    xhttpSecond.onload = () => {
        let b = JSON.parse(xhttpSecond.responseText);
        console.log(b);
        for (let i = 0; i < b.length; i++) {

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

            linerContainer.appendChild(productItem);
            productItem.appendChild(div);
            div.append(productImg, productTitle, productPrice, productBrand, productRating, buttonBasket);

            productImg.setAttribute('src', b[i].image_link)
            productTitle.innerText = b[i].name;
            productPrice.innerHTML = b[i].price + '$';
            productBrand.innerText = b[i].brand
            productRating.innerHTML = b[i].rating;
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
    cosmeticsContainer.style.display = "none";
    lipstickContainer.style.display = "none";

    linerContainer.style.display = "grid";

})

showAllButton.addEventListener('click', createAllLipsProducts);
