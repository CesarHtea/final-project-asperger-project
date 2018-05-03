const { Model } = require('objection')

class Personas extends Model {
  static get tableName() {
    return 'personas'
  }
}

module.exports = Personas