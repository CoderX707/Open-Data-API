const express = require('express');
const { body, validationResult } = require('express-validator');
const { paginate } = require('../../helper/pagination');

const usersRoute = express.Router();

const { users_mock_data } = require('../../helper/read_mock_data');

// get file data to javascript object
let users = users_mock_data();

// get all users
usersRoute.get('/', function (req, res, next) {
  res.json(users);
});

// get users by pagination
usersRoute.get('/q?', function (req, res, next) {
  const { page_number, per_page } = req.query;
  const usersWithPagination = paginate(users, per_page, page_number);
  res.send(usersWithPagination);
});

// get user by id
usersRoute.get('/:id', function (req, res, next) {
  const user = users.filter(function (user) {
    return user.id == req.params.id;
  });
  const userData = user.length !== 0 ? user[0] : { message: 'user not found' };
  res.json(userData);
});

// update user by id
usersRoute.patch('/:id', body('id').isNumeric(), function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let userFound = false;
  users.map(function (user) {
    if (user.id == req.params.id) {
      userFound = true;
      user.first_name = req.body.first_name || user.first_name;
      user.last_name = req.body.last_name || user.last_name;
      user.email = req.body.email || user.email;
      user.gender = req.body.gender || user.gender;
      user.address = req.body.address || user.address;
    } else {
      userFound;
    }
  });
  res.json(
    userFound
      ? { message: 'user updated successfully' }
      : { message: 'user not found' }
  );
});

// create a new user
usersRoute.post(
  '/',
  body('email').isEmail(),
  body('first_name').isLength({ min: 3 }),
  body('last_name').isLength({ min: 3 }),
  body('gender').isLength({ min: 3 }),
  body('address').isLength({ min: 3 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    req.body.id = users.length + 1;
    users.push(req.body);
    res.json({ user: req.body, message: 'user created successfully' });
  }
);

// delete user by id
usersRoute.delete('/:id', function (req, res, next) {
  let userFound = false;
  users = users.filter(function (user) {
    user.id == req.params.id ? (userFound = true) : userFound;
    return user.id != req.params.id;
  });
  res.json(
    userFound
      ? { message: 'user deleted successfully' }
      : { message: 'user not found' }
  );
});

module.exports = { usersRoute };
