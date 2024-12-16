import { BASE_URL } from "./api.js";

const detailsBox = document.querySelectorAll(".detailsBox");
const detailsQty = document.querySelectorAll(".qtySectionD");
const detailsSize = document.querySelectorAll(".sizeSectionD");
const detailsLocation = document.querySelectorAll(".locationSectionD");
const closeDetails = document.querySelectorAll(".closeDetails");
const detailsBtn = document.querySelectorAll(".details");
const detailsNames = document.querySelectorAll(".nameSectionD");
const qtySecs = document.querySelectorAll(".qtySection");
const nameSecs = document.querySelectorAll(".nameSection");
const detailsTypes = document.querySelectorAll('.typeSectionD');


console.log(detailsBtn, detailsBox);
async function getCableDetails() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    for (let i = 0; i < data.cables.length; i++) {
      let itemName = document.createElement("p");
      let itemQty = document.createElement("p");
      let itemSize = document.createElement("p");
      let itemLocation = document.createElement("p");
      let itemType = document.createElement('p');
      itemType.innerText = data.cables[i].type;
      itemSize.innerText = data.cables[i].size;
      itemLocation.innerText = data.cables[i].location;
      itemSize.innerText = data.cables[i].size;
      itemQty.innerText = data.cables[i].quantity;
      itemName.innerText = data.cables[i].name;
      itemLocation.style.paddingRight = "17px";
      itemName.style.paddingRight = "17px";
      itemSize.style.paddingRight = "17px";
      itemSize.style.paddingLeft = "17px";
      itemQty.style.paddingRight = "5px";
      itemQty.style.paddingLeft = "17px";
      detailsLocation[0].append(itemLocation);
      detailsNames[0].append(itemName);
      detailsQty[0].append(itemQty);
      detailsSize[0].append(itemSize);
      detailsTypes[0].append(itemType)

      
    
      
      
      if (i % 2) {
        itemLocation.style.color = "rgb(94,94,94)";
        itemName.style.color = "rgb(94,94,94)";
        itemQty.style.color = "rgb(94,94,94)";
        itemSize.style.color = "rgb(94,94,94)";
        itemType.style.color = "rgb(94,94,94)";
      } else
        (itemName.style.backgroundColor = "rgb(59, 120, 204)"),
          (itemQty.style.backgroundColor = "rgb(59, 120, 204)"),
          (itemSize.style.backgroundColor = "rgb(59, 120, 204)"),
          (itemLocation.style.backgroundColor = "rgb(59, 120, 204)"),
          (itemType.style.backgroundColor = "rgb(59, 120, 204)"),
          (itemLocation.style.color = "white"),
          (itemName.style.color = "white"),
          (itemQty.style.color = "white"),
          (itemType.style.color = "white"),
          (itemSize.style.color = "white");
    }
    console.log(data.cables[0].type)
  } catch (e) {
    console.log("ERROR:", e);
  }
}

async function getHardwareDetails() {
    try {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();
      for (let i = 0; i < data.hardware.length; i++) {
        let itemName = document.createElement("p");
        let itemQty = document.createElement("p");
        let itemSize = document.createElement("p");
        let itemLocation = document.createElement("p");
        let itemType = document.createElement('p');
        itemType.innerText = data.hardware[i].type;
        itemSize.innerText = data.hardware[i].size;
        itemLocation.innerText = data.hardware[i].location;
        itemSize.innerText = data.hardware[i].size;
        itemQty.innerText = data.hardware[i].quantity;
        itemName.innerText = data.hardware[i].name;
        itemLocation.style.paddingRight = "17px";
        itemName.style.paddingRight = "17px";
        itemSize.style.paddingRight = "17px";
        itemSize.style.paddingLeft = "17px";
        itemQty.style.paddingRight = "5px";
        itemQty.style.paddingLeft = "17px";
        detailsLocation[2].append(itemLocation);
        detailsNames[2].append(itemName);
        detailsQty[2].append(itemQty);
        detailsSize[2].append(itemSize);
        detailsTypes[2].append(itemType)
  
        
      
        
        
        if (i % 2) {
          itemLocation.style.color = "rgb(94,94,94)";
          itemName.style.color = "rgb(94,94,94)";
          itemQty.style.color = "rgb(94,94,94)";
          itemSize.style.color = "rgb(94,94,94)";
          itemType.style.color = "rgb(94,94,94)";
        } else
          (itemName.style.backgroundColor = "rgb(59, 120, 204)"),
            (itemQty.style.backgroundColor = "rgb(59, 120, 204)"),
            (itemSize.style.backgroundColor = "rgb(59, 120, 204)"),
            (itemLocation.style.backgroundColor = "rgb(59, 120, 204)"),
            (itemType.style.backgroundColor = "rgb(59, 120, 204)"),
            (itemLocation.style.color = "white"),
            (itemName.style.color = "white"),
            (itemQty.style.color = "white"),
            (itemType.style.color = "white"),
            (itemSize.style.color = "white");
      }
    } catch (e) {
      console.log("ERROR:", e);
    }
  }


async function getAccessoryDetails() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    for (let i = 0; i < data.accessories.length; i++) {
      let itemName = document.createElement("p");
      let itemQty = document.createElement("p");
      let itemSize = document.createElement("p");
      let itemLocation = document.createElement("p");
      itemLocation.innerText = data.accessories[i].location;
      itemSize.innerText = data.accessories[i].size;
      itemQty.innerText = data.accessories[i].quantity;
      itemName.innerText = data.accessories[i].name;
      itemLocation.style.paddingRight = "17px";
      itemName.style.paddingRight = "17px";
      itemSize.style.paddingRight = "17px";
      itemSize.style.paddingLeft = "17px";
      itemQty.style.paddingRight = "5px";
      itemQty.style.paddingLeft = "17px";
      detailsLocation[1].append(itemLocation);
      detailsNames[1].append(itemName);
      detailsQty[1].append(itemQty);
      detailsSize[1].append(itemSize);
      if (i % 2) {
        itemLocation.style.color = "rgb(94,94,94)";
        itemName.style.color = "rgb(94,94,94)";
        itemQty.style.color = "rgb(94,94,94)";
        itemSize.style.color = "rgb(94,94,94)";
      } else
        (itemName.style.backgroundColor = "rgb(59, 120, 204)"),
          (itemQty.style.backgroundColor = "rgb(59, 120, 204)"),
          (itemSize.style.backgroundColor = "rgb(59, 120, 204)"),
          (itemLocation.style.backgroundColor = "rgb(59, 120, 204)"),
          (itemLocation.style.color = "white"),
          (itemName.style.color = "white"),
          (itemQty.style.color = "white"),
          (itemSize.style.color = "white");
    }
  } catch (e) {
    console.log("ERROR:", e);
  }
}

async function getCables() {
    try {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();
      for (let i = 0; i < data.cables.length; i++) {
        let itemName = document.createElement("p");
        let itemQty = document.createElement("p");
        itemQty.innerText = data.cables[i].quantity;
        itemName.innerText = data.cables[i].name;
        nameSecs[0].append(itemName);
        qtySecs[0].append(itemQty);
        if (i % 2) {
          itemName.style.backgroundColor = "none";
          itemQty.style.backgroundColor = "none";
        } else
          (itemName.style.backgroundColor = "grey"),
            (itemQty.style.backgroundColor = "grey"),
            (itemName.style.color = "white"),
            (itemQty.style.color = "white");
      }
    } catch (e) {
      console.log("ERROR:", e);
    }
  }

async function getAccessories() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    for (let i = 0; i < data.accessories.length; i++) {
      let itemName = document.createElement("p");
      let itemQty = document.createElement("p");
      itemQty.innerText = data.accessories[i].quantity;
      itemName.innerText = data.accessories[i].name;
      nameSecs[1].append(itemName);
      qtySecs[1].append(itemQty);
      if (i % 2) {
        itemName.style.backgroundColor = "grey";
        itemQty.style.backgroundColor = "grey";
        itemName.style.color = "white";
        itemQty.style.color = "white";
      }
    }
  } catch (e) {
    console.log("ERROR:", e);
  }
}



detailsBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
      detailsBox.forEach((box, idx) => {
        if (idx === index) {
          box.classList.toggle("showdetails"); 
        } else {
          box.classList.remove("showdetails");
        }
      });
    });
  });


closeDetails.forEach((closeBtn) => {
    closeBtn.addEventListener('click', ()=> {
        detailsBox.forEach((box) => {
            box.classList.remove('showdetails')
        })
    })
})





async function getHardware() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < data.hardware.length; i++) {
      let itemName = document.createElement("p");
      let itemQty = document.createElement("p");
      itemQty.innerText = data.hardware[i].quantity;
      itemName.innerText = data.hardware[i].name;
      nameSecs[2].append(itemName);
      qtySecs[2].append(itemQty);
      if (i % 2) {
        itemName.style.backgroundColor = "grey";
        itemQty.style.backgroundColor = "grey";
        itemName.style.color = "white";
        itemQty.style.color = "white";
      }
    }
  } catch (e) {
    console.log("ERROR:", e);
  }
}

getHardwareDetails();
getAccessoryDetails();
getCableDetails();
export { getCables, getHardware, getAccessories };
