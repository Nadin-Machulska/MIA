function createProducts (){
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
    }
}
createProducts();

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


