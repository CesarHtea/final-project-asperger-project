const { Model } = require('objection')

class RegisteredUsers extends Model {
  static get tableName() {
    return 'user'
  }
}

module.exports = RegisteredUsers;