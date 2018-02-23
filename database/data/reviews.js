const rooms = require('../data/rooms');
const users = require('../data/users');
const faker = require('faker');

const reviews = [];

const getRandomInt = max => Math.floor(Math.random() * max);

// generate random number of reviews for each room_id
rooms.forEach((room) => {
  const numberOfReviews = getRandomInt(50);
  for (let x = 0; x < numberOfReviews; x += 1) {
    const reviewLength = getRandomInt(15);
    reviews.push({
      accuracy: getRandomInt(5),
      room_id: room.room_id,
      user_id: users[getRandomInt(500)].user_id,
      communication: getRandomInt(5),
      cleanliness: getRandomInt(5),
      location: getRandomInt(5),
      check_in: getRandomInt(5),
      value: getRandomInt(5),
      text: faker.lorem.paragraph(reviewLength),
      date: faker.date.past(10),
    });
  }
});

module.exports = reviews;
