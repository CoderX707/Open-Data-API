const path = require('path');

const PORT = process.env.PORT || 5000;
const ENV = process.env.ENV || 'DEV';
const MOCK_DATA = process.env.MOCK_DATA || 'mock_data';
const USERS_DATA = path.join(
  __dirname,
  `../${MOCK_DATA}/users_mock_data/users.json`
);
const MOVIES_DATA = path.join(
  __dirname,
  `../${MOCK_DATA}/movies_mock_data/movies.json`
);
const JOBS_DATA = path.join(
  __dirname,
  `../${MOCK_DATA}/jobs_mock_data/jobs.json`
);

module.exports = { PORT, MOCK_DATA, USERS_DATA, MOVIES_DATA, JOBS_DATA };
