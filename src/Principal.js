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
import { DGeo } from './DGeo';
import { PDatos } from './PDatos';



class Principal extends Component {

  constructor(props) {
    super(props);
      this.state={
        datos:{
              nombre: ''
              ,email: ''
              ,telefono: ''
              ,fecha: null
              ,cordenadas: this.props.cordenadas
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

    let name = this.state.datos.nombre;
    let tef = this.state.datos.telefono;
    let em = this.state.datos.email;
    let fec = this.state.datos.fecha;
    let cor = this.state.datos.cordenadas;
    let expreg = /^[+]?[#]?[(]?[\d]{2}?[)]??[-]?[\d]{2}?[-]?[\d]{2}?[-]?[\d]{2}?[-]?[\d]{2}$/;

    if(!nombre || !email || !telefono ||!fecha){
      {this.diabledB()}
    }if(expreg.test(tef) && validator.isEmail(em)){
      console.log("Correctos");
      console.log("cor", cor);
      {this.enabledB()}
      Swal.fire(
        '¡Exito!',
        'Los datos fueron guardados',
        'success'
      ).then(function() {
        window.location.href = `/PDatos/ ${name}/ ${em}/ ${tef}/ ${fec}/ ${cor}`;
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
        <div className="box">

        <form className="body-modal" name="formulario"
        
            onSubmit = {
              e => {                                                
              e.preventDefault();

              const { 
                  nombre
                  ,email
                  ,telefono
                  ,fecha
              } = this.state.datos;

              console.log("Fecha: ",this.state.datos.nombre);
            }}>  

                <label>{campoObligatorio}Nombre: </label>
                <input type="text"
                    className="form-control dw50p" 
                    placeholder="Nombre"
                    onChange={e => {
                      this.setState({
                          datos:{
                              ...this.state.datos,
                              nombre: e.target.value
                          }
                      })
                  }}
                />
                <label>{campoObligatorio}Correo Electronico: </label>
                <input type="text"
                    className="form-control dw50p" 
                    placeholder="Correo Electronico"
                    onChange={e =>  {
                      this.setState({
                          datos:{
                              ...this.state.datos,
                              email: e.target.value
                          }
                      })
                  }}
                />
                <label>{campoObligatorio}Telefono: </label>
                <input
                    ref='mobileNo'
                    keyboardType='numeric'
                    type="text"
                    className="form-control dw50p" 
                    placeholder="Telefono"
                    onChange={e => {
                      this.setState({
                          datos:{
                              ...this.state.datos,
                              telefono: e.target.value
                          }
                      })
                  }}
                />
                <label>{campoObligatorio}Fecha: </label>
                <DatePicker
                    selected={this.state.datos.fecha}
                    dateFormat="dd-MMM-yyyy"
                    locale={es}
                    className="form-control fecha-get width-datepicker" 
                    placeholderText="Fecha"
                    onChange={this.seleccionarFecha}
                />
                <DGeo>
                  {this.props.cordenadas}
                </DGeo>
                <button type="submit" 
                      id="bHab"
                      onClick={this.validarForm}
                      className="btn">
                      Enviar
                </button>       
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Principal;
