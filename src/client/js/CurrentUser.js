import React, { Component } from 'react';
import request from 'superagent';

import UserIndividual from './UserIndividual'

const API_URL = 'http://localhost:3000'

class CurrentUser extends Component {
  
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
        console.log('##########')
        console.log([...data.body])
        console.log('##########')
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
        <h1>CURRENT USERS</h1>
        <table className='table'>
           <thead>
             <tr>
               <td></td>
             </tr>
           </thead>
           <tbody>
             {this.state.users.map((user, index) => {
               return <UserIndividual key={index} info={user} />
             })}
           </tbody>
         </table>
      </div>
    )
  }

}

export default CurrentUser;

