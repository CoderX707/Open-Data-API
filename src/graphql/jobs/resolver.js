const { paginate } = require('../../helper/pagination');
const { jobs_mock_data } = require('../../helper/read_mock_data');

// get file data to javascript object
let jobs = jobs_mock_data();

// Root resolver
const jobsResolver = {
  // query callback
  jobs: () => {
    return jobs;
  },

  job({ id }) {
    return jobs.find((job) => job._id == id);
  },
  
  jobsByPaginate({ per_page, page_number }) {
    const jobsWithPagination = paginate(jobs, per_page, page_number);
    return jobsWithPagination;
  },

  // mutation callback
  createJob: ({
    job_title,
    posted_at,
    thumbnail,
    apply_url,
    salary,
    short_description,
    long_description
  }) => {
    let job = {};
    job._id = Math.random().toString(36).substring(2, 36);
    job.job_title = job_title;
    job.posted_at = posted_at;
    job.apply_url = apply_url;
    job.thumbnail = thumbnail;
    job.salary = salary;
    job.short_description = short_description;
    job.long_description = long_description;
    jobs.push(job);
    return job;
  },

  updateJob: ({
    id,
    job_title,
    posted_at,
    thumbnail,
    apply_url,
    salary,
    short_description,
    long_description
  }) => {
    jobs.map(function (job) {
      if (job._id == id) {
        job.job_title = job_title || job.job_title;
        job.posted_at = posted_at || job.posted_at;
        job.thumbnail = thumbnail || job.thumbnail;
        job.apply_url = apply_url || job.apply_url;
        job.salary = salary || job.salary;
        job.short_description = short_description || job.short_description;
        job.long_description = long_description || job.long_description;
      }
    });
    return jobs.find((job) => job._id == id);
  },

  deleteJob: ({ id }) => {
    let deletedjob = jobs.find((job) => job._id == id);
    jobs = jobs.filter(function (job) {
      return job._id != id;
    });
    return deletedjob;
  },
};

module.exports = { jobsResolver };
