const searchInput = document.getElementById('search');
const searchButton = document.getElementById('submit-search');

searchInput.addEventListener('change', () => {
    const filtTagUrl =  `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${searchInput.value}`;
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', filtTagUrl);
    xhttp.send();

    xhttp.onload = () => {
        
        console.log(xhttp.responseText);
        localStorage.setItem('productsArray', xhttp.responseText)
    }
    localStorage.setItem('data', searchInput.value);
})


searchInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === 13) {
        searchButton.click();
    }
});

searchButton.addEventListener('click', toggleHTMLPage);

function toggleHTMLPage() {
    location.href = '../html/search-result.html'
}



