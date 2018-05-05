import React, { Component } from 'react';
import request from 'superagent';

const API_URL = 'http://localhost:3000'

class UserLogin extends Component {

  login = (e) => {
    e.preventDefault()

    const userData = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    request
      .post(`${API_URL}/auth/login`)
      .send(userData)
      .then(response => {
        // console.log(response)
        alert(`Welcome ${response.body.email}`)
        this.props.history.push('/') 
      })
      .catch(function(e) {
        // console.log(e)
        alert("Sorry, try again or sign in")
      })
  } 

  render() {
  	return (
      <div>

        <h3>Login</h3>

        <form className='form' onSubmit={ (e) => { this.login(e) } }>
          <div>
            <label>email</label>
            <input type='text' name='email' /> 
          </div>
          <div>
            <label>password</label>
            <input type='text' name='password' />
          </div>
          <button>Login</button>
        </form>

      </div>
  	)
  }

}

export default UserLogin;