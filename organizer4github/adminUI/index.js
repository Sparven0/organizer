import { BASE_URL } from "./api.js"

const formQuantitys = document.querySelectorAll('#itemNumber');
let quantityForm = document.querySelector('.quantityForm');

quantityForm.addEventListener('submit', event => {
    event.preventDefault();
})


async function getQuantity(){
    try{
        const response  = await fetch(`${BASE_URL}`);
        const data =  await response.json();
        console.log(data.cables[0].quantity);
        let defautlValue = data.cables[0].quantity;
        formQuantitys[0].value = defautlValue
    } catch (e){
        console.log('ERROR:', e)
    }
    
}


getQuantity()