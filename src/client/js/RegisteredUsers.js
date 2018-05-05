import React, { Component } from 'react';
import request from 'superagent';

import UserIndividual from './UserIndividual'

const API_URL = 'http://localhost:3000'

class AllRegisteredUsers extends Component {
  
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    request
      .get(`${API_URL}/api/registeredUsers`)
      .then((data) => {
        this.setState({
          users: [...data.body]
        })
      })
      .catch(function(e){
        console.log(e)
      })
  };

  render() {
    return (
      <div>
        <h1>REGISTERED USERS</h1>
        <table className='table'>
          <thead>
            <tr>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.users.slice(0).reverse().map((user, index) => {
              return  <UserIndividual key={index} info={user} />
            })}
          </tbody>
        </table>
      </div>
    )
  }

}

export default AllRegisteredUsers;