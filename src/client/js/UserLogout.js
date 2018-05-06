import React, { Component } from 'react';
import request from 'superagent';

const API_URL = 'http://localhost:3000'

class UserLogout extends Component {

  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    request
      .get(`${API_URL}/auth/current`)
      .then((data) => {
        this.setState({
          users: data.body
        })
      })
      .catch(function(e){
        console.log(e)
      })
  };

  logout = (e) => {

    request
      .get(`${API_URL}/auth/logout`)
      .then((response) => {
        console.log([...response.body])
        this.props.history.push('/') 
      })
      .catch(function(e){
        console.log(e)
      })

  } 

  render() {
  	return (
      <div>
        <h3>Logout</h3>
        <p>Actual user: {this.state.users.email}</p>
        <button onClick={ (e) => { this.logout(e) } }>Logout</button>
      </div>
  	)
  }

}

export default UserLogout;