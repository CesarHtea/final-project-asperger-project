
import React, { Component } from 'react';
import request from 'superagent';

import ElementoIndividual from './ElementoIndividual'

const API_URL = `http://192.168:3000`

class AllElementsFromAPI extends Component {
  
  constructor() {
    super();

    this.state = {
      talentos: []
    };
  }

  componentDidMount() {
    request
      .get(`${API_URL}/api/talentos`)
      .then((data) => {
        this.setState({
          talentos: data.body
        })
      })
      .catch(function(e){
        console.log(e)
      })
  };

  deleteElement = elementId => {
    
    console.log(elementId)

    request
      .delete(`${API_URL}/api/talentos/${elementId}`)
      .then(() => {
        console.log('registro eliminado')
      });

    request
      .get(`${API_URL}/api/talentos`)
      .then((data) => {
          this.setState({
            talentos: data.body 
          })
      })

      .catch(function(e){
        console.log(e)
      })
  }

  render() {
    return (
      <div>
        <h1>ALL ELEMENTS</h1>
        <table className='table'>
          <thead>
            <tr>
              <td>Id</td>
              <td>Talento 1</td>
              <td>Talento 2</td>
              <td>UserID</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.talentos.slice(0).reverse().map((element) => {
              return  <ElementoIndividual info={element} fn={this.deleteElement}/>
            })}
          </tbody>
        </table>
      </div>
    )
  }

}

export default AllElementsFromAPI;