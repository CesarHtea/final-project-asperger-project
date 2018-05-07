import React, { Component } from 'react';
import request from 'superagent';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
        // alert(`Welcome ${response.body.email}`)
        this.props.fnActualizarStatePorUserLogin()
        // this.props.history.push('/') 
      })
      .catch(function(e) {
        console.log(e)
        alert("Sorry, try again or sign in")
      })
  } 

  render() {
    return (
      <div className='grid'>
        <Paper className='login-material-ui-paper' zDepth={5} >
          <div className='login-form-container'>       
            <h2 className='login-title'>Log In</h2>
            
            <form className='form' onSubmit={ (e) => { this.login(e) } }>
              <div>
                <TextField
                  hintText='Your user (email)'
                  floatingLabelText='Your user (email)'
                  type='text'
                  name='email'
                />
              </div>
              <div>
                <TextField
                  hintText='Password'
                  floatingLabelText='Password'
                  type='password'
                  name='password'
                />
              </div>
                <RaisedButton
                  className='login-button'
                  label='Login'
                  type='submit'
                />
            </form>
          </div>
        </Paper>
       </div>
  	)
  }

}

export default UserLogin;