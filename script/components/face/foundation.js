const openFilterModal = document.querySelector('.categ-flter');
const filterModal = document.querySelector('.modal-filter')

openFilterModal.addEventListener('click', () => {
    filterModal.classList.toggle('shown');
})

createFoundationProducts();

function createFoundationProducts(){
    const urlFound = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation'
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlFound);
    xhttp.send();
    xhttp.onload = () => {
        let a = JSON.parse(xhttp.responseText);
        console.log(a);
            for (let i=0; i < a.length; i++ ){
    
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
                const addBtn = document.createElement('button');
                addBtn.classList.add('toggle-basket');
            
    
                foundationContainer.appendChild(productItem);
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
}