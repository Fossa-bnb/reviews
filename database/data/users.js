const faker = require('faker');

const users = [];

for (let x = 0; x < 500; x += 1) {
  users.push({
    user_id: x,
    name: faker.name.firstName(),
    photo_url: faker.image.avatar(),
  });
}

module.exports = users;
