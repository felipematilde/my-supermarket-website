export default class Card{
    constructor(item, htmlFather){
        let card = document.createElement('div');
        card.className = "card";

        let img = document.createElement("img");
        img.src = item.imageSrc;
        img.alt = item.name;
        img.style = "width:100%";
        card.appendChild(img);

        let h1Name = document.createElement("h1");
        let textName = document.createTextNode(item.name);
        h1Name.appendChild(textName);
        card.appendChild(h1Name);

        let pPrice = document.createElement("p");
        let textPrice = document.createTextNode(`US$ ${item.price}`);
        pPrice.appendChild(textPrice);
        pPrice.nodeValue = `US$${item.price}`;
        card.appendChild(pPrice);

        let pDescription = document.createElement("p");
        let textDescription = document.createTextNode(item.description);
        pDescription.appendChild(textDescription);
        card.appendChild(pDescription);

        let pButtonAdd = document.createElement("p");
        let buttonAdd = document.createElement("button");
        let textButtonAdd = document.createTextNode("Add to Cart");
        buttonAdd.appendChild(textButtonAdd);
        pButtonAdd.appendChild(buttonAdd);
        card.appendChild(pButtonAdd);

        htmlFather.appendChild(card);
    }
}