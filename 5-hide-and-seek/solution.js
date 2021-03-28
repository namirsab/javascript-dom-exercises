const box = document.querySelector(".box");
const button = document.querySelector(".show-hide-button");

button.addEventListener("click", () => {
  const isHidden = box.classList.toggle("hidden");
  if (isHidden) {
    button.textContent = "Show";
  } else {
    button.textContent = "Hide";
  }
});
