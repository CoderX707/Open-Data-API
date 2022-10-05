const express = require('express');

const { products_mock_data } = require('../../helper/read_mock_data');

// get file data to javascript object
let products = products_mock_data();

const productsRoute = express.Router();

// get all products
productsRoute.get('/', async function (req, res) {
  res.json(products);
});

module.exports = { productsRoute };
