import React, { Component } from 'react';
import request from 'superagent';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const API_URL = 'http://localhost:3000'

class NewUserSignIn extends Component {

  createNewUser = (e) => {

    e.preventDefault()

    const newUserData = {
      email: e.target.signinEmail.value,
      password: e.target.signinPassword.value
    }

    request
      .post(`${API_URL}/auth/register`)
      .send(newUserData)
      .then(response => {
        alert('Nuevo usuario registrado. Intenta Log In')
      })
      .catch(function(e) {
        console.log(e)
      })
  }

  render() {
    return (
      <div className='grid'>
        <Paper className='login-material-ui-paper' zDepth={5} >
          <div className='login-form-container'>
            <h2 className='login-title'>Sign In</h2>
            <form className='form' onSubmit={ (e) => { this.createNewUser(e) } }>
              <div>
                <TextField
                  hintText='Your email'
                  floatingLabelText='Your email'
                  name='signinEmail'
                />
              </div>
              <div>
                <TextField
                  hintText='Password Field'
                  floatingLabelText='Password'
                  type='password'
                  name='signinPassword'
                />
              </div>
              <RaisedButton
                className='login-button'
                label="Signin"
                type='submit'
              />
            </form>
          </div>
        </Paper> 
      </div>
    )
  }

}

export default NewUserSignIn;