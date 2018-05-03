
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('cuestionarioA', function(t) {
      t.increments();
      t.decimal('pregunta1');
      t.decimal('pregunta2')
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('cuestionarioA')  
};
