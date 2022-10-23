class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
<header>
    <div class="header-container">
        <div class="header-logo">
            <div class="logo-img">
                <span>MIA</span>
            </div>
        </div>
        <div class="header-nav">
            <a href="../index.html">About us</a>
            <a href="#contacts">Contacts</a>
            <a href="html/catalog1.html">Catalog</a>
            <a href="">Loyality</a>
        </div>
        <div class="header-client">
            <button class="open-burger"><i class="fa-solid fa-bars"></i></button>
            <div class="burger-nav">
                <button class="close-burger"><i class="fa-regular fa-circle-xmark"></i></button>
                <div class="links-container">
                    <a href="">About us</a>
                    <a href="#contacts">Conatacts</a>
                    <a href="../html/catalog1.html">Catalog</a>
                    <a href="">Loyality</a>
                </div>    
            </div>
            <div class="header-btns">
                <div class="user-menu">
                    
                        <button id="acc">
                            <i class="fa-regular fa-user"></i>
                            <i class="fa-solid fa-arrow-down"></i>
                        </button>
    
                        <nav class="sub-menu disable">
                            <ul class="sub-menu-list">
                                <li class="sub-menu-option"><a href="#">Мій аккаунт</a></li>
                                <li class="sub-menu-option">
                                    <a href="#">Промокоди та знижки</a>
                                    <ul class="sub-sub-menu-list">
                                        <li class="sub-sub-menu-option"><a href="#">Створити свій промокод</a></li>
                                        <li class="sub-sub-menu-option"><a href="#">Додати промокод на знижку</a></li>
                                        <li class="sub-sub-menu-option"><a href="#">Донат на ЗСУ</a></li>
                                    </ul>
                                </li>
                                <li class="sub-menu-option">
                                    <a href="#">Історія замовлень</a>
                                    <ul class="sub-sub-menu-list">
                                        <li class="sub-sub-menu-option"><a href="#">Доставка на магазин</a></li>
                                        <li class="sub-sub-menu-option"><a href="#">Онлайн замовлення</a></li>
                                        <li class="sub-sub-menu-option"><a href="#">Отримані</a></li>
                                    </ul>
                                </li>
                                <li class="sub-menu-option"><a href="#">Служба підтримки</a></li>
                            </ul>
                        </nav>
    
                    </div>
                
                    <div class="user-shopping">
                        <button id="cart-btn">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </button>

                        <div id="modal_1" class="modal-window">
                            <div class="modal-window__title">
                            <h3>Your shop-list</h3>
                            <button class="modal-close"><i class="fa-solid fa-xmark"></i></button>
                            </div>
                            <div class="modal-body">
                            </div>
                        </div>
                    </div> 
                </div>   
            </div>
        </div>
    </div>
</header>
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
<footer>
    <div class="footer-container" id="contacts">
        <h2>Contact Us</h2>
            <div class="footer-nav">
                <div class="nav-content">
                    <h6>Adress</h6>
                    <div>
                        <p>500 Terry Francois St.</p>
                        <p>San Francisco, CA 94158</p>
                    </div>
                </div>
                <div class="nav-content">
                    <h6>Contacts</h6>
                    
                    <p>123-456-7890</p>
                    <a href="mailto:info@mysite.com">info@mysite.com</a>
                    <div class="nav-social">
                        <a href="https://www.facebook.com/miacosmetics.latvia/reviews/"><button><i class="fa-brands fa-facebook-f"></i></button></a>
                        <a href="https://www.instagram.com/miacosmeticsofficial/?hl=ru"><button><i class="fa-brands fa-instagram"></i></button></a>
                        <a href="https://twitter.com/miacosmeticsuk"><button><i class="fa-brands fa-twitter"></i></button></a>
                    </div>
                </div>
            </div>
        <div class="map-container">

        </div>
    </div>
</footer>
        `
    }
}

customElements.define('my-footer', MyFooter)

class SubHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
        <section class="second-header">
            <div class="contacts">
            <a href="mailto:nadinmachulska@gmail.com">exampleemail@gmail.com</a> 
            <a href="tel:++3800000000000">+3800000000000</a>
            <button class="back-call">back call</button>
            </div>
            <div class="logo">
                <h1>MIA</h1>
                <p>Glory to Ukraine</p>
            </div>
            <div class="search">
                    <input  name="search" id="search" placeholder="lipstick, nyx, mascara">
                    <button  id="submit-search"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </section>        `
    }
}

customElements.define('sub-header', SubHeader);

//open burger-modal
const burgerButton = document.querySelector('.open-burger');
const closeBurgerMenu = document.querySelector('.close-burger');
const burgerMenu = document.querySelector('.burger-nav');

burgerButton.addEventListener('click', openBurger);
closeBurgerMenu.addEventListener('click', closeBurger);

//поменять на классы
function openBurger() {
  burgerMenu.style = `
    width: 450px;
    height: 400px;
    visibility: visible;
    display: block;
  `
  document.querySelector('.header-client').style.marginLeft = "250px"
}

function closeBurger() {
  burgerMenu.style = "";
  document.querySelector('.header-client').style.marginLeft = "0px"
}

const openUserList = document.getElementById('acc');
const subListModal = document.querySelector('.sub-menu');


openUserList.onclick = toggleListModal;

function toggleListModal() {
  subListModal.classList.toggle('disable');
}
