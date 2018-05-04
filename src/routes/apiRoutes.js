const Router = require('express').Router
const apiRouter = Router()

const {
  getTalentos,
  getUnGrupoDeTalentosPorId,
  createNewGrupoDeTalentos,
  updateUnGrupoDeTalentos,
  deleteUnGrupoDeTalentos
} = require('../modules/talentosTableCRUDfns.js')

const isUserAuthenticated = require('../modules/isUserAuthenticated')

apiRouter
  .get('/talentos', getTalentos)
  .get('/talentos/:id', getUnGrupoDeTalentosPorId)
  .post('/talentos', isUserAuthenticated, createNewGrupoDeTalentos)
  .put('/talentos/:id', isUserAuthenticated, updateUnGrupoDeTalentos)
  // .delete('/talentos/:id', isUserAuthenticated, deleteUnGrupoDeTalentos)
  .delete('/talentos/:id', deleteUnGrupoDeTalentos)

module.exports = apiRouter
