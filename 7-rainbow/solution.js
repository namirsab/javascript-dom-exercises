const button = document.querySelector("button");

const listItems = document.querySelectorAll(".list__item");

button.addEventListener("click", () => {
  for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];
    listItem.style.color = listItem.textContent;
  }
});
