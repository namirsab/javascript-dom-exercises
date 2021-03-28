const form = document.querySelector(".super-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(form);
  const name = form.name.value;
  const age = form.age.valueAsNumber;
  const married = form.married.checked;
  const hobbies = form.hobbies.value;

  console.log({
    name,
    age,
    married,
    hobbies,
  });
});
