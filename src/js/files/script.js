// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyUnlock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

function isElement(item, count) {
  let result;
  if (count > 1) {
    result = document.querySelectorAll(item)
      ? document.querySelectorAll(item)
      : null;
  } else {
    result = document.querySelector(item) ? document.querySelector(item) : null;
  }
  return result;
}

// function addClass(item){

// }

// if we dont have elemn on a page we have null into a variable
const ELEMENTS = {
  videos: {
    elements: isElement(".video-box", 2),
    buttons: isElement(".video-box__button", 2),
  },
};

if (ELEMENTS.videos.buttons !== null && ELEMENTS.videos.elements !== null) {
  let buttons = Array.from(ELEMENTS.videos.buttons);
  let videos = Array.from(ELEMENTS.videos.elements);
    for (const btn of buttons) {
        btn.addEventListener("click", (e) => {
            let getVideo = e.target.previousElementSibling;
            for (const video of videos) {
                if(!video.firstElementChild.paused && video.firstElementChild !== getVideo){
                    video.firstElementChild.pause()
                }
            }
            e.target.classList.add('disable');
            getVideo.play();
            getVideo.controls = true;
            getVideo.volume = 0.1;
        })
    }
}

// todo fd make structure and organize
const $backgroundBlock = document.querySelector(".background-block");

if ($backgroundBlock) {
  $backgroundBlock.addEventListener("click", (e) => {
    document.documentElement.classList.remove("menu-open");
    bodyUnlock(250);
  });
}

const btnForVideo = document.querySelectorAll(
  ".grid-video-section-6__control-button"
);

if (btnForVideo) {
  btnForVideo.forEach((btn, index) => playVideo(btn, index));
}

function playVideo(btn, index) {
  const allVideos = document.querySelectorAll(".grid-video-section-6__video");

  btn.addEventListener("click", (e) => {
    btn.classList.toggle("active");
    if (allVideos[index].paused) {
      allVideos[index].play();
      allVideos[index].controls = true;
    } else {
      allVideos[index].pause();
      allVideos[index].controls = false;
    }
  });
}

const $videoItem = document.querySelectorAll(
  ".grid-video-section-6__item[data-deleteOn]"
);
if ($videoItem) {
  Array.from($videoItem).forEach((element) => {
    const attr = element.getAttribute("data-deleteOn");
    const windowSize = window.innerWidth;

    if (windowSize <= +attr) {
      element.remove();
    }
  });
}

const a = document.querySelector(".footer__social-list");
if (location.pathname === "/404.html") {
  a.style.display = "none";
}

const b = document.querySelector(".navigation-footer");
if (
  location.pathname !== "/store.html" &&
  location.pathname !== "/product.html"
) {
  b.style.display = "none";
}

// const c = document.querySelector(".breadcrumbs__link_current");
// c.addEventListener("click", (e) => {
//     e.preventDefault();
// })

// todo fd make all code inside start function and run it on page load
// function init(){
// const page = location.pathname
//     // code for project
// }

// window.onload = init;

class Product {
  constructor(img, title, size, price) {
    this.image = img;
    this.title = title;
    this.size = size;
    this.price = price;
  }
}

const sss = new Product("imag", "some", "M", 333);

console.log(sss);
