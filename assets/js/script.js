/* Color Changer */
var body = document.querySelector("body");
const colorScheme = document.getElementById("scheme");  // ColorScheme Controller
var colorTable = [  /* Colored ColorScheme */
  "rgb(255, 0, 0)",
  "rgb(255, 128, 0)",
  "rgb(255, 255, 0)",
  "rgb(128, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 128)",
  "rgb(0, 255, 255)",
  "rgb(0, 128, 255)",
  "rgb(0, 0, 255)",
  "rgb(128, 0, 255)",
  "rgb(255, 0, 255)",
  "rgb(255, 0, 128)",
  "rgb(255, 0, 64)",
];
const blackWhiteTable = ["rgb(255,255,255)", "rgb(0,0,0)"]; // Black&White ColorScheme

var random = 0; // É utilizado como parâmetro para as cores que irão aparecer na função randomizeColor !!

// Randomize a selected color
var randomizeColor = function () {
  if (colorScheme.value === "colored") {
    random = (Math.random() * 12).toFixed();
    // console.log(`RANDOM DEBUG: ${random}`);
    return colorTable[random];
  } else {
    if (random === 0) {
      random++;
      return blackWhiteTable[0];
    } else {
      random = 0;
      return blackWhiteTable[1];
    }
  }
};
body.style.backgroundColor = randomizeColor(); // Randomize background at first time
// Change the background color
var colorChanger = function () {
  let color = randomizeColor();

  while (true) {
    if (body.style.backgroundColor !== color) {
      body.style.transition = `all ${document.getElementById("transition").value}s`;
      body.style.backgroundColor = color;
      break;
    } else {
      color = randomizeColor();
    }
  }
};

// Timer to switch background
var timer = 3000;
var interval = setInterval(colorChanger, timer);

function setFrequency() {
  timer = document.getElementById("frequency").value;
  clearInterval(interval);
  interval = setInterval(colorChanger, timer);
};

/* Changer Controller */
const controllerMenu = document.getElementById("controllerMenu");
const onMenu = document.querySelector(".onMenu");

const openMenu = () => {
  controllerMenu.style.backgroundColor = "rgba(0,0,0,0.8)";
  controllerMenu.style.width = "50rem";
  controllerMenu.style.transition = "all 1s";

  onMenu.style.visibility = "initial";
};

const closeMenu = () => {
  controllerMenu.style.backgroundColor = "initial";
  controllerMenu.style.width = "20px";
  controllerMenu.style.transition = "all 1s";

  onMenu.style.visibility = "hidden";
};
