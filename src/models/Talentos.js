
const { Model } = require('objection')

class Talentos extends Model {
  static get tableName() {
    return 'talentos'
  }
}

module.exports = Talentos