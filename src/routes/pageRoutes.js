const Router = require('express').Router;
const pageRouter = Router()

pageRouter.get('/', (req, res) => {
  res.render('reactApp.ejs')
})

pageRouter.get('/about', (req, res) => {
  res.render('about.ejs')
})

module.exports = pageRouter
