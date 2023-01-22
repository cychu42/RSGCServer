const express = require('express');
const { hostname } = require('os');
const { version, author } = require('../../package.json');

const router = express.Router();

//first health check route to see that everything's working alright
router.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');

  const body = {
    status: 'ok',
    authors: author,
    version: version,
    hostname: hostname(),
  };

  res.status(200).json({ ...body });
});

module.exports = router;
