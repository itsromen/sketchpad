function createGrid(size = 16) {
  sec.style.width = `${size*50}px`;
  for (let i = 0; i < size**2; i++) {
    const div = document.createElement("div");
    const sec = document.querySelector("section");
    sec.appendChild(div);
  }
}

const sec = document.querySelector("section");
let isDrawing = false;

sec.addEventListener("mousedown", (e) => {
  isDrawing = true;
  e.target.style.backgroundColor = "red";
});

sec.addEventListener("mouseover", (e) => {
  if (isDrawing) {
    e.target.style.backgroundColor = "red";
  }
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let size = +prompt("Change the size of the box");
  if (size >= 100) {
    return alert("Size is too big");
  }
  sec.innerHTML = "";
  createGrid(size);
});

createGrid();
