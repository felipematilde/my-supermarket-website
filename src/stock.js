import Item from './item';

export default class Stock{
    constructor(){
        var banana = new Item("Banana", "Monkey favorite fruit, source of vitamines.", 12, 0.15,"https://static.carrefour.com.br/medias/sys_master/images/images/h3c/h4c/h00/h00/14506624385054.jpg");
        var texasBurguer = new Item("Texas Burguer", "Authentic burguer from texas, 200g of cown meat", 300, 2.30,"https://static.carrefour.com.br/medias/sys_master/images/images/h11/h5a/h00/h00/9580135972894.jpg");
        var cocaCola = new Item("Coca-Cola", "The most drinked soda in the world.", 2500, 0.90,"https://static.carrefour.com.br/medias/sys_master/images/images/hc5/h21/h00/h00/12175672868894.jpg");

        this.itemList = [banana, texasBurguer, cocaCola];
    }

    addItem(name, quantity){
        if(quantity<=0){
            return;
        }

        let itemOnList = false;
        this.itemList.forEach(item=>{
            if(item.name === name){
                itemOnList = true;
                item.quantity += quantity;
            }
        })
        if(!itemOnList){
            this.itemList.push({name, description:"", quantity, price : "undefined"});
        };
    }

    removeItem(name, quantity){
        if(quantity<=0){
            return;
        }

        this.itemList.forEach(item=>{
            if(item.name === name){
                if(item.quantity<quantity){
                    return;
                }else{
                    item.quantity -= quantity;
                }
            }
        })
    }
}