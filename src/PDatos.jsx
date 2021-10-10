
import './App.css';
import React, {Component, Fragment } from 'react';
import Swal from 'sweetalert2';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Toast } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import es from 'date-fns/locale/es';
import validator from 'validator'
import {Link, useHistory } from "react-router-dom";
import { Route, Redirect } from 'react-router'
import Moment from 'react-moment';

import moment from 'moment';



class PDatos extends Component {

  constructor(props) {
    super(props);
      this.state={
        datos:{
              nombre: ''
              ,email: ''
              ,telefono: ''
              ,fecha: null
      }
    }
  }

  seleccionarFecha = date => {
    let FechaD = moment(date).format("DD-MM-YYYY");
    this.setState({
        datos:{
            ...this.state.datos,
            fecha: date
        }
    });
  } 

  dVacios = () => {
    const {  nombre,email,telefono, fecha }= this.state.datos;
    const noValido = !nombre || !email || !telefono ||!fecha;
  }
  enabledB = () => {
    document.getElementById("bHab").disabled = false;
  }
  diabledB = () => {
    document.getElementById("bHab").disabled = true;
  }

  validarForm = () => {     
    const {  nombre,email,telefono, fecha }= this.state.datos;
    const noValido = !nombre || !email || !telefono ||!fecha;

    let tef = this.state.datos.telefono;
    let em = this.state.datos.email;
    let expreg = /^[+]?[#]?[(]?[\d]{2}?[)]??[-]?[\d]{2}?[-]?[\d]{2}?[-]?[\d]{2}?[-]?[\d]{2}$/;

    if(!nombre || !email || !telefono ||!fecha){
      {this.diabledB()}
    }if(expreg.test(tef) && validator.isEmail(em)){
      console.log("Correctos");
      {this.enabledB()}
      Swal.fire(
        '¡Exito!',
        'Los datos fueron guardados',
        'success'
      ).then(function() {
        window.location.href = "/Pdatos";
      });
    }else{
      console.log("Incorrectos");
      {this.diabledB()}
      Swal.fire(
        'Se encontraron los siguientes errores en sus datos de contacto:',
        'Faltan Datos',
        'Por favor corriga los errores para continuar'
      ).then(function() {
          window.location.href = "/";
      });
      }
    return noValido;
  }

  render() {  
    let campoObligatorio = <label className="CampoObligatorio mr-md-1">* </label>  
    return (
      <Fragment>
        <div className="rectangulo" name="figura">
          <label className="texto">Green Leaves</label>
        </div>
        <div className="boxR">
            <label>Estimado ,</label>
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
