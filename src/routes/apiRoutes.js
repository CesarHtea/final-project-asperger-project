const Router = require('express').Router
const apiRouter = Router()

const getTalentos = require('../modules/getTalentos')
const getUnGrupoDeTalentosPorId = require('../modules/getUnGrupoDeTalentosPorId') 
const createNewGrupoDeTalentos = require('../modules/createNewGrupoDeTalentos')
const updateUnGrupoDeTalentos = require('../modules/updateUnGrupoDeTalentos')
const deleteUnGrupoDeTalentos = require('../modules/deleteUnGrupoDeTalentos')
const isUserAuthenticated = require('../modules/isUserAuthenticated')

apiRouter
  .get('/talentos', getTalentos)
  .get('/talentos/:id', getUnGrupoDeTalentosPorId)
  .post('/talentos', isUserAuthenticated, createNewGrupoDeTalentos)
  .put('/talentos/:id', isUserAuthenticated, updateUnGrupoDeTalentos)
  .delete('/talentos/:id', isUserAuthenticated, deleteUnGrupoDeTalentos)

module.exports = apiRouter
