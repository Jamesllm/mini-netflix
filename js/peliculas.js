// data Peliculas
const dataPeliculas = [
  {
    id: 1,
    title: "Alerta roja",
    title2: "",
    type: "Pelicula",
    info: "Cuando la Interpol envía una Alerta roja, significa que los departamentos de Policía de todo el mundo deben estar alerta para capturar a los criminales más buscados. Todas las alarmas saltan cuando un temerario robo une al mejor agente del FBI (Johnson) con dos criminales rivales entre sí (Gadot & Reynolds). Una coincidencia que hará que suceda lo impredecible.",
    video: "https://www.dropbox.com/s/54oc6ew359vjwg1/alerta-roja.mp4?raw=1",
    poster: "./img/peliculas/7ajHGIAYNMiIzejy1LJWdPrcAx8.jpg",
  },
];

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function PeliculaAleatoria() {
  let title = document.querySelector(".info-serie .title");
  let title2 = document.querySelector(".info-serie .title-2");
  let info = document.querySelector(".info-serie .info");
  let video = document.getElementById("video-overlay");
  let data = dataPeliculas;
  console.log(data);
  //https://www.dropbox.com/s/lhitwwjvtw1mvpl/Violet-Trailer.mp4?raw=1

  const random = aleatorio(data.at(0).id, data.at(-1).id);
  const im = data.filter((a) => a.id === random);

  title.innerHTML = im[0].title;
  title2.innerHTML = im[0].title2;
  info.innerHTML = im[0].info;
  video.src = im[0].video;
  video.poster = im[0].poster;
}

window.addEventListener("load", PeliculaAleatoria);
