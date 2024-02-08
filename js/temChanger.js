let webTemBox = $.querySelector(".web-tem");
let webTemBtn = $.querySelector(".web-tem-btn");
let temFlag = true;
webTemBox.addEventListener("click", temChangerHandler);

function temChangerHandler() {
  localStorage.setItem("flagTem", temFlag);
  if (temFlag) {
    webTemBtn.style.cssText =
      "right: 20px;  background-color: #ffffff00;box-shadow: -6px 0px 2px 1px #ffffff; ";
    webTemBox.style.cssText = "background-color: #000; ";
    document.documentElement.style.setProperty("--main-color", "#7CE5F5");
    document.documentElement.style.setProperty("--secondary-color", "#FFAB03");
    document.documentElement.style.setProperty("--back-main-color", "#000");
    document.documentElement.style.setProperty(
      "--back-secondary-color",
      "#01fffbca"
    );
    document.documentElement.style.setProperty(
      "--back-third-color",
      "#a315b6c3"
    );
    localStorage.setItem("flagTem", false);
    temFlag = JSON.parse(localStorage.getItem("flagTem"));
  } else if (!temFlag) {
    webTemBtn.style.cssText =
      "right: 4px;  background-color: #fff200;box-shadow: 0px 0px 5px 7px #ff6702fc ; ";
    webTemBox.style.cssText = "background-color: rgba(87, 227, 255, 0.623); ";
    document.documentElement.style.setProperty("--main-color", "#297dfad5");
    document.documentElement.style.setProperty("--secondary-color", "#dd00fa");
    document.documentElement.style.setProperty("--back-main-color", "#ffffff");
    document.documentElement.style.setProperty(
      "--back-secondary-color",
      "#ffffff"
    );
    document.documentElement.style.setProperty("--back-third-color", "#a8a8a8");
    localStorage.setItem("flagTem", true);
    temFlag = JSON.parse(localStorage.getItem("flagTem"));
  }
}

window.addEventListener("load", function () {
  temFlag = JSON.parse(localStorage.getItem("flagTem"));
  if (!temFlag) {
    webTemBtn.style.cssText =
      "right: 20px;  background-color: #ffffff00;box-shadow: -6px 0px 2px 1px #ffffff; ";
    webTemBox.style.cssText = "background-color: #000; ";
    document.documentElement.style.setProperty("--main-color", "#7CE5F5");
    document.documentElement.style.setProperty("--secondary-color", "#FFAB03");
    document.documentElement.style.setProperty("--back-main-color", "#000");
    document.documentElement.style.setProperty(
      "--back-secondary-color",
      "#01fffbca"
    );
    document.documentElement.style.setProperty(
      "--back-third-color",
      "#a315b6c3"
    );
    localStorage.setItem("flagTem", false);
    temFlag = JSON.parse(localStorage.getItem("flagTem"));
  } else if (temFlag) {
    webTemBtn.style.cssText =
      "right: 4px;  background-color: #fff200;box-shadow: 0px 0px 5px 7px #ff6702fc ; ";
    webTemBox.style.cssText = "background-color: rgba(87, 227, 255, 0.623); ";
    document.documentElement.style.setProperty("--main-color", "#297dfad5");
    document.documentElement.style.setProperty("--secondary-color", "#dd00fa");
    document.documentElement.style.setProperty("--back-main-color", "#ffffff");
    document.documentElement.style.setProperty(
      "--back-secondary-color",
      "#ffffff"
    );
    document.documentElement.style.setProperty("--back-third-color", "#a8a8a8");
    localStorage.setItem("flagTem", true);
    temFlag = JSON.parse(localStorage.getItem("flagTem"));
  }
});
