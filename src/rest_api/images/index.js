const express = require('express');
const { Canvas } = require('canvas-constructor/cairo');

const imageRoute = express.Router();

// get random image
imageRoute.get('/', function (req, res) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const backgroundColor = randomColorCode();
  const textColor = randomColorCode();
  const image = createImage(
    alphabet.shuffleString(),
    randomIntNumber(100, 500),
    randomIntNumber(100, 500),
    `#${backgroundColor}`,
    `#${textColor}`
  );
  res.set({ 'Content-Type': 'image/png' });
  res.send(image);
});

// get image from dimension and text
imageRoute.get('/:dimension/:text', function (req, res) {
  // dimension = Width X Height, text = plain text
  const { dimension, text } = req.params;
  const width = parseInt(dimension.split('X')[0]) || 100; // default width
  const height = parseInt(dimension.split('X')[1]) || 100; // default height
  // background color, text color
  const backgroundColor = randomColorCode();
  const textColor = randomColorCode();
  const image = createImage(
    text,
    width,
    height,
    `#${backgroundColor}`,
    `#${textColor}`
  );
  res.set({ 'Content-Type': 'image/png' });
  res.send(image);
});

// get image from dimension, text with colors
imageRoute.get(
  '/:dimension/:text/:textColor/:backgroundColor',
  function (req, res) {
    // dimension = Width X Height, text = plain text, textColor = string color, backgroundColor = string color not hex color
    const { dimension, text, textColor, backgroundColor } = req.params;
    const width = parseInt(dimension.split('X')[0]) || 100; // default width
    const height = parseInt(dimension.split('X')[1]) || 100; // default height
    const image = createImage(text, width, height, backgroundColor, textColor);
    res.set({ 'Content-Type': 'image/png' });
    res.send(image);
  }
);

function randomIntNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColorCode() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
function createImage(text, width, height, backgroundColor, textColor) {
  const canvas = new Canvas(width, height)
    .setColor(backgroundColor)
    .printRectangle(0, 0, width, height)
    .setColor(textColor)
    .setTextFont(`bold ${width > height ? height / 2 : width / 2}px Impact`)
    .setTextAlign('center')
    .setTextBaseline('middle')
    .printText(
      text.toLocaleUpperCase().substring(0, randomIntNumber(1, 3)),
      width / 2,
      height / 2
    )
    .png();
  return canvas;
}
String.prototype.shuffleString = function () {
  var a = this.split(''),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join('');
};
module.exports = { imageRoute };
