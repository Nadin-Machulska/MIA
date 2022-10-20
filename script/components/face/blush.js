
const openFilterModal = document.querySelector('.categ-flter');
const filterModal = document.querySelector('.modal-filter')

openFilterModal.addEventListener('click', () => {
    filterModal.classList.toggle('shown');
})

const blushContainer = document.querySelector('.blush-filt-cont');

function createBlushProducts(){
    const urlBlush = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush';
    const xhttpSecond = new XMLHttpRequest();
    xhttpSecond.open('GET', urlBlush);
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
            
    
                blushContainer.appendChild(productItem);
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
}
createBlushProducts();