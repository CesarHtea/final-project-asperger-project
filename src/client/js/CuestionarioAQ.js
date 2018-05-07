import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class CuestionarioAQ extends Component {
 
  

  constructor() {
      super()

      this.state = {
      	pregunta1: { valor: 0, botonAColor: '', botonBColor: '', botonCColor: '', botonDColor: '' },
        pregunta2: { valor: 0, botonAColor: '', botonBColor: '', botonCColor: '', botonDColor: '' },
        sumaTotal: 0
      }  
  }

  pregunta1botonA = () => { this.setState({ pregunta1: { valor: 1, botonAColor: true, botonBColor: false, botonCColor: false, botonDColor: false } }) }
  pregunta1botonB = () => { this.setState({ pregunta1: { valor: 2, botonAColor: false, botonBColor: true, botonCColor: false, botonDColor: false } }) }
  pregunta1botonC = () => { this.setState({ pregunta1: { valor: 3, botonAColor: false, botonBColor: false, botonCColor: true, botonDColor: false } }) }
  pregunta1botonD = () => { this.setState({ pregunta1: { valor: 4, botonAColor: false, botonBColor: false, botonCColor: false, botonDColor: true } }) }

  pregunta2botonA = () => { this.setState({ pregunta2: { valor: 10, botonAColor: true, botonBColor: false, botonCColor: false, botonDColor: false } }) }
  pregunta2botonB = () => { this.setState({ pregunta2: { valor: 20, botonAColor: false, botonBColor: true, botonCColor: false, botonDColor: false } }) }
  pregunta2botonC = () => { this.setState({ pregunta2: { valor: 30, botonAColor: false, botonBColor: false, botonCColor: true, botonDColor: false } }) }
  pregunta2botonD = () => { this.setState({ pregunta2: { valor: 40, botonAColor: false, botonBColor: false, botonCColor: false, botonDColor: true } }) }

  sumarYEnviarDatos = () => {
  	let sumaTotal = this.state.pregunta1.valor + this.state.pregunta2.valor
  	this.setState({
      sumaTotal: sumaTotal
    })
  }

  render() {
  	console.log(this.state)
    return (
	  <Paper className='aq-material-ui-paper' zDepth={5} > 
        <div className='aq-container'>
		    <h1>Coeficiente del espectro (AQ)</h1>

		    <p className='aq-text'>A continuación aparece una lista de afirmaciones. Por favor lea cada una de ellas cuidadosamente y seleccione qué tanto se identifica con cada situación, eligiendo la respuesta que corresponda. Responda todas las preguntas.</p>

		      <div className='pregunta-1 aq-box-1'>  
			    <p className='aq-question'>1. Prefiero hacer actividades con otras personas que hacerlas yo solo.</p>
				<div className='aq-box-2'>
		          <RaisedButton className='pregunta-1-boton-A aq-button' label='a. Coincido totalmente' primary={this.state.pregunta1.botonAColor === true ? true : false} onClick={this.pregunta1botonA} />
		          <RaisedButton className='pregunta-1-boton-B aq-button' label='b. Coincido parcialmente' primary={this.state.pregunta1.botonBColor === true ? true : false} onClick={this.pregunta1botonB} />
		          <RaisedButton className='pregunta-1-boton-C aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta1.botonCColor === true ? true : false} onClick={this.pregunta1botonC} />
		          <RaisedButton className='pregunta-1-boton-D aq-button' label='d. Totalmente en desacuerdo' primary={this.state.pregunta1.botonDColor === true ? true : false} onClick={this.pregunta1botonD} />
				</div>
			  </div>

		      <div className='pregunta-2 aq-box-1'>  
			    <p className='aq-question'>2. Sigo el mismo procedimiento una y otra vez para realizar actividades.</p>
				<div className='aq-box-2'>
		          <RaisedButton className='pregunta-2-boton-A aq-button' label='a. Coincido totalmente' primary={this.state.pregunta2.botonAColor === true ? true : false} onClick={this.pregunta2botonA} />
		          <RaisedButton className='pregunta-2-boton-B aq-button' label='b. Coincido parcialmente' primary={this.state.pregunta2.botonBColor === true ? true : false} onClick={this.pregunta2botonB} />
		          <RaisedButton className='pregunta-2-boton-C aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta2.botonCColor === true ? true : false} onClick={this.pregunta2botonC} />
		          <RaisedButton className='pregunta-2-boton-D aq-button' label='d. Totalmente en desacuerdo' primary={this.state.pregunta2.botonDColor === true ? true : false} onClick={this.pregunta2botonD} />
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
			        onClick={this.sumarYEnviarDatos}
			      />
                 </div>  
		       </Paper>
        </div>
	  </Paper> 
    )
  }
}

export default CuestionarioAQ;