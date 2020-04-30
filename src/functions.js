import Item from './item';
import Card from './card';

export function fillStock(stock){
    let bananaPrata = new Item("Banana prata", "Monkey favorite fruit, source of vitamines.", 0.15,"https://static.carrefour.com.br/medias/sys_master/images/images/h3c/h4c/h00/h00/14506624385054.jpg");
    let bananaNanica = new Item("Banana nanica", "The biggest banana of the world.", 0.10,"https://static.carrefour.com.br/medias/sys_master/images/images/h9e/hf5/h00/h00/14088528953374.jpg");
    let texasBurguer = new Item("Texas Burguer", "Authentic burguer from texas, 200g of cown meat", 2.30,"https://static.carrefour.com.br/medias/sys_master/images/images/h11/h5a/h00/h00/9580135972894.jpg");
    let cocaCola350ml = new Item("Coca-Cola 350ml", "The most drinked soda in the world. 350ml.", 0.90,"https://static.carrefour.com.br/medias/sys_master/images/images/hc5/h21/h00/h00/12175672868894.jpg");
    let cocaCola2l = new Item("Coca-Cola 2L", "The most drinked soda in the world. 2L.", 2.20,"https://static.carrefour.com.br/medias/sys_master/images/images/h10/h46/h00/h00/12175673655326.jpg");

    stock.addItem(bananaPrata, 20);
    stock.addItem(bananaNanica, 20);
    stock.addItem(texasBurguer, 20);
    stock.addItem(cocaCola350ml, 20);
    stock.addItem(cocaCola2l, 20);
}

export function searchOn(stock, htmlFather){
    let searchBox = document.querySelector("input.search-tool");
    let searchText = searchBox.value;
    searchBox.value = "";
    htmlFather.innerHTML = "";

    let findItemTxt = document.createTextNode("Your choosen product:");
    let findItemP = document.createElement("p");
    findItemP.appendChild(findItemTxt);
    htmlFather.appendChild(findItemP);

    let itemNotFound = true;
    stock.dataList.forEach(data=>{
        if(data.item.name.toUpperCase().includes(searchText.toUpperCase())){
            itemNotFound = false;
            let card = new Card(htmlFather);
            card.setItem(data.item);
        }
    })

    if(itemNotFound){
        findItemTxt.nodeValue = "Sorry, we didn't find your item :(";
    }
}