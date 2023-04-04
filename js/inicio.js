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

// data
const data = [
  {
    id: 1,
    title: "Kimetsu no Yaiba",
    title2: "Guardianes de la Noche",
    info: "El joven Tanjiro Kamado vive felizcon su madre y hermanos pequeños en la montaña, subsistiendo humildemente gracias a la venta de carbón. Una fría mañana, después de regresar de trabajar, se encuentraa toda su familia asesinada con la excepción de su hermana Nezuko, convertida en demonio",
    video: "./videos/demon-slayer.mp4",
    poster: "./img/banner.jpg",
  },
  {
    id: 2,
    title: "Violet Evergarden",
    title2: "",
    info: 'La historia se centra alrededor de las llamadas "Auto Memory Dolls"; muñecas inicialmente creadas por un científico para asistir a su esposa ciega a escribir sus novelas y, luego, rentarlas a personas que necesitan de sus servicios. Mientras que la función inicial de las Auto Memory Dolls es solo generar las voces a texto, un segundo grupo de personas creó una compañía que renta hermosas y talentosas mujeres quienes, teniendo las mismas funciones que una Auto Memory Doll original, también pueden realizar tareas relacionadas con la milicia o el ejército.',
    video: "./videos/violet-trailer.mp4",
    poster: "./img/series/jGaGlwJbg1MqUjswCe3zxTHbo8G.jpg",
  },

  {
    id: 3,
    title: "The Seven Deadly Sins",
    title2: "La maldición de la luz",
    info: 'Con la ayuda del "Dragón Sin of Wrath" Meliodas y los peores rebeldes de la historia, los Siete Pecados Capitales, la "Guerra Santa", en la que cuatro razas, incluyendo Humanos, Diosas, Hadas y Gigantes lucharon contra los Demonios, finalmente se sobre. A costa de la vida de Escanor "El pecado del orgullo del león", el Rey Demonio fue derrotado y el mundo recuperó la paz. Después de eso, cada uno de los pecados toma su propio camino.',
    video: "./videos/the-seven.mp4",
    poster: "./img/series/vkjsoMF86dJIv6Sgtd4CcuR8kzh.jpg",
  },
];

function closeMenu() {
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
