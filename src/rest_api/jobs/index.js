const express = require('express');
const { body, validationResult } = require('express-validator');
const { paginate } = require('../../helper/pagination');

const jobsRoute = express.Router();

const { jobs_mock_data } = require('../../helper/read_mock_data');

// get file data to javascript object
let jobs = jobs_mock_data();

// get all jobs
jobsRoute.get('/', function (req, res, next) {
  res.json(jobs);
});

// get jobs by pagination
jobsRoute.get('/q?', function (req, res, next) {
  const { page_number, per_page } = req.query;
  const jobsWithPagination = paginate(jobs, per_page, page_number);
  res.send(jobsWithPagination);
});

// get job by id
jobsRoute.get('/:id', function (req, res, next) {
  const job = jobs.filter(function (job) {
    return job._id == req.params.id;
  });
  const jobData = job.length !== 0 ? job[0] : { message: 'job not found' };
  res.json(jobData);
});

// update job by id
jobsRoute.patch('/:id', function (req, res, next) {
  let jobFound = false;
  jobs.map(function (job) {
    if (job._id == req.params.id) {
      jobFound = true;
      {
        job.job_title = req.body.job_title || job.job_title;
        job.thumbnail = req.body.thumbnail || job.thumbnail;
        job.posted_at = req.body.posted_at || job.posted_at;
        job.salary = req.body.salary || job.salary;
        job.short_description =
          req.body.short_description || job.short_description;
        job.long_description =
          req.body.long_description || job.long_description;
        job.apply_url = req.body.apply_url || job.apply_url;
      }
    } else {
      jobFound;
    }
  });
  res.json(
    jobFound
      ? { message: 'job updated successfully' }
      : { message: 'job not found' }
  );
});

// create a new job
jobsRoute.post(
  '/',
  body('job_title').isLength({ min: 5 }),
  body('salary').not().isEmpty(),
  body('short_description').isLength({ min: 10 }),
  body('apply_url').not().isEmpty(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // generate random id
    req.body._id = Math.random().toString(36).substring(2, 36);
    const date = new Date();
    req.body.posted_at = new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    })
      .format(date)
      .split(' ')
      .join('-');
    jobs.push(req.body);
    res.json({ job: req.body, message: 'job created successfully' });
  }
);

// delete job by id
jobsRoute.delete('/:id', function (req, res, next) {
  let jobFound = false;
  jobs = jobs.filter(function (job) {
    job._id == req.params.id ? (jobFound = true) : jobFound;
    return job._id != req.params.id;
  });
  res.json(
    jobFound
      ? { message: 'job deleted successfully' }
      : { message: 'job not found' }
  );
});

module.exports = { jobsRoute };
