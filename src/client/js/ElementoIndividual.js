import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ElementoIndividual extends Component {
  render() {
  	const { info } = this.props

  	return (
  	  <tr>
  	      <td>
	        <Link to={'/talentos/' + info.id} >{info.id}. Ver detalle.</Link> 
	      </td>
	      <td>{ info.talento1 }</td>
	      <td>{ info.talento2 }</td>
	      <td>{ info.userId } </td>
	      <td>
	        <button onClick={ () => { this.props.fn(info.id) }  }>Delete</button>
	      </td>
      </tr>
  	)
  }
}

export default ElementoIndividual;