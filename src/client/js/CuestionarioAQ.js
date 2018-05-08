import React, { Component } from 'react';
import request from 'superagent'

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const API_URL = 'http://localhost:3000'

class CuestionarioAQ extends Component {

  constructor() {
      super()

      this.state = {
        userId: 0,
      	pregunta1: { pregunta1opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta2: { pregunta1opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        sumaTotal: 0
      }  
  }

  componentDidMount() {
    request
      .get(`${API_URL}/auth/current`)
      .then((data) => {
        this.setState({
          userId: data.body.id
        })
      })
      .catch(function(e) {
        console.log(e)
      })
  };



  pregunta1botonA = () => { this.setState({ pregunta1: { pregunta1opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta1botonB = () => { this.setState({ pregunta1: { pregunta1opcionElegida: 2, valor: 2, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta1botonC = () => { this.setState({ pregunta1: { pregunta1opcionElegida: 3, valor: 3, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta1botonD = () => { this.setState({ pregunta1: { pregunta1opcionElegida: 4, valor: 4, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta2botonA = () => { this.setState({ pregunta2: { pregunta2opcionElegida: 1, valor: 10, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta2botonB = () => { this.setState({ pregunta2: { pregunta2opcionElegida: 2, valor: 20, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta2botonC = () => { this.setState({ pregunta2: { pregunta2opcionElegida: 3, valor: 30, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta2botonD = () => { this.setState({ pregunta2: { pregunta2opcionElegida: 4, valor: 40, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  sumarYEnviarDatoAState = () => {
  	
    let objetoParaExportarATablaCuestionarioAQ
    let sumaTotal
  	
  	sumaTotal = this.state.pregunta1.valor + this.state.pregunta2.valor
    
    objetoParaExportarATablaCuestionarioAQ = {
      userId: this.state.userId,
      pregunta1opcionElegida: this.state.pregunta1.pregunta1opcionElegida,
      pregunta2opcionElegida: this.state.pregunta2.pregunta2opcionElegida,
      sumaTotal: sumaTotal
    }

    console.log(objetoParaExportarATablaCuestionarioAQ)    
    
    this.props.history.push('/')
  }

  render() {
    return (
	  <Paper className='aq-material-ui-paper' zDepth={5} > 
        <div className='aq-container'>
		    <h1>Coeficiente del espectro (AQ)</h1>

		    <p className='aq-text'>A continuación aparece una lista de afirmaciones. Por favor lea cada una de ellas cuidadosamente y seleccione qué tanto se identifica con cada situación, eligiendo la respuesta que corresponda. Responda todas las preguntas.</p>

		      <div className='pregunta-1 aq-box-1'>  
			    <p className='aq-question'>1. Prefiero hacer actividades con otras personas que hacerlas yo solo.</p>
				<div className='aq-box-2'>
		          <RaisedButton className='pregunta-1-boton-A aq-button' label='a. Coincido totalmente' primary={this.state.pregunta1.botonASeleccionado === true ? true : false} onClick={this.pregunta1botonA} />
		          <RaisedButton className='pregunta-1-boton-B aq-button' label='b. Coincido parcialmente' primary={this.state.pregunta1.botonBSeleccionado === true ? true : false} onClick={this.pregunta1botonB} />
		          <RaisedButton className='pregunta-1-boton-C aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta1.botonCSeleccionado === true ? true : false} onClick={this.pregunta1botonC} />
		          <RaisedButton className='pregunta-1-boton-D aq-button' label='d. Totalmente en desacuerdo' primary={this.state.pregunta1.botonDSeleccionado === true ? true : false} onClick={this.pregunta1botonD} />
				</div>
			  </div>

		      <div className='pregunta-2 aq-box-1'>  
			    <p className='aq-question'>2. Sigo el mismo procedimiento una y otra vez para realizar actividades.</p>
				<div className='aq-box-2'>
		          <RaisedButton className='pregunta-2-boton-A aq-button' label='a. Coincido totalmente' primary={this.state.pregunta2.botonASeleccionado === true ? true : false} onClick={this.pregunta2botonA} />
		          <RaisedButton className='pregunta-2-boton-B aq-button' label='b. Coincido parcialmente' primary={this.state.pregunta2.botonBSeleccionado === true ? true : false} onClick={this.pregunta2botonB} />
		          <RaisedButton className='pregunta-2-boton-C aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta2.botonCSeleccionado === true ? true : false} onClick={this.pregunta2botonC} />
		          <RaisedButton className='pregunta-2-boton-D aq-button' label='d. Totalmente en desacuerdo' primary={this.state.pregunta2.botonDSeleccionado === true ? true : false} onClick={this.pregunta2botonD} />
				</div>
			  </div>
		      
		      <Paper className='aq-enviar-text-material-ui-paper' >
		        <div>
		          <p className='aq-text'>Si ya respondió todas las preguntas, por favor dé click en el siguiente botón para enviar sus respuestas</p>
		        </div>
		        <div>
			      <RaisedButton
			        className='header-button'
			        label="Enviar respuestas"
			        secondary={true}
			        onClick={this.sumarYEnviarDatoAState}
			      />
                 </div>  
		       </Paper>
        </div>
	  </Paper> 
    )
  }
}

export default CuestionarioAQ;