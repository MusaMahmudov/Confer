import { speakingsScroll } from "./assets/source/components/ourspeakings/ourspeakings.js";
import { daysShow } from "./assets/source/components/Schedule/schedule.js";
import { pages } from "./assets/source/components/navbar/navbar.js";
speakingsScroll();
daysShow();
pages();

document.getElementsByClassName("circle")[0].addEventListener("click", () => {
  window.scrollTo(0, 50);
});
window.addEventListener("scroll", () => {
  let containers = document.querySelectorAll(".container");
  let heightWindow = window.innerHeight;
  let y = 150;
  for (let index = 0; index < containers.length; index++) {
    let objectDist = containers[index].getBoundingClientRect().top;
    if (objectDist < heightWindow - y) {
      containers[index].classList.add("checked");
    }
  }
});
