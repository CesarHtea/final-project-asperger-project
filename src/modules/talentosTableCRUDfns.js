const Talentos = require('../models/Talentos');
const RegisteredUsers = require('../models/RegisteredUsers')

exports.getRegisteredUsers = function getTalentos(req, res) {
  RegisteredUsers
    .query()
    .select('email')
    .then(function(data) {
      res.json(data)
    })
  }

exports.getTalentos = function getTalentos(req, res) {
  Talentos
    .query()
    .then(function(data) {
      res.json(data)
    })
  }

exports.getUnGrupoDeTalentosPorId = function getUnGrupoDeTalentosPorId(req, res) {
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

  exports.createNewGrupoDeTalentos = function createNewGrupoDeTalentos(req, res) {

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

exports.updateUnGrupoDeTalentos = function updateUnGrupoDeTalentos(req, res) {
  
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

exports.deleteUnGrupoDeTalentos = function deleteQuote(req, res) {

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