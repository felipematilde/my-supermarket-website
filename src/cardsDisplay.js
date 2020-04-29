import Card from './card';

export default class CardsDisplay{
    constructor(stock, htmlFather){
        stock.itemList.forEach(item=>{
            let card = new Card(item, htmlFather);
        })
    }
}