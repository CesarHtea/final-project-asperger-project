
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('talentos', function(t) {
      t.increments();
      t.string('talento1');
      t.string('talento2')
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('talentos')  
};