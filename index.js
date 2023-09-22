let gridSize = 30;
let draw = true;
let erase = false;
let rainbow = false;

const changeGridButton = document.querySelector("#changeGridBtn");
changeGridButton.addEventListener("click", () => {
  const userInput = prompt("Enter a new grid size:");

  if (isNaN(userInput)) {
    alert("Invalid input. Please enter a valid number.");
    return;
  } else if (userInput > 100) {
    alert("Max number is 100");
    return;
  } else if (userInput === null) {
    return;
  }

  gridSize = parseInt(userInput);
  drawGrid(gridSize);
});

const eraserBtn = document.querySelector("#eraserBtn");
eraserBtn.addEventListener("click", () => {
  draw = false;
  erase = true;
  drawOrErase();
  console.log("Erasing");
});

const drawBtn = document.querySelector("#drawBtn");
drawBtn.addEventListener("click", () => {
  draw = true;
  erase = false;
  drawOrErase();
  console.log("Drawing");
});

function drawGrid(size) {
  const gridContainer = document.querySelector("#grid-container");
  gridContainer.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const divRow = document.createElement("div");
    divRow.classList.add("row");

    for (let j = 0; j < size; j++) {
      const divPixel = document.createElement("div");
      divPixel.classList.add("grid-pixel");
      divRow.appendChild(divPixel);
    }

    gridContainer.appendChild(divRow);
  }
  drawOrErase();
}

drawGrid(gridSize);

function turnPixelOn() {
  const divPixelNodeList = document.querySelectorAll(".grid-pixel");
  const divPixelArray = Array.from(divPixelNodeList);

  divPixelArray.forEach((divPixel) => {
    if (draw === true && erase === false) {
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
    }
  });
}

function turnPixelOff() {
  const divPixelNodeList = document.querySelectorAll(".grid-pixel");
  const divPixelArray = Array.from(divPixelNodeList);

  divPixelArray.forEach((divPixel) => {
    if (erase === true && draw === false) {
      divPixel.addEventListener("mouseover", (evt) => {
        if (evt.buttons === 1) {
          divPixel.classList.remove("pixel-on");
        }
      });
      divPixel.addEventListener("mousedown", (evt) => {
        if (evt.buttons === 1) {
          divPixel.classList.remove("pixel-on");
        }
      });
    }
  });
}

function drawOrErase() {
  turnPixelOn();
  turnPixelOff();
}

function clearPixels() {
  const divPixelNodeList = document.querySelectorAll(".grid-pixel");
  const divPixelArray = Array.from(divPixelNodeList);

  divPixelArray.forEach((divPixel) => {
    divPixel.classList.remove("pixel-on");
  });
}

const clearButton = document.querySelector("#clearGridBtn");
clearButton.addEventListener("click", clearPixels);
