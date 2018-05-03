const Talentos = require('../models/Talentos')

const deleteUnGrupoDeTalentos = function deleteQuote(req, res) {

  const id = parseInt(req.params.id)

  Talentos
    .query()
    .deleteById(id)
    .then(function(rowsDeleted) {
      res.json({
        grupoDeTalentosDeleted: rowsDeleted
      }).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })
}


module.exports = deleteUnGrupoDeTalentos
