// data Peliculas
const dataPeliculas = [
  {
    id: 1,
    title: "Lupin",
    title2: "",
    type: "Serie",
    info: "Inspirado por las aventuras de Arsène Lupin, el ladrón de guante blanco Assane Diop se propone vengar la injusticia sufrida por su padre a manos de una familia rica.",
    video: "./videos/lupin-trailer.mp4",
    poster: "./img/peliculas/bktTDiqlP0uksG75UpqJZUX8FPH.jpg",
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
