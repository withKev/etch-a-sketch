let gridRows = 30;
let gridColumns = 30;

function createGrid(rows, columns) {
  for (let i = 1; i <= columns; i++) {
    const gridContainer = document.querySelector("#grid-container");
    const divRow = document.createElement("div");
    divRow.classList.add("row");

    gridContainer.appendChild(divRow);

    for (let i = 1; i <= rows; i++) {
      const divPixel = document.createElement("div");
      divPixel.classList.add("grid-pixel");
      divPixel.textContent = i;
      divPixel.addEventListener("mouseenter", () =>
        divPixel.classList.add("pixel-on")
      );
      divRow.appendChild(divPixel);
    }
  }
}

createGrid(gridRows, gridColumns);
