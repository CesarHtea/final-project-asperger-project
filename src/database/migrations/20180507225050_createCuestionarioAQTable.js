
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('cuestionarioAQ', function(t) {
      t.increments();
      t.string('fecha');
      t.integer('pregunta1');
      t.integer('pregunta2');
      t.integer('sumaTotal')
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('cuestionarioAQ')    
};