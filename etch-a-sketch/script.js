let gridSize = 64;
function drawingGrid(GgridSize) {
  const container = document.querySelector("#container");
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "blue";
      });
    }
    container.appendChild(row);
  }
}

drawingGrid(gridSize);

button = document.querySelector("button");
button.addEventListener("click", () => {
  const rows = Array.from(document.getElementsByClassName("row"));
  rows.forEach((row) => {
    row.remove();
  });
  gridSize = prompt("Specify a grid size:");
  drawingGrid(gridSize);
});
