import Card from './card';

export default class OutputHandler{
    constructor(){
    }

    displayItems(items){
        let choosenProductDiv = document.getElementById("choosen-product");
        choosenProductDiv.innerHTML = "";
        items.forEach(item=>{
            let card = new Card(choosenProductDiv);
            card.setItem(item);
        });
    }

    writeContentMessage(message){
        let p = document.getElementById("contentMessage");
        p.innerHTML = ""
        let txt = document.createTextNode(message);
        p.appendChild(txt);
    }

    alertUser(message){
        alert(message)
    }

    clearDisplay(){
        let choosenProductDiv = document.getElementById("choosen-product");
        choosenProductDiv.innerHTML = "";
    }
}