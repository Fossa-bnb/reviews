
exports.up = function create(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('rooms', (table) => {
      table.increments('room_id');
    }),
    knex.schema.createTable('users', (table) => {
      table.increments('user_id');
      table.string('name');
      table.string('photo_url');
    }),
    knex.schema.createTable('reviews', (table) => {
      table.increments('review_id');
      table.integer('room_id');
      table.integer('accuracy');
      table.integer('communication');
      table.integer('cleanliness');
      table.integer('location');
      table.integer('check_in');
      table.integer('value');
      table.integer('user_id');
      table.text('text');
      table.date('date');
      table.foreign('room_id').references('rooms.room_id');
      table.foreign('user_id').references('users.user_id');
    }),
  ]);
};

exports.down = function drop(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('reviews'),
    knex.schema.dropTable('rooms'),
    knex.schema.dropTable('users'),
  ]);
};
