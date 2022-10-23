const btnFilterModal = document.querySelector('.open-filt-mod');
const btnCloseFilterModal = document.querySelector('.close-filt-mod');
const filterModal = document.querySelector('.brand-filter');
const searchUserInput = document.getElementById('search');
const cosmeticsContainer = document.querySelector('.cosmetics-container');
const main = document.querySelector('.filt-output');
const brandValue = document.querySelector('.brand');
const tagValue = document.querySelector('.tag');
const filterButtonBrand = document.querySelector('.search-com-pr');
const filterButtonTag = document.querySelector('.search-tag-pr');
const filteredContainer = document.querySelector('.filtered-container');
const dataListBrands = document.getElementById('brands');
const dataListTags = document.getElementById('tags');
const openCartBtn = document.getElementById('cart-btn');
const shopBasketCloseButton = document.querySelector('.modal-close');
const basketModal = document.querySelector('.modal-window');
const basketModalBody = document.querySelector('.modal-body');

openCartBtn.addEventListener('click', showCartModal);
shopBasketCloseButton.addEventListener('click', hideCartModal);

const cart = JSON.parse(localStorage.getItem('cart')) || {};
const productsId = [];


btnFilterModal.addEventListener('click', openFilterModal);
btnCloseFilterModal.addEventListener('click', closeFiltModal);

function openFilterModal() {
    filterModal.style.display = 'block';
    cosmeticsContainer.style.width = '70%';
    cosmeticsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    filterModal.style.width = '30%';
    main.style.display = 'flex'
    btnFilterModal.style.display = "none";
    filteredContainer.style.width = '70%';
}

function closeFiltModal() {
    filterModal.style.display = 'none';
    btnFilterModal.style.display = 'block';
    cosmeticsContainer.style.width = '100%';
    cosmeticsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    main.style.display = 'block';
    filteredContainer.style.width = '100%';

}


function showCartModal() {
    renderCart();
    basketModal.style.display = 'block';
}

function hideCartModal() {
    basketModal.style.display = 'none';
}


let productsArray = localStorage.getItem('productsArray');
const products = JSON.parse(productsArray);
console.log(products)


for (let i = 0; i < products.length; i++) {

    const productItem = document.createElement('div');
    productItem.classList.add('cosm-prod');

    const card = document.createElement('div')
    card.classList.add('cosm-prod-cont');

    const productImg = document.createElement('img');
    productImg.classList.add('prod-img');

    const productTitle = document.createElement('h4');
    productTitle.classList.add('prod-name');

    const productBrand = document.createElement('p');
    productBrand.classList.add('prod-brand');

    const productPrice = document.createElement('p');
    productPrice.classList.add('prod-price');

    const productRating = document.createElement('span');
    productRating.classList.add('prod-rating');

    const productTags = document.createElement('span');
    productTags.classList.add('prod-tags');

    const addBtn = document.createElement('button');
    addBtn.classList.add('toggle-basket');

    cosmeticsContainer.appendChild(productItem);
    productItem.appendChild(card);
    card.append(productImg, productTitle, productPrice, productBrand, productRating, productTags, addBtn);

    productImg.setAttribute('src', products[i].image_link)
    productTitle.innerText = products[i].name;
    productPrice.innerText = products[i].price + '$';
    productBrand.innerText = products[i].brand
    productRating.innerText = products[i].rating;
    productTags.innerText = products[i].tag_list;
    productImg.addEventListener('error', () => {
        productImg.setAttribute('src', '../assets/images/error-img.jpg')
    })
    addBtn.innerText = 'add';
    // buttonBasket.dataset.id = products[i].id;
    addBtn.addEventListener('click', () => handleAddToCart(products[i].id))
}

function handleAddToCart(id){
    cart[id] = (cart[id] || 0) + 1;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    let ids = Object.keys(cart);
    
    for (let i = 0; i < ids.length; i++) {

        let currentProduct = products.find(item => item.id == ids[i]);

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


const productsBrands = [
    { brand: 'almay' },
    { brand: 'alva' },
    { brand: 'anna sui' },
    { brand: 'annabelle' },
    { brand: 'benefit' },
    { brand: 'boosh' },
    { brand: "burt`s bees" },
    { brand: 'butter london ' },
    { brand: "c`est moi" },
    { brand: 'cargo cosmetics' },
    { brand: 'china glaze' },
    { brand: 'clinique' },
    { brand: 'coastal classic creation' },
    { brand: 'colourpop' },
    { brand: 'covergirl' },
    { brand: 'dalish' },
    { brand: 'deciem' },
    { brand: 'dior' },
    { brand: 'dr. hauschka' },
    { brand: 'e.l.f.' },
    { brand: 'essie' },
    { brand: 'fenty' },
    { brand: 'glossier' },
    { brand: 'green people' },
    { brand: 'iman' },
    { brand: "l`oreal" },
    { brand: 'lotus cosmetics usa' },
    { brand: "maia`s mineral galaxy" },
    { brand: 'marcelle' },
    { brand: 'marienatie' },
    { brand: 'maybelline' },
    { brand: 'milani' },
    { brand: 'mineral fusion' },
    { brand: 'misa' },
    { brand: 'mistura' },
    { brand: 'moov' },
    { brand: 'nudus' },
    { brand: 'nyx' },
    { brand: 'orly' },
    { brand: 'pacifica' },
    { brand: 'penny lane organics' },
    { brand: 'physicians formula' },
    { brand: 'piggy paint' },
    { brand: 'pure anada' },
    { brand: 'rejuva minerals' },
    { brand: 'revlon' },
    { brand: "sally b`s skin yummies" },
    { brand: 'salon perfect' },
    { brand: 'sante' },
    { brand: 'sinful colours' },
    { brand: 'smashbox' },
    { brand: 'stila' },
    { brand: 'suncoat' },
    { brand: 'w3llpeople' },
    { brand: 'wet n wild' },
    { brand: 'zorah' },
    { brand: 'zorah biocosmetiques' },

]
const productsTags = [
    { tag: "Canadian" },
    { tag: "CertClean" },
    { tag: "Chemical Free" },
    { tag: "Dairy Free" },
    { tag: "EWG Verified" },
    { tag: "EcoCert" },
    { tag: "Fair Trade" },
    { tag: "Gluten Free" },
    { tag: "Hypoallergenic" },
    { tag: "Natural" },
    { tag: "No Talc" },
    { tag: "Non-GMO" },
    { tag: "Organic" },
    { tag: "Peanut Free Product" },
    { tag: "Sugar Free" },
    { tag: "USDA Organic" },
    { tag: "Vegan" },
    { tag: "alcohol free" },
    { tag: "cruelty free" },
    { tag: "oil free" },
    { tag: "purpicks" },
    { tag: "silicone free" },
    { tag: "water free" },
]

function createBrandsOption() {
    for (let i = 0; i < productsBrands.length; i++) {
        const brandOption = document.createElement('option');

        brandOption.value = productsBrands[i].brand;
        brandOption.classList.add('brand-value')

        dataListBrands.appendChild(brandOption)
    }
}
function createTagsOption() {
    for (let i = 0; i < productsTags.length; i++) {
        const tagOption = document.createElement('option');

        tagOption.value = productsTags[i].tag;
        tagOption.classList.add('tag-value')

        dataListTags.appendChild(tagOption)
    }
}

createBrandsOption();
createTagsOption();


filterButtonBrand.addEventListener('click', filterByBrand)

function filterByBrand() {
    const container = document.createElement('div');
    container.innerHTML = '';
    cosmeticsContainer.style.display = 'none';
    container.classList.add('filt-container');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    filteredContainer.style.display = 'block'
    filteredContainer.appendChild(container);

    for (let i = 0; i < products.length; i++) {
        if (products[i].brand == brandValue.value) {

            const productItem = document.createElement('div');
            productItem.classList.add('cosm-prod');

            const div = document.createElement('div')
            div.classList.add('cosm-prod-cont');

            const productImg = document.createElement('img');
            productImg.classList.add('prod-img');

            const productTitle = document.createElement('h4');
            productTitle.classList.add('prod-name');

            const productBrand = document.createElement('p');
            productBrand.classList.add('prod-brand');

            const productPrice = document.createElement('p');
            productPrice.classList.add('prod-price');

            const productRating = document.createElement('span');
            productRating.classList.add('prod-rating');

            const productTags = document.createElement('span');
            productTags.classList.add('prod-tags');

            const addBtn = document.createElement('button');
            addBtn.classList.add('toggle-basket');


            container.appendChild(productItem);
            productItem.appendChild(div);
            div.append(productImg, productTitle, productPrice, productBrand, productRating, productTags, addBtn);

            productImg.setAttribute('src', products[i].image_link)
            productTitle.innerText = products[i].name;
            productPrice.innerHTML = products[i].price + '$';
            productBrand.innerText = products[i].brand
            productRating.innerHTML = products[i].rating;
            productTags.innerHTML = products[i].tag_list;
            productImg.addEventListener('error', () => {
                productImg.setAttribute('src', '../assets/images/error-img.jpg')
            })
            addBtn.innerText = 'add';
            // buttonBasket.dataset.id = products[i].id;
            addBtn.addEventListener('click', () => handleAddToCart(products[i].id))

        }
    }


}

filterButtonTag.addEventListener('click', filterByTag)

function filterByTag() {
    const container = document.createElement('div');

    container.classList.add('filt-container');
    container.innerHTML = '';
    cosmeticsContainer.style.display = 'none';
    filteredContainer.style.display = 'block'
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    filteredContainer.appendChild(container);


    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j <= products[i].tag_list[j]; j++) {
            if (products[i].tag_list[j] == tagValue.value) {

                const productItem = document.createElement('div');
                productItem.classList.add('cosm-prod');

                const div = document.createElement('div')
                div.classList.add('cosm-prod-cont');

                const productImg = document.createElement('img');
                productImg.classList.add('prod-img');

                const productTitle = document.createElement('h4');
                productTitle.classList.add('prod-name');

                const productBrand = document.createElement('p');
                productBrand.classList.add('prod-brand');

                const productPrice = document.createElement('p');
                productPrice.classList.add('prod-price');

                const productRating = document.createElement('span');
                productRating.classList.add('prod-rating');

                const productTags = document.createElement('span');
                productTags.classList.add('prod-tags');

                const addBtn = document.createElement('button');
                addBtn.classList.add('toggle-basket');


                container.appendChild(productItem);
                productItem.appendChild(div);
                div.append(productImg, productTitle, productPrice, productBrand, productRating, productTags, addBtn);

                productImg.setAttribute('src', products[i].image_link)
                productTitle.innerText = products[i].name;
                productPrice.innerHTML = products[i].price + '$';
                productBrand.innerText = products[i].brand
                productRating.innerHTML = products[i].rating;
                productTags.innerHTML = products[i].tag_list;
                productImg.addEventListener('error', () => {
                    productImg.setAttribute('src', '../assets/images/error-img.jpg')
                })
                addBtn.innerText = 'add';
                // buttonBasket.dataset.id = products[i].id;
                addBtn.addEventListener('click', () => {

                    cart[products[i].id] = (cart[products[i].id] || 0) + 1;
                    localStorage.setItem('cart', JSON.stringify(cart));
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



    // const filtTagUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${userSearchItem}`;
    // const xhttp = new XMLHttpRequest();
    // xhttp.open('GET', filtTagUrl);
    // xhttp.send();

    // xhttp.onload = () => {
    //     let b = JSON.parse(xhr.responseText);
    //     console.log(b);
    //     for (let i = 0; i < b.length; i++) {
    //         if (b[i].tag_list == tagValue.value) {
    //             cosmeticsContainer.style.display = 'none';

    //             const productItem = document.createElement('div');
    //             productItem.classList.add('cosm-prod');

    //             const div = document.createElement('div')
    //             div.classList.add('cosm-prod-cont');

    //             const productImg = document.createElement('img');
    //             productImg.classList.add('prod-img');

    //             const productTitle = document.createElement('h4');
    //             productTitle.classList.add('prod-name');

    //             const productBrand = document.createElement('p');
    //             productBrand.classList.add('prod-brand');

    //             const productPrice = document.createElement('p');
    //             productPrice.classList.add('prod-price');

    //             const productRating = document.createElement('span');
    //             productRating.classList.add('prod-rating');

    //             container.appendChild(productItem);
    //             productItem.appendChild(div);
    //             div.append(productImg, productTitle, productPrice, productBrand, productRating);

    //             productImg.setAttribute('src', b[i].image_link)
    //             productTitle.innerText = b[i].name;
    //             productPrice.innerHTML = b[i].price + '$';
    //             productBrand.innerText = b[i].brand
    //             productRating.innerHTML = b[i].rating;

    //         }
    //     }

    // }
}

