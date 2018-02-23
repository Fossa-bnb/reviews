const usersData = require('../../../database/data/users');
const roomsData = require('../../../database/data/rooms');
const reviewsData = require('../../../database/data/reviews');


exports.seed = knex => knex('rooms').del()
  .then(() => knex('users').del())
  .then(() => knex('reviews').del())
  .then(() => knex('rooms').insert(roomsData))
  .then(() => knex('users').insert(usersData))
  .then(() => knex('reviews').insert(reviewsData));

