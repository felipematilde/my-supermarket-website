import Card from './card';

export default class CardsDisplay{
    constructor(stock, htmlFather){
        stock.dataList.forEach(data=>{
            let card = new Card(htmlFather);
            card.setItem(data.item);
        })
    }
}