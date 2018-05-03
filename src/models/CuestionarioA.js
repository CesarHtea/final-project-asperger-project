const { Model } = require('objection')

class Cuestionario extends Model {
  static get tableName() {
    return 'cuestionarioA'
  }
}

module.exports = Cuestionario