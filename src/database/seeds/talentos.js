const data = [{
  talento1: 'Perfeccionismo',
  talento2: 'Obsesion',
  userId: 1
}, {
  talento1: 'Pensamiento en imagenes',
  talento2: 'Obsesion',
  userId: 2
}, {
  talento1: 'Hipersinapsis',
  talento2: 'Tolerancia cero al error',
  userId: 1
}, {
  talento1: 'Observacion',
  talento2: 'Memoria',
  userId: 2
}, {
  talento1: 'Rigidez mental',
  talento2: 'Necedad',
  userId: 2
}, {
  talento1: 'Hipersensibilidad',
  talento2: 'Pensamiento Visual',
  userId: 1
}]

exports.seed = function(knex, Promise) {
  return knex('talentos').del()
    .then(function() {
      return knex('talentos')
        .insert(data)
    });
}