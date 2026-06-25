import { fetchJoke } from "./fetching";
import { deleteJoke, getSavedJokes, saveJoke } from "./storing";

const currentJokeElement = document.querySelector(".current-joke__text");
const loadNewJokeButton = document.querySelector(
  ".current-joke__button-generate",
);
const saveJokeButton = document.querySelector(".current-joke__button-save");
const savedJokesListElement = document.querySelector(".saved-jokes__list");
let currentJoke = "";

//const deleteCurrentJoke = document.querySelector("");

async function loadNewJoke() {
  const joke = await fetchJoke();

  //tipp zum optimieren
  if (!currentJoke) {
    saveJokeButton.classList.remove("current-joke__button-save--disabled");
  }
  currentJoke = joke;
  currentJokeElement.innerText = joke;
}

function saveCurrentJoke() {
  if (currentJoke) {
    saveJoke(currentJoke);
    renderSavedJokes();
  }
}

window.deleteSavedJokes = deleteSavedJokes;

function renderSavedJokes() {
  const savedJokes = getSavedJokes();

  let html = "";

  savedJokes.forEach((joke, index) => {
    html += `
      <div class="saved-joke" onclick="deleteSavedJokes(${index})">
            ${joke}
            <button class="saved-joke__button-remove" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="saved-joke__button-remove-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
                />
              </svg>
            </button>
      </div>
      `;
  });

  if (!html) {
    html = `<div class="saved-joke">
            Keine Witze gespeichert
            </div>`;
  }
  savedJokesListElement.innerHTML = html;
}

function deleteSavedJokes(index) {
  //remove joke
  deleteJoke(index);
  renderSavedJokes();
}

loadNewJokeButton.addEventListener("click", loadNewJoke);
saveJokeButton.addEventListener("click", saveCurrentJoke);
//deleteSavedJokeButton.addEventListener("click", deleteCurrentJoke);

renderSavedJokes();

//to do 4 bei keinen vorhandenen Witzen, soll angezeigt werden "kein witz gespeichert"
