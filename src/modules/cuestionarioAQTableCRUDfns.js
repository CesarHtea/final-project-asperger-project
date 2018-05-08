const CuestionarioAQ = require('../models/CuestionarioAQ');

exports.getAllAnswersCuestionarioAQ = function getAllAnswers(req, res) {
  CuestionarioAQ
    .query()
    .then(function(data) {
      res.json(data)
    })
  }