const { Model } = require('objection')

class CuestionarioAQ extends Model {
  static get tableName() {
    return 'cuestionarioAQ'
  }
}

module.exports = CuestionarioAQ