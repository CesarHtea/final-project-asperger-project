const Talentos = require('../models/Talentos')

const getTalentos = function getTalentos(req, res) {
  Talentos
    .query()
    .then(function(data) {
      res.json(data)
    })
  }

module.exports = getTalentos