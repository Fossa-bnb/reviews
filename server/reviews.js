const express = require('express');
const db = require('../database/index');

const router = express.Router();

router.get('/:roomId/reviews', (req, res) => {
  db.fetchReviews(req.params.roomId, (reviews) => {
    res.send(reviews);
  });
});

module.exports = router;
