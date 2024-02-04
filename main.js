const input = document.querySelector("#input");
const addBtn = document.querySelector(".add-btn");
const conatiner = document.querySelector(".container");

addBtn.addEventListener("click", () => {
  const text = input.value;
  const el = document.createElement("div");
  const p = document.createElement("p");
  const icon = document.createElement("img");
  icon.setAttribute("src", "./cross.png");
  icon.classList.add("icon");
  p.innerHTML = text;
  el.appendChild(p);
  el.appendChild(icon);
  conatiner.appendChild(el);
  el.classList.add("result");
  input.value = " ";
  icon.addEventListener("click", () => {
    el.classList.add("remove");
  });
  p.addEventListener("click", () => {
    p.classList.add("checked");
  });
});
