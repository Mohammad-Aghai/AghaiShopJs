const menuIcon = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
menuIcon.addEventListener("click", menuHandler);
let animationFlag = true;
function menuHandler() {
  if (animationFlag) {
    navList.style.display = "flex";
    navList.style.animation = "menuAnimation normal  0.5s forwards ease-in  ";
    animationFlag = false;
  } else {
    navList.style.animation =
      "menuAnimationBackwards normal 0.5s  forwards ease-out ";
    animationFlag = true;
  }
}
