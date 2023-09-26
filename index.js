let gridSize = 30;
let isDrawing = true;
let isErasing = false;
let rainbow = false;
let rgbBrush = false;

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
  rgbBrush = false;
  drawOrErase();
  console.log("Drawing");
});

const rainbowBtn = document.querySelector("#rainbowBtn");
rainbowBtn.addEventListener("click", () => {
  rgbBrush = true;
  console.log("Rainbow brush activated");
});

const colourPicker = document.querySelector("#colourPicker");
colourPicker.addEventListener("click", () => {
  rgbBrush = false;
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
  if (rgbBrush) {
    paintRGB();
  } else {
    getColourValue();
    turnPixelOn();
    turnPixelOff();
  }
}

function getColourValue() {
  colour = document.getElementById("colourPicker").value;
  console.log(colour);
}

function getRandomRGB() {
  const randomRGB = Math.floor(Math.random() * 3);
  let r;
  let g;
  let b;

  switch (randomRGB) {
    case 0:
      r = 255;
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
      break;
    case 1:
      r = Math.floor(Math.random() * 256);
      g = 255;
      b = Math.floor(Math.random() * 256);
      break;
    case 2:
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = 255;
      break;
  }
  //   return `rgb(${r},${g},${b})`;
  return rgbToHex(r, g, b);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function paintRGB() {
  const divPixelNodeList = document.querySelectorAll(".grid-pixel");
  const divPixelArray = Array.from(divPixelNodeList);

  divPixelArray.forEach((divPixel) => {
    if (rgbBrush) {
      divPixel.addEventListener("mouseover", (evt) => {
        if (evt.buttons === 1) {
          const randomRGB = getRandomRGB();
          divPixel.style.backgroundColor = randomRGB;
          divPixel.style.transition = "background-color 0.1s ease-in";
        }
      });
      divPixel.addEventListener("mousedown", (evt) => {
        if (evt.buttons === 1) {
          const randomRGB = getRandomRGB();
          divPixel.style.backgroundColor = randomRGB;
          divPixel.style.transition = "background-color 0.1s ease-in";
        }
      });
    }
  });
}
