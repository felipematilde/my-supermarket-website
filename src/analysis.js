import BackendHandler from './backendHandler';
import OutputHandler from './outputHandler';

export default class Analysis{
    constructor(){
        this.outputHandler = new OutputHandler();
        this.backendHandler = new BackendHandler();
    }

    async search(name = ""){
        let items = await this.backendHandler.getElementsFromBackend(name);
        if(items.length === 0){
            this.outputHandler.writeContentMessage(`Sorry, we didn't find ${name}`);
            this.outputHandler.clearDisplay();
        }else{
            this.outputHandler.writeContentMessage(`Results for ${name}:`);
            this.outputHandler.displayItems(items);
        }
    }

    addToCart(name){
        this.outputHandler.alertUser(`${name} added to cart!`);
    }

    showCart(){
        this.outputHandler.alertUser(`You can buy more!`)
    }

    showAccount(){
        this.outputHandler.alertUser(`Welcome to your account!`);
    }
}