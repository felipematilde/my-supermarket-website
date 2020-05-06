import axios from 'axios';

export default class BackendHandler{

    async sendElementToDatabase(element){
        const p = () => axios.post('http://.../api/product', element);
        try{
            console.log(await p());
        }catch(err){
            console.log("An error has happened :(");
        }
    }

    async getElementsFromBackend(name = ""){
        let elements = [];
        let url;
        name === "" ? url = 'http://.../api/product' : url = `http://.../api/product/${name}`;
        const p = () => axios.get(url);
        try{
            elements = (await p()).data;
        }catch(err){
            console.log("An error has happened :(");
        }
        return elements;
    }
}