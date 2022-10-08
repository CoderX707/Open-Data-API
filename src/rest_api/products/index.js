const express = require('express');
const { body, validationResult } = require('express-validator');

const { products_mock_data } = require('../../helper/read_mock_data');
const { paginate } = require('../../helper/pagination');

// get file data to javascript object
let products = products_mock_data();

const productsRoute = express.Router();

// get all products
productsRoute.get('/', async function (req, res) {
  res.json(products);
});

// get product by pagination
productsRoute.get('/q?', function (req, res) {
  const { page_number, per_page } = req.query;
  const productsWithPagination = paginate(products, per_page, page_number);
  res.send(productsWithPagination);
});

// get product by id
productsRoute.get('/:id', function (req, res) {
  const product = products.filter(function (prod) {
    return prod.id == req.params.id;
  });
  const productData = product.length !== 0 ? product[0] : { message: 'product not found' };
  res.json(productData);
});

// create a new product
productsRoute.post(
  '/',
  body('title').isLength({ min: 5 }),
  body('description').isLength({ min: 20 }),
  body('price').isInt({ min: 1 }),
  body('stock').isInt({ min: 1 }),
  body('brand').isLength({ min: 3 }),
  body('category').isLength({ min: 3 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    req.body.id = products.length + 1;
    req.body.thumbnail = `https://mockx-api.herokuapp.com/rest-api/v1/images?text=${req.body.title}&height=300&width=400&color=NavajoWhite&backgroundColor=black`,
      products.push(req.body);
    res.json({ product: req.body, message: 'product created successfully' });
  }
);

// update product by id
productsRoute.patch('/:id', function (req, res) {
  let productFound = false;
  products.map(function (prod) {
    if (prod.id == req.params.id) {
      productFound = true;
      prod.title = req.body.title || prod.title;
      prod.description = req.body.description || prod.description;
      prod.price = req.body.price || prod.price;
      prod.stock = req.body.stock || prod.stock;
      prod.brand = req.body.brand || prod.brand;
      prod.category = req.body.category || prod.category;
    } else {
      productFound;
    }
  });
  res.json(
    productFound
      ? { message: 'product updated successfully' }
      : { message: 'product not found' }
  );
});

// delete prooduct by id
productsRoute.delete('/:id', function (req, res) {
  let productFound = false;
  products = products.filter(function (prod) {
    prod.id == req.params.id ? (productFound = true) : productFound;
    return prod.id != req.params.id;
  });
  res.json(
    productFound
      ? { message: 'product deleted successfully' }
      : { message: 'product not found' }
  );
});

module.exports = { productsRoute };
