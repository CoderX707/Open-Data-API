const fs = require('fs');

const { USERS_DATA, MOVIES_DATA, JOBS_DATA, PRODUCTS_DATA } = require('./constants');

function users_mock_data() {
  // get file data to javascript object
  const rawUsersData = fs.readFileSync(USERS_DATA);
  let users = JSON.parse(rawUsersData);
  return users;
}

function movies_mock_data() {
  // get file data to javascript object
  const rawMoviesData = fs.readFileSync(MOVIES_DATA);
  let movies = JSON.parse(rawMoviesData);
  return movies;
}

function jobs_mock_data() {
  // get file data to javascript object
  const rawJobsData = fs.readFileSync(JOBS_DATA);
  let jobs = JSON.parse(rawJobsData);
  return jobs;
}

function products_mock_data() {
  // get file data to javascript object
  const rawproductsData = fs.readFileSync(PRODUCTS_DATA);
  const products = JSON.parse(rawproductsData);
  return products;
}

module.exports = { users_mock_data, movies_mock_data, jobs_mock_data, products_mock_data };
