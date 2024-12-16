import { getAccessories, getCables, getHardware } from "./requests.js";
const categories = document.querySelector("#item");
const categories2 = document.querySelector("#item2");
const categories3 = document.querySelector("#item3");
const arrow = document.querySelector("#iconDown");
const arrow2 = document.querySelector("#iconDown2");
const arrow3 = document.querySelector("#iconDown3");
const itemBox = document.querySelector("#itemBox");
const itemBox2 = document.querySelector("#itemBox2");
const itemBox3 = document.querySelector("#itemBox3");
const card = document.querySelector(".flip-card-inner");
const task = document.querySelector(".hide");
const taskBtn = document.querySelector("#taskBtn");
const openerLower = document.querySelector(".openerLower");
const wrapper = document.querySelector('.wrapper')

setTimeout(() => {
  openerLower.classList.add("opened");
  wrapper.classList.remove('startUpScreen')
}, 2000);

setTimeout(() => {
  openerLower.remove();
}, 3500);

taskBtn.addEventListener("click", () => {
  task.classList.toggle("hide");
});
card.addEventListener("click", () => {
  card.classList.toggle("flip");
});

const itemBoxes = [itemBox, itemBox2, itemBox3];
const dropArrows = [arrow, arrow2, arrow3];
const categoryTitles = [categories, categories2, categories3];
for (let i = 0; i < categoryTitles.length; i++) {
  for (let i = 0; i < dropArrows.length; i++) {
    categoryTitles[i].addEventListener("click", () => {
      dropArrows[i].classList.toggle("arrowDown");
      itemBoxes[i].classList.toggle("show");
    });
  }
}

getAccessories();
getHardware();
getCables();

