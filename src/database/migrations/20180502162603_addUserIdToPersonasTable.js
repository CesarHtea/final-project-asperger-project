
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('personas', function(t) {
      t
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('user')
    })
  
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('personas', function(t) {
      t
        .dropForeign('userId')
        .dropColumns('userId')
    })  
};