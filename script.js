const sec = document.querySelector("section");

function createGrid(size = 16) {
  sec.style.width = `${size * 50}px`;
  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement("div");
    sec.appendChild(div);
  }
}

let opacityMode = false;
let opacity = 0;
let isDrawing = false;

sec.addEventListener("mousedown", (e) => {
  isDrawing = true;
  e.target.style.backgroundColor = changeColor();
  if (opacityMode) {
    e.target.style.opacity = opacity.toString();
    opacity += 0.1;
  } else {
    e.target.style.opacity = "1";
  }
});

sec.addEventListener("mouseover", (e) => {
  if (isDrawing) {
    e.target.style.backgroundColor = changeColor();
    if (opacityMode) {
      e.target.style.opacity = opacity.toString();
      opacity += 0.1;
    } else {
      e.target.style.opacity = "1";
    }
  }
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
  opacity = 0;
  opacityMode = false;
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
    case "darkening":
      opacityMode = true;
      return `rgb(0, 0, 0)`;
  }
}
