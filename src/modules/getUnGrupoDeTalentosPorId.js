const Talentos = require('../models/Talentos')

const getUnGrupoDeTalentosPorId = function getUnGrupoDeTalentosPorId(req, res) {
  const id = parseInt(req.params.id)
  Talentos
    .query()
    .findById(id)
    .then(function(grupoTalentos) {
      res.json(grupoTalentos).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })
  }

module.exports = getUnGrupoDeTalentosPorId