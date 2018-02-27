const express = require('express');
const db = require('../database/index');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('reviews home');
});

router.get('/allReviews', (req, res) => {
  console.log('fetching reviews!');
  db.fetchReviews(3, (reviews) => {
    res.send(reviews);
  });
});

module.exports = router;
