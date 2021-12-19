import React, { Fragment, useState, useEffect } from "react";
import clienteAxios from '../config/axios';

const Table = () => {
  const [usuario, saveUsuario] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    documento: '',
    telefono: '',
    password: '',
    tipo: '',

  });
  const actualizarState = event =>{
    saveUsuario({
      ...usuario,
      [event.target.name]: event.target.value 
    })
    console.log(usuario);
  }
  const registrarUsuario = (event)=>{
    event.preventDefault();
    clienteAxios.post('/usuarios', { nombre: usuario.nombre, apellidos: usuario.apellidos, email: usuario.email, documento: usuario.documento, telefono: usuario.telefono, password: usuario.password, tipo:usuario.tipo })
    .then(response => {
      console.log(response)
      alert(response);
      localStorage.setItem('user', JSON.stringify(usuario));
      window.location = '/charge-account';
    })
    .catch(error =>{
      console.log(error);
      alert("error usuario no registrado con éxito ");
    })
  }
  return (
    <Fragment>
      <section className="container-fluid contenedor ">
        <div className="w-70 h-1000 ">
          <div className="col-lg-6  center-form d-flex flex-column align-items-center justify-content-center">
            <h1
              className="mt-5 mb-5 text-light"
            >
              Registro de Usuario
            </h1>
            <form className="row g-3 text-light" onSubmit={registrarUsuario}>
              <div className="col-sm-12">
                <label htmlFor="name" className="form-label">
                  Nombres
                </label>
                <input
                  type="text"
                  className="form-control js-name"
                  id="name"
                  name="nombre"
                  style={{ textTransform: "uppercase" }}
                  onKeyUp = {actualizarState}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="apellido" className="form-label">
                  Apellidos
                </label>
                <input
                  type="text"
                  className="form-control js-name"
                  id="name"
                  name="apellidos"
                  style={{ textTransform: "uppercase" }}
                  onKeyUp = {actualizarState}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="name" className="form-label">
                  Documento
                </label>
                <input
                  type="text"
                  className="form-control js-name"
                  id="name"
                  name="documento"
                  style={{ textTransform: "uppercase" }}
                  onKeyUp = {actualizarState}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="name" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="text"
                  className="form-control js-name"
                  id="name"
                  name="email"
                  style={{ textTransform: "uppercase" }}
                  onKeyUp = {actualizarState}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="inputState" className="form-label">
                  Celular
                </label>
                <input
                  className="form-control js-name"
                  type="text"
                  name="telefono"
                  onKeyUp = {actualizarState}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="modelo" className="form-label">
                  Contraseña
                </label>
                <input
                  className="form-control js-name"
                  type="password"
                  name ="password"
                  onKeyUp = {actualizarState}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="modelo" className="form-label">
                  Repetir Contraseña
                </label>
                <input
                  className="form-control js-name"
                  type="password"
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    He leido y acepto los{" "}
                    <a href="/" className="terminos link-light">
                      Términos y Condiciones de Registro de Vehículos
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-12">
                <input
                  type="submit"
                  className="btn btn-dark"
                  Value="Enviar"
                  
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Table;
