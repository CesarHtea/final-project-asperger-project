const Talentos = require('../models/Talentos')

const updateUnGrupoDeTalentos = function updateUnGrupoDeTalentos(req, res) {
  
  const id = parseInt(req.params.id)
  const newData = req.body

  Talentos
    .query()
    .updateAndFetchById(id, newData)
    .then(function(grupoDeTalentosUpdated) {
      res.json(grupoDeTalentosUpdated).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })
}

module.exports = updateUnGrupoDeTalentos