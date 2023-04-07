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

function closeMenu() {
  sideNav.classList.add("side-none");
  modal.classList.add("modal-full");

  if (sideNav.classList.contains("side-none")) {
    mainContent.classList.add("main-full");
    // guardado en localStorage
    console.log("side close");
    localStorage.setItem("side-nav-close", "true");
  }
}

if (localStorage.getItem("side-nav-close") === "true") {
  sideNav.classList.toggle("side-none");
  mainContent.classList.toggle("main-full");
  modal.classList.toggle("modal-full");
} else {
  sideNav.classList.remove("side-none");
  mainContent.classList.remove("main-full");
}

function openMenu() {
  sideNav.classList.remove("side-none");
  mainContent.classList.remove("main-full");
  modal.classList.remove("modal-full");

  if(sideNav.classList[1] != 'side-none') {
    sideNav.classList.remove("side-none");
    mainContent.classList.remove("main-full");
    modal.classList.remove("modal-full");
    localStorage.setItem("side-nav-close", "false");
  }
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
