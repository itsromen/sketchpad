for (i = 0; i < 256; i++) {
  const div = document.createElement("div");
  const sec = document.querySelector("section");
  sec.appendChild(div);
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

sec.addEventListener("mouseup", () => {
    isDrawing = false;
})
