const openUserList = document.getElementById('acc');
const subListModal = document.querySelector('.sub-menu');


openUserList.onclick = toggleListModal;

function toggleListModal() {
  subListModal.classList.toggle('disable');
}

const openFilterList = document.querySelector('.categ-flter');
const filterMenu = document.querySelector('.modal-filter');
openFilterList.onclick = toggleFilterListModal;

function toggleFilterListModal() {
  filterMenu.classList.toggle('shown');
}


const mascaraContainer = document.querySelector('.mascara-filt-cont')
createproducts();
function createproducts(){
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
}
