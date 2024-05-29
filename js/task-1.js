const listElem = document.querySelector("#categories");
const itemsElems = listElem.querySelectorAll(".item");
console.log(`Number of categories: ${itemsElems.length}`);

itemsElems.forEach((item) => {
  const nameElem = item.querySelector("h2").textContent;
  const categoryElems = item.querySelectorAll("li").length;
  console.log(`Category: ${nameElem}`);
  console.log(`Elements: ${categoryElems}`);
});
