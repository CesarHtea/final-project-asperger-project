import React, { Component } from 'react'
import request from 'superagent'

import { withRouter } from 'react-router-dom'

const API_URL = 'http://localhost:3000'

class Detail extends Component {
  constructor() {
    super()

    this.state = {
      id: '',
      talento1: '',
      talento2: '',
      userId: ''
    }
  }

  componentDidMount() {
    request
      .get(`${API_URL}/api/talentos/${this.props.match.params.talentosId}`)
      .then((data) => {
        this.setState({
          id: data.body.id,
          talento1: data.body.talento1,
          talento2: data.body.talento2,
          userId: data.body.userId
        })
      })
      .catch(function(e) {
        console.log(e)
      })
  }

  updateQuote(e) {

        console.log('#############')
        console.log(this)
        console.log('#############')

    e.preventDefault()

    const newTalent1 = e.target.updateTalent1.value
    const newTalent2 = e.target.updateTalent2.value
    const newUserId = e.target.updateUserId.value

    request
      .put(`${API_URL}/api/talentos/${this.props.match.params.talentosId}`)
      .send({
        talento1: newTalent1,
        talento2: newTalent2,
        userId: newUserId
      })
      .then((data) => {

        alert('Elemento actualizado.')

        this.props.history.push('/')

      })
      .catch(function(e) {
        console.log(e)
      })
  }

  render() {
    console.log('------- props match params elementId')
    console.log(this.props.match.params.talentosId)
    return (
      <div>
        <h1>Elemento: { this.state.id }</h1>
        <h5>Talento 1: { this.state.talento1 }</h5>
        <h5>Talento 2: { this.state.talento2 }</h5>
        <h5>User Id: { this.state.userId }</h5>

        <form onSubmit={ this.updateQuote }>
          <h2>Edit Elemento: </h2>

          <div>
            <label>Talento 1: </label>
            <input type='text' name='updateTalent1' />
          </div>
          <div>
            <label>Talento 2: </label>
            <input type='text' name='updateTalent2' />
          </div>
          <div>
            <label>User Id: </label>
            <input type='text' name='updateUserId' />
          </div>

          <button type='submit'>Actualizar elemento</button>

        </form>
      </div>
    )
  }
}

// Para factorizar las partes del codigo que se repiten, podria quedar asi:
// ...
// .deleteQuote()
// .getAllQuote()
// .then()
// .catch()
// ...

export default withRouter(Detail)