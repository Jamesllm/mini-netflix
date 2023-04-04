// importamos los modulos
import { data } from "./data.js";
// definimos las constantes
const video = document.querySelector(".vid");
const iconPlayPause = document.getElementById("iconPlay");
const iconMutedVolume = document.getElementById("iconMuted");
const info = document.querySelector(".info-serie .info");
const infoPlay = document.getElementById("display");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("img01");
const modalFrame = document.getElementById("frame");
const captionText = document.getElementById("caption");
const img = document.getElementById("myImage");

function closeMenu() {
  let sideNav = document.querySelector(".sidenav");
  let mainContent = document.querySelector(".main-content");

  sideNav.classList.add("side-none");
  if (sideNav.classList.contains("side-none")) {
    mainContent.classList.add("main-full");
  } else {
    console.log("nafa");
  }
}

function openMenu() {
  sideNav.classList.remove("side-none");
  mainContent.classList.remove("main-full");
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imagenAleatoria() {
  let title = document.querySelector(".info-serie .title");
  let title2 = document.querySelector(".info-serie .title-2");
  let info = document.querySelector(".info-serie .info");
  let video = document.getElementById("video-overlay");
  //https://www.dropbox.com/s/lhitwwjvtw1mvpl/Violet-Trailer.mp4?raw=1

  const random = aleatorio(data.at(0).id, data.at(-1).id);
  const im = data.filter((a) => a.id === random);

  title.innerHTML = im[0].title;
  title2.innerHTML = im[0].title2;
  info.innerHTML = im[0].info;
  video.src = im[0].video;
  video.poster = im[0].poster;
}

//fa-solid fa-play
//fa-solid fa-pause

//fa-solid fa-volume-xmark
//fa-solid fa-volume-high
function play() {
  if (video.paused == false) {
    video.pause();
    iconPlayPause.className = "fa-solid fa-play";
    info.style.visibility = "visible";
    infoPlay.classList.toggle("display-active");
  } else {
    video.play();
    iconPlayPause.className = "fa-solid fa-pause";
    info.style.visibility = "hidden";
    infoPlay.classList.toggle("display-active");
  }
}

function muted() {
  if (video.muted == true) {
    video.muted = false;
    iconMutedVolume.className = "fa-solid fa-volume-high";
  } else {
    video.muted = true;
    iconMutedVolume.className = "fa-solid fa-volume-xmark";
  }
}

function modalInfo(el) {
  var imgSrc = el.src;
  // atributo personalizado
  // obtencion a través del método dataset
  var frame = `https://www.youtube.com/embed/${el.dataset.trailer}`;
  var altText = el.alt;
  modal.style.visibility = "visible";
  modalFrame.src = frame;
  modalImage.src = imgSrc;
  captionText.innerHTML = altText;
}

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.visibility = "hidden";
    modalFrame.src = "";
  }
};

window.addEventListener("load", imagenAleatoria);
