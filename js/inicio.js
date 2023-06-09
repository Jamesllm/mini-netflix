// data Series
const dataSeries = [
  {
    id: 1,
    title: "Kimetsu no Yaiba",
    title2: "Guardianes de la Noche",
    type: "Serie",
    info: "El joven Tanjiro Kamado vive felizcon su madre y hermanos pequeños en la montaña, subsistiendo humildemente gracias a la venta de carbón. Una fría mañana, después de regresar de trabajar, se encuentraa toda su familia asesinada con la excepción de su hermana Nezuko, convertida en demonio",
    video: "./videos/demon-slayer.mp4",
    poster: "./img/banner.jpg",
  },
  {
    id: 2,
    title: "Violet Evergarden",
    title2: "La Serie",
    type: "Serie",
    info: 'La historia se centra alrededor de las llamadas "Auto Memory Dolls"; muñecas inicialmente creadas por un científico para asistir a su esposa ciega a escribir sus novelas y, luego, rentarlas a personas que necesitan de sus servicios.',
    video: "./videos/violet-trailer.mp4",
    poster: "./img/series/jGaGlwJbg1MqUjswCe3zxTHbo8G.jpg",
  },
  {
    id: 3,
    title: "Lupin",
    title2: "La serie",
    type: "Pelicula",
    info: "Basada en la historia de Arsène Lupin, el ladrón Assane Diop se propone vengar a su padre de las injusticias sufridas por parte de una familia adinerada.",
    video: "https://www.dropbox.com/s/0h398wkun5pmln2/lupin-trailer.mp4?raw=1",
    poster: "./img/series/bktTDiqlP0uksG75UpqJZUX8FPH.jpg",
  },
  {
    id: 4,
    title: "The Seven Deadly Sins",
    title2: "La maldición de la luz",
    type: "Serie",
    info: 'Con la ayuda del "Dragón Sin of Wrath" Meliodas y los peores rebeldes de la historia, los Siete Pecados Capitales, la "Guerra Santa", en la que cuatro razas, incluyendo Humanos, Diosas, Hadas y Gigantes lucharon contra los Demonios, finalmente se sobre. A costa de la vida de Escanor "El pecado del orgullo del león".',
    video: "./videos/the-seven.mp4",
    poster: "./img/series/vkjsoMF86dJIv6Sgtd4CcuR8kzh.jpg",
  },
  {
    id: 5,
    title: "Lucifer",
    title2: "La serie",
    type: "Serie",
    info: "La serie se centrará en Lucifer (Tom Ellis) quien, aburrido e infeliz como el Señor del Infierno, dimite de su trono y abandona su reino para trasladarse a la ciudad de Los Angeles y abrir un lujoso piano-bar llamado Lux. Una vez allí ayudará a la policía a castigar a los más peligrosos criminales de la ciudad.",
    video: "https://www.dropbox.com/s/x1h7xwtw1z2udsp/lucifer-trailer.mp4?raw=1",
    poster: "./img/series/ncftkNAjIz2PBbUMY7T0CHVJP8d.jpg",
  },
];

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function serieAleatoria() {
  let title = document.querySelector(".info-serie .title");
  let title2 = document.querySelector(".info-serie .title-2");
  let info = document.querySelector(".info-serie .info");
  let video = document.getElementById("video-overlay");
  let data = dataSeries;
  //https://www.dropbox.com/s/lhitwwjvtw1mvpl/Violet-Trailer.mp4?raw=1

  const random = aleatorio(data.at(0).id, data.at(-1).id);
  const im = data.filter((a) => a.id === random);

  title.innerHTML = im[0].title;
  title2.innerHTML = im[0].title2;
  info.innerHTML = im[0].info;
  video.src = im[0].video;
  video.poster = im[0].poster;
}

window.addEventListener("load", serieAleatoria);
