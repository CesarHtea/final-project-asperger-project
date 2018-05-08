const Router = require('express').Router
const apiRouter = Router()

const {
  getRegisteredUsers,
  getTalentos,
  getUnGrupoDeTalentosPorId,
  createNewGrupoDeTalentos,
  updateUnGrupoDeTalentos,
  deleteUnGrupoDeTalentos
} = require('../modules/talentosTableCRUDfns')

const {
  getAllAnswersCuestionarioAQ
} = require('../modules/cuestionarioAQTableCRUDfns')

const isUserAuthenticated = require('../modules/isUserAuthenticated')

apiRouter
  .get('/talentos', getTalentos)
  .get('/talentos/:id', getUnGrupoDeTalentosPorId)
  .post('/talentos', isUserAuthenticated, createNewGrupoDeTalentos)
  .put('/talentos/:id', isUserAuthenticated, updateUnGrupoDeTalentos)
  .delete('/talentos/:id', isUserAuthenticated, deleteUnGrupoDeTalentos)

apiRouter
  .get('/allAnswersCuestionarioAQ', getAllAnswersCuestionarioAQ)

// apiRouter
//   .get('/registeredUsers', getRegisteredUsers)

module.exports = apiRouter
