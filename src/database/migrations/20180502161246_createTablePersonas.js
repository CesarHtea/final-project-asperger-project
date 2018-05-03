
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('personas', function(t) {
    	t.increments();
    	t.string('nombre');
    	t.string('apellido');
    	t.string('sexo');
    	t.decimal('edad')
    }); 
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('personas')
  
};