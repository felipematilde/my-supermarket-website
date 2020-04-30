import Item from './item';

export default class Stock{
    constructor(){
        this.dataList = []; //[{item: item, quantity: quantity}]
    }

    addItem(item, quantity){
        if(quantity<=0){
            return;
        }

        let itemOnList = false;
        this.dataList.forEach(data=>{
            if(data.item.name === item.name){ //Maybe here I can use map
                itemOnList = true;
                data.item.quantity += quantity;
            }
        })
        if(!itemOnList){
            this.dataList.push({item: item, quantity: quantity});
        };
    }

    removeItem(item, quantity){
        if(quantity<=0){
            return;
        }

        this.dataList.forEach(data=>{
            if(data.item.name === item.name){
                if(data.item.quantity<quantity){
                    return;
                }else{
                    data.item.quantity -= quantity;
                }
            }
        })
    }
}