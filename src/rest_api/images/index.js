const express = require('express');
const { Canvas } = require('canvas-constructor/cairo');
const { ALPHABET } = require('../../helper/constants');

const imageRoute = express.Router();

// get random image or by query image
imageRoute.get('/', function (req, res) {
  let { text, color, backgroundColor, height, width } = req.query;
  text = text?.substring(0, 2) || ALPHABET.shuffleString().substring(0, randomIntNumber(2, 2)) // get random characters
  color = color?.replace(/\s+/g, '') || randomColorCode(); // remove space from text
  backgroundColor = backgroundColor?.replace(/\s+/g, '') || randomColorCode(); // remove space from text
  width = parseInt(width) || 400; // default width
  height = parseInt(height) || 300; // default height
  const image = createImage(text, width, height, backgroundColor, color);
  res.set({ 'Content-Type': 'image/png' });
  res.send(image);
});

function randomIntNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColorCode() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function createImage(text, width, height, backgroundColor, textColor) {
  const canvas = new Canvas(width, height)
    .setColor(backgroundColor)
    .printRectangle(0, 0, width, height)
    .setColor(textColor)
    .setTextFont(`bold ${width > height ? height / 2 : width / 2}px Helvetica`)
    .setTextAlign('center')
    .setTextBaseline('middle')
    .printText(
      text.toLocaleUpperCase(),
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
