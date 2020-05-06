import Analysis from './analysis';

export default class InputHandler{
    constructor(){
        this.analysis = new Analysis();
        let searchButton = document.querySelector("button.search-tool");
        let cartIcon = document.getElementById("cart");
        let accountIcon = document.getElementById("account");
        searchButton.onclick = () => this.search();
        cartIcon.onclick = () => this.showCart();
        accountIcon.onclick = () => this.showAccount();
    }

    search(){
        let searchInput = document.querySelector("input.search-tool");
        this.analysis.search(searchInput.value);
        searchInput.value = "";
    }

    addToCart(name){
        this.analysis.addToCart(name);
    }

    showCart(){
        this.analysis.showCart();
    }

    showAccount(){
        this.analysis.showAccount();
    }
}