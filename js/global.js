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
const sideNav = document.querySelector(".sidenav");
const mainContent = document.querySelector(".main-content");
const modalClose = document.querySelector(".modal .close");

function closeMenu() {
  sideNav.classList.add("side-none");
  modal.classList.add("modal-full");
  modalClose.classList.add("close-full-w");
  if (sideNav.classList.contains("side-none")) {
    mainContent.classList.add("main-full");
  } else {
    console.log("nafa");
  }
}

function openMenu() {
  sideNav.classList.remove("side-none");
  mainContent.classList.remove("main-full");
  modal.classList.remove("modal-full");
  modalClose.classList.remove("close-full-w");
}


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
