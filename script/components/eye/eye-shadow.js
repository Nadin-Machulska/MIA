const openFilterList = document.querySelector('.categ-flter');
const filterMenu = document.querySelector('.modal-filter');
openFilterList.onclick = toggleFilterListModal;

function toggleFilterListModal() {
  filterMenu.classList.toggle('shown');
}

const openUserList = document.getElementById('acc');
const subListModal = document.querySelector('.sub-menu');

openUserList.onclick = toggleListModal;

function toggleListModal() {
  subListModal.classList.toggle('disable');
}

const shadowContainer = document.querySelector('.shadow-filt-cont')
createproducts();
function createproducts(){
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

}