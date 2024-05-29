const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", onInputCange);
function onInputCange() {
  const trimmedInput = nameInput.value.trim();
  nameOutput.textContent = trimmedInput || "Anonymous";
}
