
import React, { Component } from 'react';
import request from 'superagent';

import ElementoIndividual from './ElementoIndividual'

const API_URL = 'http://localhost:3000'

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
        // console.log('++++++++++++')
        // console.log(this)
        // console.log('++++++++++++')
        this.setState({
          talentos: data.body
        })
      })
      .catch(function(e){
        console.log(e)
      })
  };

  deleteElement(elementId) {
    
    console.log(elementId)

    request
      .delete(`${API_URL}/api/talentos/${elementId}`)
      .then(() => {
        console.log('registro eliminado')
      });

    request
      .get(`${API_URL}/api/talentos`)
      .then((data) => {
        console.log('###########')
        console.log(this)
        console.log(data.body)
        console.log('###########')
          this.setState({
            talentos: data.body 
          })
      })

      .catch(function(e){
        console.log(e)
      })
  }

  render() {
    console.log('----- state ------ ')
    console.log(this.state.talentos)
    return (
      <div>
        <h1>GET ALL ELEMENTS</h1>
        <h2>VER CONSOLA DEL NAVEGADOR</h2>
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
            {this.state.talentos.map((element) => {
              // console.log('------ elemento desde fn map en all elements -----')
              // console.log(element)
              return  <ElementoIndividual info={element} fn={this.deleteElement}/>
            })}
          </tbody>
        </table>
      </div>
    )
  }

}

export default AllElementsFromAPI;