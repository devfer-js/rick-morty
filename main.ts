import { APIResponse } from './interfaces';

const $boton = document.getElementById("boton") as HTMLButtonElement;
let page = 1;

$boton.addEventListener("click", obtenerData);

function render(name:string , imagen_URL: string):void {
  const $lista = document.getElementById("list");
  const card = document.createElement("div");
  // Imagen
  const image = document.createElement("img");
  image.src = imagen_URL;
  image.alt = name;

  // Nombre
  const nombreCard = document.createElement("h3");
  const texto = document.createTextNode(name);
  nombreCard.appendChild(texto);

  card.appendChild(image);
  card.appendChild(nombreCard);
  card.classList.add("card", "animated", "bounceInLeft", "fast");
  $lista.appendChild(card);
}

async function obtenerData(): Promise<void> {
  const data = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const { results }: APIResponse = await data.json();
  results.map(({ name, image }) => {
    render(name, image);
  });
  page += 1;
}

obtenerData();
