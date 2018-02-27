const knex = require('../config');

const fetchReviews = (roomId, callback) => {
  knex('reviews').where({
    room_id: roomId,
  }).select()
    .then((reviews) => {
      callback(reviews);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports.fetchReviews = fetchReviews;
