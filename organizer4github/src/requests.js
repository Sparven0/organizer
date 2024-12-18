import { BASE_URL } from "./api.js";
let right = document.querySelectorAll(".right");
const closeBtn = document.querySelectorAll('.close')
const flipper = document.querySelector('.flipshower')
const flipCard = document.querySelector('.flip-card');
const whoops = document.querySelector('.whoops')
const totalInventory = document.querySelectorAll('.totalInventory');
const cameraSheet = document.querySelectorAll('.camerasSheet')

flipCard.addEventListener('click', ()=> {
  flipCard.classList.toggle('flip-cardFlip')
})





async function getData() {
  

  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();


    const totalQuantity = data.cables.reduce((sum, cable) => sum + Number(cable.quantity), 0);
    const totalQuantity1 = data.hardware.reduce((sum, hardware) => sum + Number(hardware.quantity), 0);
    const totalQuantity2 = data.accessories.reduce((sum, accessory) => sum + Number(accessory.quantity), 0);
    const totalQuantity3 = data.cameras.reduce((sum, camera) => sum + Number(camera.quantity), 0);
    
    


    // change dataLength
    const dataLength = data.cables.length;
    for (let i = 0; i < dataLength; i++) {
      const dataName = data.cables[i].name; // change dataName
      const dataQty = data.cables[i].quantity;
      const dataType = data.cables[i].type;
      const dataLocation = data.cables[i].location;
      const dataSize = data.cables[i].size;
      let size = document.createElement('p');
      let name = document.createElement("p");
      let location = document.createElement("p");
      let qty = document.createElement("p");
      let type = document.createElement("p");
      let row = document.createElement("div");
      totalInventory[0].innerText = totalQuantity + totalQuantity1 +totalQuantity2 + totalQuantity3;
      totalInventory[1].innerText = totalQuantity + totalQuantity1 +totalQuantity2 +totalQuantity3;
      
      

     
      row.classList.add("row");
      qty.innerText = dataQty;
      location.innerText = dataLocation;
      type.innerText = dataType;
      name.innerText = dataName;
      size.innerText = dataSize
      right[0].append(row);
      row.append( name, qty, size, type,  location);
    }
  } catch (e) {
    console.log("ERROR", e);
  }
}

// CloseBTns
closeBtn[0].addEventListener('click',()=> {
  right[0].classList.toggle('remove')
})
closeBtn[1].addEventListener('click',()=> {
  right[1].classList.toggle('remove')
})
closeBtn[2].addEventListener('click',()=> {
  right[2].classList.toggle('remove')
})
// 

// eventlisteners start
  const items = document.querySelectorAll('.item');
items[0].addEventListener('click', () => {
 right[0].classList.toggle('remove')
})
items[1].addEventListener('click', () => {
  right[1].classList.toggle('remove')
 })
 items[2].addEventListener('click', () => {
  right[2].classList.toggle('remove')
 })
 items[3].addEventListener('click', () => {
  flipper.classList.toggle('flipshower')
})
items[4].addEventListener('click', () => {
  whoops.classList.toggle('show')
})

const showcams = document.querySelectorAll('.showcams');
showcams[0].addEventListener('click', ()=> {
  cameraSheet[0].classList.toggle('showCams')
})
showcams[1].addEventListener('click', ()=> {
  cameraSheet[1].classList.toggle('showCams')
})

// eventlisteners end
 

async function getData1() {
  

  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    // change dataLength
    const dataLength = data.hardware.length;

    for (let i = 0; i < dataLength; i++) {
      const dataName = data.hardware[i].name; // change dataName
      const dataQty = data.hardware[i].quantity;
      const dataType = data.hardware[i].type;
      const dataLocation = data.hardware[i].location;
      const dataSize = data.hardware[i].size;
      let size = document.createElement('p');
      let name = document.createElement("p");
      let location = document.createElement("p");
      let qty = document.createElement("p");
      let type = document.createElement("p");
      let row = document.createElement("div");
      

     
      row.classList.add("row");
      qty.innerText = dataQty;
      location.innerText = dataLocation;
      type.innerText = dataType;
      name.innerText = dataName;
      size.innerText = dataSize
      right[1].append(row);
      row.append( name, qty, size, type,  location);
    }
  } catch (e) {
    console.log("ERROR", e);
  }
}

async function getData2() {
  

  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    // change dataLength
    const dataLength = data.accessories.length;

    for (let i = 0; i < dataLength; i++) {
      const dataName = data.accessories[i].name; // change dataName
      const dataQty = data.accessories[i].quantity;
      const dataType = data.accessories[i].type;
      const dataLocation = data.accessories[i].location;
      const dataSize = data.accessories[i].size;
      let size = document.createElement('p');
      let name = document.createElement("p");
      let location = document.createElement("p");
      let qty = document.createElement("p");
      let type = document.createElement("p");
      let row = document.createElement("div");
      

     
      row.classList.add("row");
      qty.innerText = dataQty;
      location.innerText = dataLocation;
      type.innerText = dataType;
      name.innerText = dataName;
      size.innerText = dataSize
      right[2].append(row);
      row.append( name, qty, size, type,  location);
    }
  } catch (e) {
    console.log("ERROR", e);
  }
}

// Displaying cameras

async function getCameras(){
  try{
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  for(let i=0; i<data.cameras.length; i++){
    let name = document.createElement('p');
    let support = document.createElement('p');
    let image = document.createElement('img');
    image.src = data.cameras[i].image;
let camDiv =document.createElement('div');
    name.innerText = data.cameras[i].name;
    support.innerText = data.cameras[i].supported
    cameraSheet[0].append(camDiv);
    camDiv.classList.add('cameraRow');
    camDiv.append(image, name, support)
    
    
    
  }
} catch (e){
  console.log('ERROR', e)
}
}

async function getCameras2(){
  try{
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  for(let i=0; i<data.cameras.length; i++){
    let name = document.createElement('p');
    let support = document.createElement('p');
    let image = document.createElement('img');
    image.src = data.cameras[i].image;
let camDiv =document.createElement('div');
    name.innerText = data.cameras[i].name;
    support.innerText = data.cameras[i].supported
    cameraSheet[1].append(camDiv);
    camDiv.classList.add('cameraRow');
    camDiv.append(image, name, support)
    
    
    
  }
} catch (e){
  console.log('ERROR', e)
}
}

getCameras2()
getCameras()
getData2()
getData1()
getData()




