import Stock from './stock';
import Card from './card';
import CardsDisplay from './cardsDisplay';
import {fillStock, searchOn} from './functions';

let choosenProductDiv = document.getElementById("choosen-product");
let randonProductsDiv = document.getElementById("random-products");

let stock = new Stock();
fillStock(stock);
// let choosenProduct = new Card(choosenProductDiv);
// let randomIndex = Math.round(Math.random()*(stock.dataList.length-1));
// // choosenProduct.setItem(stock.dataList[randomIndex].item);
let randonProducts = new CardsDisplay(stock, randonProductsDiv);

let searchButton = document.querySelector("button.search-tool");
searchButton.onclick = ()=> searchOn(stock, choosenProductDiv); 

