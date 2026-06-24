import { fetchJoke } from "./fetching";

const currentJokeElement = document.querySelector(".current-joke__text");
const loadNewJokeButton = document.querySelector(
  ".current-joke__button-generate",
);

async function loadNewJoke() {
  const joke = await fetchJoke();

  currentJokeElement.innerText = joke;
}

loadNewJokeButton.addEventListener("click", loadNewJoke);
