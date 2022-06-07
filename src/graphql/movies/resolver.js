const { movies_mock_data } = require('../../helper/read_mock_data');

// get file data to javascript object
let movies = movies_mock_data();

// Root resolver
const moviesResolver = {
  // query callback
  movies: () => {
    return movies;
  },

  movie({ id }) {
    return movies.find((movie) => movie.id == id);
  },

  // mutation callback
  createMovie: ({
    title,
    genres,
    thumbnail,
    published,
    budget,
    box_office_collection,
    short_description,
    long_description,
  }) => {
    let movie = {};
    movie.id = Math.random().toString(36).substring(2, 36);
    movie.title = title;
    movie.genres = genres;
    movie.published = published;
    movie.thumbnail = thumbnail;
    movie.budget = budget;
    movie.box_office_collection = box_office_collection;
    movie.short_description = short_description;
    movie.long_description = long_description;
    movies.push(movie);
    return movie;
  },

  updateMovie: ({
    id,
    title,
    genres,
    thumbnail,
    published,
    budget,
    box_office_collection,
    short_description,
    long_description,
  }) => {
    movies.map(function (movie) {
      if (movie.id == id) {
        movie.title = title || movie.title;
        movie.genres = genres || movie.genres;
        movie.published = published || movie.published;
        movie.thumbnail = thumbnail || movie.thumbnail;
        movie.budget = budget || movie.budget;
        movie.box_office_collection =
          box_office_collection || movie.box_office_collection;
        movie.short_description = short_description || movie.short_description;
        movie.long_description = long_description || movie.long_description;
      }
    });
    return movies.find((movie) => movie.id == id);
  },

  deleteMovie: ({ id }) => {
    let deletedmovie = movies.find((movie) => movie.id == id);
    movies = movies.filter(function (movie) {
      return movie.id != id;
    });
    return deletedmovie;
  },
};

module.exports = { moviesResolver };
