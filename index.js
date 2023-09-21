let gridRows = 40;
let gridColumns = 40;

function createGrid(rows, columns) {
  for (let i = 1; i <= columns; i++) {
    const gridContainer = document.querySelector("#grid-container");
    const divRow = document.createElement("div");
    divRow.classList.add("row");

    gridContainer.appendChild(divRow);

    for (let i = 1; i <= rows; i++) {
      const divPixel = document.createElement("div");
      divPixel.classList.add("grid-pixel");
      divRow.appendChild(divPixel);
    }
  }
}

createGrid(gridRows, gridColumns);

function clearGrid() {
  const divPixelNodeList = document.querySelectorAll(".grid-pixel");
  const divPixelArray = Array.from(divPixelNodeList);

  divPixelArray.forEach((divPixel) => {
    divPixel.classList.remove("pixel-on");
  });
}

const clearButton = document.querySelector("#clearGridButton");
clearButton.addEventListener("click", clearGrid);

const divPixelNodeList = document.querySelectorAll(".grid-pixel");
const divPixelArray = Array.from(divPixelNodeList);

divPixelArray.forEach((divPixel) => {
  divPixel.addEventListener("mouseover", (evt) => {
    if (evt.buttons === 1) {
      divPixel.classList.add("pixel-on");
    }
  });
  divPixel.addEventListener("mousedown", (evt) => {
    if (evt.buttons === 1) {
      divPixel.classList.add("pixel-on");
    }
  });
});
