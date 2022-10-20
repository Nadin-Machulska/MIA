
const openFilterModal = document.querySelector('.categ-flter');
const filterModal = document.querySelector('.modal-filter')

openFilterModal.addEventListener('click', () => {
    filterModal.classList.toggle('shown');
})

//filter btns
const showAllButton = document.querySelector('.show-all');
const filterLiner = document.querySelector('.liner');
const filterShadows = document.querySelector('.shadows');
const filterMascara = document.querySelector('.mascara');
const filterBrows = document.querySelector('.brows')

//containers
const cosmeticsContainer = document.querySelector('.eyes-cosm-container');
const browsContainer = document.querySelector('.brows-filt-cont');
const linerContainer = document.querySelector('.lin-filt-cont');
const shadowContainer = document.querySelector('.shad-filt-cont');
const mascaraContainer = document.querySelector('.masc-filt-cont');

createAllEyesProducts();

function createAllEyesProducts(){
    const urlEyebrow = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow'
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlEyebrow);
    xhttp.send();
    xhttp.onload = () => {
        let a = JSON.parse(xhttp.responseText);
        console.log(a);
            for (let i=0; i < a.length; i++ ){
    
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
    
                productImg.setAttribute('src', a[i].image_link)            
                productTitle.innerText = a[i].name;
                productPrice.innerHTML = a[i].price + '$';
                productBrand.innerText = a[i].brand
                productRating.innerHTML = a[i].rating;
                productImg.addEventListener('error', () => {
                    productImg.setAttribute('src', '../assets/images/error-img.jpg')
                })
                addBtn.innerText = 'add';
        }
        
}
    const urlLiner = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner';
        const xhttpSecond = new XMLHttpRequest();
        xhttpSecond.open('GET', urlLiner);
        xhttpSecond.send();
        xhttpSecond.onload = () => {
            let b = JSON.parse(xhttpSecond.responseText);

            console.log(b);
                for (let i=0; i < b.length; i++ ){
        
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
                    
                    
                    productImg.setAttribute('src', b[i].image_link)            
                    productTitle.innerText = b[i].name;
                    productPrice.innerHTML = b[i].price + '$';
                    productBrand.innerText = b[i].brand
                    productRating.innerHTML = b[i].rating;
                    productImg.addEventListener('error', () => {
                        productImg.setAttribute('src', '../assets/images/error-img.jpg')
                    })
                    addBtn.innerText = 'add';
                    
            }
        }
    
    const urlShadows = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow';
    const xttpThird = new XMLHttpRequest();
    xttpThird.open('GET', urlShadows);
    xttpThird.send();
    xttpThird.onload = () => {
        let c = JSON.parse(xttpThird.responseText);
        console.log(c);
            for (let i=0; i < c.length; i++ ){
    
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
                
                productImg.setAttribute('src', c[i].image_link)            
                productTitle.innerText = c[i].name;
                productPrice.innerHTML = c[i].price + '$';
                productBrand.innerText = c[i].brand
                productRating.innerHTML = c[i].rating;
                productImg.addEventListener('error', () => {
                    productImg.setAttribute('src', '../assets/images/error-img.jpg')
                })
                addBtn.innerText = 'add';
            
        }
        }

    const urlMascara = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara';
    const xttpFourth = new XMLHttpRequest();
    xttpFourth.open('GET', urlMascara);
    xttpFourth.send();
    xttpFourth.onload = () => {
        let d = JSON.parse(xttpFourth.responseText);
        console.log(d);
            for (let i=0; i < d.length; i++ ){
    
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
                
                productImg.setAttribute('src', d[i].image_link)            
                productTitle.innerText = d[i].name;
                productPrice.innerHTML = d[i].price + '$';
                productBrand.innerText = d[i].brand
                productRating.innerHTML = d[i].rating;
                productImg.addEventListener('error', () => {
                    productImg.setAttribute('src', '../assets/images/error-img.jpg')
                })
                addBtn.innerText = 'add';
        }
    }

}

filterBrows.addEventListener('click', () => {
    const urlEyebrow = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow'
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlEyebrow);
    xhttp.send();
    xhttp.onload = () => {
        let a = JSON.parse(xhttp.responseText);
        console.log(a);
            for (let i=0; i < a.length; i++ ){
    
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
            
    
                browsContainer.appendChild(productItem);
                productItem.appendChild(div);
                div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);
                
                productImg.setAttribute('src', a[i].image_link)            
                productTitle.innerText = a[i].name;
                productPrice.innerHTML = a[i].price + '$';
                productBrand.innerText = a[i].brand
                productRating.innerHTML = a[i].rating;
                productImg.addEventListener('error', () => {
                    productImg.setAttribute('src', '../assets/images/error-img.jpg')
                })
                addBtn.innerText = 'add';
            
        }

    cosmeticsContainer.style.display = "none";
    linerContainer.style.display = "none";
    shadowContainer.style.display = "none";
    mascaraContainer.style.display = "none";
    browsContainer.style.display = "grid";

    }
})

filterLiner.addEventListener('click', () => {
    const urlLiner = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner';
    const xhttpSecond = new XMLHttpRequest();
    xhttpSecond.open('GET', urlLiner);
    xhttpSecond.send();
    xhttpSecond.onload = () => {
        let b = JSON.parse(xhttpSecond.responseText);
        console.log(b);
            for (let i=0; i < b.length; i++ ){
    
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
    
                linerContainer.appendChild(productItem);
                productItem.appendChild(div);
                div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);
                    
                productImg.setAttribute('src', b[i].image_link)            
                productTitle.innerText = b[i].name;
                productPrice.innerHTML = b[i].price + '$';
                productBrand.innerText = b[i].brand
                productRating.innerHTML = b[i].rating;
                productImg.addEventListener('error', () => {
                    productImg.setAttribute('src', '../assets/images/error-img.jpg')
                })
                addBtn.innerText = 'add';
        }
    }
    cosmeticsContainer.style.display = "none";
    browsContainer.style.display = "none";
    shadowContainer.style.display = "none";
    mascaraContainer.style.display = "none";

    linerContainer.style.display = "grid";

})

filterShadows.addEventListener('click', () => {
    const urlShadows = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow';
    const xttpThird = new XMLHttpRequest();
    xttpThird.open('GET', urlShadows);
    xttpThird.send();
    xttpThird.onload = () => {
        let c = JSON.parse(xttpThird.responseText);
        console.log(c);
            for (let i=0; i < c.length; i++ ){
    
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
            
    
                shadowContainer.appendChild(productItem);
                productItem.appendChild(div);
                div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);
                
                productImg.setAttribute('src', c[i].image_link)            
                productTitle.innerText = c[i].name;
                productPrice.innerHTML = c[i].price + '$';
                productBrand.innerText = c[i].brand
                productRating.innerHTML = c[i].rating;
                productImg.addEventListener('error', () => {
                    productImg.setAttribute('src', '../assets/images/error-img.jpg')
                })
                addBtn.innerText = 'add';
            
        }
        }
    cosmeticsContainer.style.display = "none";
    browsContainer.style.display = "none";
    linerContainer.style.display = "none";
    mascaraContainer.style.display = "none";

    shadowContainer.style.display = "grid";
})

filterMascara.addEventListener('click', () => {
    const urlMascara = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara';
    const xttpFourth = new XMLHttpRequest();
    xttpFourth.open('GET', urlMascara);
    xttpFourth.send();
    xttpFourth.onload = () => {
        let d = JSON.parse(xttpFourth.responseText);
        console.log(d);
            for (let i=0; i < d.length; i++ ){
    
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
            
                mascaraContainer.appendChild(productItem);
                productItem.appendChild(div);
                div.append(productImg, productTitle, productPrice, productBrand, productRating, addBtn);
                
                productImg.setAttribute('src', d[i].image_link)            
                productTitle.innerText = d[i].name;
                productPrice.innerHTML = d[i].price + '$';
                productBrand.innerText = d[i].brand
                productRating.innerHTML = d[i].rating;
                productImg.addEventListener('error', () => {
                    productImg.setAttribute('src', '../assets/images/error-img.jpg')
                })
                addBtn.innerText = 'add';
            
        }
    }
    cosmeticsContainer.style.display = "none";
    browsContainer.style.display = "none";
    linerContainer.style.display = "none";
    shadowContainer.style.display = "none";

    mascaraContainer.style.display = "grid";

})
showAllButton.addEventListener('click', createAllEyesProducts);




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









