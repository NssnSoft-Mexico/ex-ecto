
import './App.css';
import React, {Component, Fragment } from 'react';
import "react-datepicker/dist/react-datepicker.css";

class PDatos extends Component {
  constructor(props) {
    super(props);
      this.state={
        registro:{
              nombre: ''
              ,email: ''
              ,telefono: ''
              ,fecha: null
      }
    }
    const { match: {params}} = this.props;
    console.log("TEST",params.nombre)
  }

  render() {  
    let campoObligatorio = <label className="CampoObligatorio mr-md-1">* </label>  
    return (
      <Fragment>
        <div className="rectangulo" name="figura">
          <label className="texto">Green Leaves</label>
        </div>
        <div className="boxR">
            <label>Estimado {this.state.registro.nombre},</label>
            <br></br>
            <label>Hemos recibido sus datos y nos pondremoso en contacto con usted a la brevedad posible. Enviaremos</label><br></br>
            <label>un correo con información a su cuenta: </label>
        </div>
        <div>
            <label><strong>Atte.</strong></label><br></br>
            <label><strong>Green Leaves</strong></label>
            <label></label>
        </div>
      </Fragment>
    );
  }
}

export default PDatos;
