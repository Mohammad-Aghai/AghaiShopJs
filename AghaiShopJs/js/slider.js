const $ = document;
const prevIcon = $.querySelector(".prev");
const nextIcon = $.querySelector(".next");
const showcaseImg = $.querySelector(".showcase-img");
let srcArr = [
  "./image/1 phone.jpg",
  "./image/2 phone.jpg",
  "./image/3 phone.jpg",
  "./image/4 phone.jpg",
  "./image/5 phone.jpg",
];
let index = 0;
function nextImageLoad() {
  animationHandler();
  showcaseImg.setAttribute("src", srcArr[index]);
  index++;
  if (index > srcArr.length) {
    index = 0;
    showcaseImg.setAttribute("src", srcArr[index]);
    index++;
  }
}
function prevImageLoad() {
  animationHandler();
  showcaseImg.setAttribute("src", srcArr[index]);
  index--;
  if (index < 0) {
    index = 4;
    showcaseImg.setAttribute("src", srcArr[index]);
    index--;
  }
}
setInterval(function () {
  showcaseImg.setAttribute("src", srcArr[index]);
  index++;
  if (index > srcArr.length) {
    index = 0;
    showcaseImg.setAttribute("src", srcArr[index]);
    index++;
  }
}, 2000);
function animationHandler() {
  showcaseImg.classList.add("animation-img");
  setInterval(function () {
    showcaseImg.classList.remove("animation-img");
  }, 3000);
}
nextIcon.addEventListener("click", nextImageLoad);
prevIcon.addEventListener("click", prevImageLoad);
