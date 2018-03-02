const express = require('express');
const db = require('../database/index');
const moment = require('moment');

const router = express.Router();

const calculateRatingByCategory = (category, reviews) => {
  let ratingsSum = 0;
  reviews.forEach((review) => {
    ratingsSum += review[category];
  });
  return ratingsSum / reviews.length;
};

router.get('/:roomId/reviews', (req, res) => {
  db.fetchReviews(req.params.roomId, (reviews) => {
    const accuracyRating = calculateRatingByCategory('accuracy', reviews);
    const communicationRating = calculateRatingByCategory('communication', reviews);
    const cleanlinessRating = calculateRatingByCategory('cleanliness', reviews);
    const locationRating = calculateRatingByCategory('location', reviews);
    const checkInRating = calculateRatingByCategory('check_in', reviews);
    const valueRating = calculateRatingByCategory('value', reviews);
    const overallRating = ((accuracyRating + communicationRating + cleanlinessRating +
      locationRating + checkInRating + valueRating) / 6);
    const sanitizedReviews = reviews.map(review => ({
      reviewId: review.review_id,
      roomId: review.room_id,
      userId: review.user_id,
      userName: review.name,
      userPhoto: review.photo_url,
      text: review.text,
      date: moment(review.date).format('MMMM YYYY'),
    }));
    const reviewsData = {
      reviewsList: sanitizedReviews,
      ratings: {
        accuracy: accuracyRating,
        communication: communicationRating,
        cleanliness: cleanlinessRating,
        location: locationRating,
        checkIn: checkInRating,
        value: valueRating,
        overall: overallRating,
      },
    };
    res.send(reviewsData);
  });
});

module.exports = router;
