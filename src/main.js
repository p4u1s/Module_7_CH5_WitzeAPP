import { fetchJoke } from "./fetching";
import { saveJoke } from "./storing";

const currentJokeElement = document.querySelector(".current-joke__text");
const loadNewJokeButton = document.querySelector(
  ".current-joke__button-generate",
);
const saveJokeButton = document.querySelector(".current-joke__button-save");
let currentJoke = "";

async function loadNewJoke() {
  const joke = await fetchJoke();

  //tipp zum optimieren
  if(!currentJoke){
    saveJokeButton.classList.remove("current-joke__button-save--disabled");
  }
  currentJoke = joke;
  currentJokeElement.innerText = joke;
}

function saveCurrentJoke(){
  if(currentJoke){
    saveJoke(currentJoke);
    //render joke
  }
}


loadNewJokeButton.addEventListener("click", loadNewJoke);

//to do 1 speichern des Witzes im Local-Storage

//to do 2vergleich auf bereits gespeicherte Witze

//to do 3 Löschen Button löscht witze aus local-storage

//to do 4bei keinen vorhandenen Witzen, soll angezeigt werden "kein witz gespeichert"