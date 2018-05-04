import React, { Component } from 'react'
import request from 'superagent'

const API_URL = 'http://localhost:3000'

class NewElement extends Component {

  createNewElement = (e) => {
    e.preventDefault()

    const elementData = {
      talento1: e.target.talento1.value,
      talento2: e.target.talento2.value,
      userId: e.target.userId.value
    }

    request
      .post(`${API_URL}/api/talentos`)
      .send(elementData)
      .then(() => {

        alert('Elemento creado.')

        this.props.history.push('/allElementsFromAPI')
        
      })
      .catch(function(e) {
        console.log(e)
      })
  }

  render() {
  	return (
      <div>

        <h3>Crear nuevo Elementos de Talentos</h3>

        <p>Para crear un nuevo elemento, debe ingresar un UserId existente</p>

        <form className='form' onSubmit={ (e) => { this.createNewElement(e) } }>
          <div>
            <label>UserId</label>
            <input type='text' name='userId' /> 
          </div>
          <div>
            <label>Talento 1</label>
            <input type='text' name='talento1' />
          </div>
          <div>
            <label>Talento 2</label>
            <input type='text' name='talento2' /> 
          </div>
          <button>Crear Elemento</button>
        </form>

      </div>
  	)
  }
}

export default NewElement;