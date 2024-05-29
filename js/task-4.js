const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {};

  for (let input of form.elements) {
    if (
      (input.type === "text" || input.type === "password") &&
      input.value.trim() === ""
    ) {
      alert("All form fields must be filled in");
      return false;
    }
    formData[input.name] = input.value.trim();
  }

  console.log(formData);
  form.reset();
});
