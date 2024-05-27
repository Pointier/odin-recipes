let gridSize = 64;
function drawingGrid(gridSize) {
  const container = document.querySelector("#container");
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.opacity = 0;

      square.style.backgroundColor = randomColor();
      row.appendChild(square);
      square.addEventListener("mouseover", () => {
        let currentOpacity = parseFloat(square.style.opacity) || 0;
        currentOpacity += 0.1;
        if (currentOpacity <= 1) {
          square.style.opacity = currentOpacity.toString();
        }
      });
    }
    container.appendChild(row);
  }
}

drawingGrid(gridSize);

function randomColor() {
  const THREE_BYTE_MAX = 16777215;
  return "#" + Math.floor(Math.random() * THREE_BYTE_MAX + 1).toString(16);
}
button = document.querySelector("button");
button.addEventListener("click", () => {
  const rows = Array.from(document.getElementsByClassName("row"));
  rows.forEach((row) => {
    row.remove();
  });
  gridSize = prompt("Specify a grid size:");
  drawingGrid(gridSize);
});
