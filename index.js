let gridSize = 30;
let isDrawing = true;
let isErasing = false;
let rainbow = false;

const changeGridButton = document.querySelector("#changeGridBtn");
changeGridButton.addEventListener("click", () => {
  const userInput = prompt("Enter a new grid size:");

  if (isNaN(userInput)) {
    alert("Invalid input. Please enter a valid number.");
    return;
  } else if (userInput > 100) {
    alert("Max number is 100. Maximum grid size is 100 x 100");
    return;
  } else if (userInput === null) {
    return;
  }

  gridSize = parseInt(userInput);
  drawGrid(gridSize);
});

const eraserBtn = document.querySelector("#eraserBtn");
eraserBtn.addEventListener("click", () => {
  isDrawing = false;
  isErasing = true;
  drawOrErase();
  console.log("Erasing");
});

const drawBtn = document.querySelector("#drawBtn");
drawBtn.addEventListener("click", () => {
  isDrawing = true;
  isErasing = false;
  drawOrErase();
  console.log("Drawing");
});

const clearButton = document.querySelector("#clearGridBtn");
clearButton.addEventListener("click", clearPixels);

function clearPixels() {
  const divPixelNodeList = document.querySelectorAll(".grid-pixel");
  const divPixelArray = Array.from(divPixelNodeList);

  divPixelArray.forEach((divPixel) => {
    // divPixel.classList.remove("pixel-on");
    divPixel.style.backgroundColor = "";
  });
  console.log("Reset Drawing");
}

const gridContainer = document.querySelector("#grid-container");
gridContainer.addEventListener("mouseenter", () => {
  drawOrErase();
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
    if (isDrawing) {
      divPixel.addEventListener("mouseover", (evt) => {
        if (evt.buttons === 1) {
          //   divPixel.classList.add("pixel-on");
          divPixel.style.backgroundColor = colour;
          divPixel.style.transition = "background-color 0.1s ease-in";
        }
      });
      divPixel.addEventListener("mousedown", (evt) => {
        if (evt.buttons === 1) {
          //   divPixel.classList.add("pixel-on");
          divPixel.style.backgroundColor = colour;
          divPixel.style.transition = "background-color 0.1s ease-in";
        }
      });
    }
  });
}

function turnPixelOff() {
  const divPixelNodeList = document.querySelectorAll(".grid-pixel");
  const divPixelArray = Array.from(divPixelNodeList);

  divPixelArray.forEach((divPixel) => {
    if (isErasing) {
      divPixel.addEventListener("mouseover", (evt) => {
        if (evt.buttons === 1) {
          //   divPixel.classList.remove("pixel-on");
          divPixel.style.backgroundColor = "";
        }
      });
      divPixel.addEventListener("mousedown", (evt) => {
        if (evt.buttons === 1) {
          //   divPixel.classList.remove("pixel-on");
          divPixel.style.backgroundColor = "";
        }
      });
    }
  });
}

function drawOrErase() {
  getColourValue();
  turnPixelOn();
  turnPixelOff();
}

function getColourValue() {
  colour = document.getElementById("colourPicker").value;
  console.log(colour);
}
