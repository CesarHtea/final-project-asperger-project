import React, { Component } from 'react'
import request from 'superagent'

const API_URL = 'http://localhost:3000'

class NewUserSignIn extends Component {

  createNewUser = (e) => {
    e.preventDefault()

    const newUserData = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    request
      .post(`${API_URL}/auth/register`)
      .send(newUserData)
      .then(response => {
        console.log(response.body)
        alert('Nuevo usuario registrado.')

        this.props.history.push('/registeredUsers')
        
      })
      .catch(function(e) {
        console.log(e)
      })
  }

  render() {
  	return (
      <div>

        <h3>Crear Nuevo Usuario</h3>

        <form className='form' onSubmit={ (e) => { this.createNewUser(e) } }>
          <div>
            <label>email</label>
            <input type='text' name='email' /> 
          </div>
          <div>
            <label>password</label>
            <input type='text' name='password' />
          </div>
          <button>Sign In</button>
        </form>

      </div>
  	)
  }
}

export default NewUserSignIn;