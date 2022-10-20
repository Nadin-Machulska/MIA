
const openFilterModal = document.querySelector('.categ-flter');
const filterModal = document.querySelector('.modal-filter')

openFilterModal.addEventListener('click', () => {
    filterModal.classList.toggle('shown');
})

//filter btns
const showAllButton = document.querySelector('.show-all');
const filterFoundatiom = document.querySelector('.foundation');
const filterBlush = document.querySelector('.blush');
const filterBronzer = document.querySelector('.bronzer');

//containers
const cosmeticsContainer = document.querySelector('.face-cosm-container');
const foundationContainer = document.querySelector('.found-filt-cont');
const blushContainer = document.querySelector('.blush-filt-cont');
const bronzerContainer = document.querySelector('.bronz-filt-cont');

createAllFaceProducts();

function createAllFaceProducts() {
    const urlFound = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation'
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlFound);
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
    const urlBlush = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush';
    const xhttpSecond = new XMLHttpRequest();
    xhttpSecond.open('GET', urlBlush);
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

    const urlBronzer = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer';
    const xttpThird = new XMLHttpRequest();
    xttpThird.open('GET', urlBronzer);
    xttpThird.send();
    xttpThird.onload = () => {
        let c = JSON.parse(xttpThird.responseText);
        console.log(c);
        for (let i = 0; i < c.length; i++) {

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

            productImg.setAttribute('src', c[i].image_link)
            productTitle.innerText = c[i].name;
            productPrice.innerHTML = c[i].price + '$';
            productBrand.innerText = c[i].brand
            productRating.innerHTML = c[i].rating;
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

filterFoundatiom.addEventListener('click', () => {
    const urlFound = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation'
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlFound);
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

            foundationContainer.appendChild(productItem);
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

        cosmeticsContainer.style.display = "none";
        blushContainer.style.display = "none";
        bronzerContainer.style.display = "none";
        foundationContainer.style.display = "grid";

    }
})

filterBlush.addEventListener('click', () => {
    const urlBlush = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush';
    const xhttpSecond = new XMLHttpRequest();
    xhttpSecond.open('GET', urlBlush);
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


            blushContainer.appendChild(productItem);
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
    foundationContainer.style.display = "none";
    bronzerContainer.style.display = "none";

    blushContainer.style.display = "grid";

})

filterBronzer.addEventListener('click', () => {
    const urlBronzer = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer';
    const xttpThird = new XMLHttpRequest();
    xttpThird.open('GET', urlBronzer);
    xttpThird.send();
    xttpThird.onload = () => {
        let c = JSON.parse(xttpThird.responseText);
        console.log(c);
        for (let i = 0; i < c.length; i++) {

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


            bronzerContainer.appendChild(productItem);
            productItem.appendChild(div);
            div.append(productImg, productTitle, productPrice, productBrand, productRating, buttonBasket);

            productImg.setAttribute('src', c[i].image_link)
            productTitle.innerText = c[i].name;
            productPrice.innerHTML = c[i].price + '$';
            productBrand.innerText = c[i].brand
            productRating.innerHTML = c[i].rating;
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
    foundationContainer.style.display = "none";
    blushContainer.style.display = "none";

    bronzerContainer.style.display = "grid";
})

showAllButton.addEventListener('click', createAllFaceProducts);
