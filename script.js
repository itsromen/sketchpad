const sec = document.querySelector("section");

function createGrid(size = 16) {
  sec.style.width = `${size * 50}px`;
  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement("div");
    sec.appendChild(div);
  }
}
// let opacity = 1;
let isDrawing = false;

sec.addEventListener("mousedown", (e) => {
  isDrawing = true;
  e.target.style.backgroundColor = changeColor();
});

sec.addEventListener("mouseover", (e) => {
  if (isDrawing) {
    e.target.style.backgroundColor = changeColor();
  }
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let size = +prompt("Change the size of the box");
  if (!size || size <= 0) {
    return alert("Please enter a number greater than zero");
  }
  if (size >= 100) {
    return alert("Size is too big");
  }
  sec.innerHTML = "";
  createGrid(size);
});

createGrid();

function generateRandom() {
  return Math.floor(Math.random() * 256);
}

const select = document.querySelector("select");

select.addEventListener("input", changeColor);

function changeColor() {
  switch (select.value) {
    case "red":
      return "red";
    case "rgb":
      return `rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()})`;
  }
}
