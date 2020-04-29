import Item from './item';
import Stock from './stock';
import Card from './card';
import CardsDisplay from './cardsDisplay';

let choosenProductDiv = document.getElementById("choosen-product");
let randonProductsDiv = document.getElementById("random-products");

let stock = new Stock();
let choosenProduct = new Card(stock.itemList[0],choosenProductDiv);
let randonProducts = new CardsDisplay(stock, randonProductsDiv);
