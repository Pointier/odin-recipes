let gridSize = 16;

const container = document.querySelector("#container");

for (let i = 0; i < gridSize; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
  }
  container.appendChild(row);
}
