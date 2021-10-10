
import './App.css';
import React, {Component, Fragment } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'react-moment';

import moment from 'moment';

class PDatos extends Component {
  
    state={
        registro:{
              nombre: this.props.match.params.nombre
              ,email: this.props.match.params.email
              ,telefono: this.props.match.params.telefono
              ,fecha: this.props.match.params.fecha
      }
    }
  

  render() {  
    const name = this.state.registro.nombre;
    const em = this.state.registro.email;
    const tef = this.state.registro.telefono;
    const fech = this.state.registro.fecha;
    const time = moment(fech).format('DD-MMM-yyyy');
    console.log("s", time);
    return (
      <Fragment>
        <div className="rectangulo" name="figura">
          <label className="texto">Green Leaves</label>
        </div>
        <div className="boxR">
            <label>Estimado: <strong>{name}</strong>,</label>
            <br></br>
            <label>Hemos recibido sus datos y nos pondremoso en contacto con usted a la brevedad posible. Enviaremos</label><br></br>
            <label>un correo con información a su cuenta: <a href="email:">{em}</a></label>
            <div className="end">
              <br></br>
              <label><strong>Atte.</strong></label><br></br>
              <label><strong>Green Leaves</strong></label><br></br>
              <label>{time}</label>
              <label></label>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default PDatos;
