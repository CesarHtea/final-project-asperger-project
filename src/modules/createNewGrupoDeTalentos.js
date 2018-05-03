const Talentos = require('../models/Talentos')

const createNewGrupoDeTalentos = function createNewGrupoDeTalentos(req, res) {

  Talentos
    .query()
    .insert(req.body)
    .then(function(newGrupoDeTalentos) {
      res.json(newGrupoDeTalentos).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })
}

module.exports = createNewGrupoDeTalentos