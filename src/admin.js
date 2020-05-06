import BackendHandler from '../src/backendHandler';

let adminElements = document.querySelectorAll(".admin");
console.log(adminElements);

adminElements[5].onclick = send;

async function send(){
    let backendHandler = new BackendHandler();
    let element = {
        name: adminElements[0].value,
        description: adminElements[1].value,
        price: parseInt(adminElements[2].value),
        imageSrc: adminElements[3].value,
        quantity: parseInt(adminElements[4].value)
    }
    
    await backendHandler.sendElementToDatabase(element);

    adminElements[0].value = "";
    adminElements[1].value = "";
    adminElements[2].value = "";
    adminElements[3].value = "";
    adminElements[4].value = "";
}