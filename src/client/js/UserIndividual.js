import React, { Component } from 'react'

class UserIndividual extends Component {
  render() {
  	const { info } = this.props

  	return (
  	  <tr>
	    <td>{ info.email }</td>
      </tr>
  	)
  }
}

export default UserIndividual;