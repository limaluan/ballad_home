var body = document.querySelector("body");
var colorTable = [
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

// Randomize a selected color
var randomizeColor = function () {
  let random = (Math.random() * 12).toFixed();
  console.log(`RANDOM DEBUG: ${random}`);
  return colorTable[random];
};

// Change the background color
var colorChanger = function () {
  let color = randomizeColor();

  while (true) {
    if (body.style.backgroundColor !== color) {
      body.style.transition = "all 2s";
      body.style.backgroundColor = color;
      break;
    } else {
      color = randomizeColor();
    }
  }
};

body.style.backgroundColor = randomizeColor();
setInterval(colorChanger, 3000);
