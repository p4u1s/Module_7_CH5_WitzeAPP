const LOCAL_STORAGE_KEY = "jokes";

export function saveJoke(joke) {
  localStorage.setItem(LOCAL_STORAGE_KEY, joke);
}
