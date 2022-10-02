const express = require('express');
const { body, validationResult } = require('express-validator');

const moviesRoute = express.Router();

const { movies_mock_data } = require('../../helper/read_mock_data');
const { paginate } = require('../../helper/pagination');

// get file data to javascript object
let movies = movies_mock_data();

// get all movies
moviesRoute.get('/', function (req, res, next) {
  res.json(movies);
});

// get movies by pagination
moviesRoute.get('/q?', function (req, res, next) {
  const { page_number, per_page } = req.query;
  const moviesWithPagination = paginate(movies, per_page, page_number);
  res.send(moviesWithPagination);
});

// get movie by id
moviesRoute.get('/:id', function (req, res, next) {
  const movie = movies.filter(function (movie) {
    return movie.id == req.params.id;
  });
  const movieData =
    movie.length !== 0 ? movie[0] : { message: 'movie not found' };
  res.json(movieData);
});

// update movie by id
moviesRoute.patch('/:id', function (req, res, next) {
  let movieFound = false;
  movies.map(function (movie) {
    if (movie.id == req.params.id) {
      movieFound = true;
      {
        movie.title = req.body.title || movie.title;
        movie.genres = req.body.genres || movie.genres;
        movie.published = req.body.published || movie.published;
        movie.thumbnail = req.body.thumbnail || movie.thumbnail;
        movie.budget = req.body.budget || movie.budget;
        movie.box_office_collection =
          req.body.box_office_collection || movie.box_office_collection;
        movie.short_description =
          req.body.short_description || movie.short_description;
        movie.long_description =
          req.body.long_description || movie.long_description;
      }
    } else {
      movieFound;
    }
  });
  res.json(
    movieFound
      ? { message: 'movie updated successfully' }
      : { message: 'movie not found' }
  );
});

// create a new movie
moviesRoute.post(
  '/',
  body('title').isLength({ min: 5 }),
  body('genres').not().isEmpty(),
  body('short_description').isLength({ min: 10 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // generate random id
    req.body.id = Math.random().toString(36).substring(2, 36);
    movies.push(req.body);
    res.json({ movie: req.body, message: 'movie created successfully' });
  }
);

// delete movie by id
moviesRoute.delete('/:id', function (req, res, next) {
  let movieFound = false;
  movies = movies.filter(function (movie) {
    movie.id == req.params.id ? (movieFound = true) : movieFound;
    return movie.id != req.params.id;
  });
  res.json(
    movieFound
      ? { message: 'movie deleted successfully' }
      : { message: 'movie not found' }
  );
});

module.exports = { moviesRoute };
