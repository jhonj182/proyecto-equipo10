import React, { Fragment, useState } from "react";
import clienteAxios from '../config/axios';

const EditarUsuario = (props) => {
  const { user } = props;
  const { id, nombres, apellidos, documento, usuario, celular, password, avatar, rol } = user;
  const [usu, updateUser] = useState({
    id: id,
    nombres: nombres, 
    apellidos: apellidos,
    celular: celular,
    documento: documento,
    password: password,
    usuario: usuario,
    rol: rol,
    avatar: avatar
  });
  const actualizarUsu= event =>{
    updateUser({
      ...usu,
      [event.target.name]: event.target.value 
    })
  }
  const actualizarUsuario = (event) =>{
    clienteAxios.put(`/users/${id}`, usu)
    .then(response => {
      console.log(response)
      alert("usuario actualizado con éxito ");
      window.location = '/dashboard';
    })
    .catch(error =>{
      console.log(error);
      alert("error vehiculo no registrado con éxito ");
    })
    event.preventDefault();
    console.log(usu)
  }
  return (
    <Fragment>
      <section className="container-fluid contenedor ">
        <div className="w-70 h-1000 ">
          <div className="col-lg-6  center-form d-flex flex-column align-items-center justify-content-center">
            <h1
              className="mt-5 mb-5 text-light"
            >
              Editar Perfil
            </h1>
            <form 
            className="row g-3 text-light"
            onSubmit={actualizarUsuario}
            >
              <div className="col-sm-12">
                <label htmlFor="name" className="form-label">
                  Nombres
                </label>
                <input
                  onChange = {actualizarUsu} 
                  type="text"
                  className="form-control js-name"
                  id="name"
                  name="nombres"
                  placeholder={nombres}
                  style={{ textTransform: "capitalize" }}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="lastname" className="form-label">
                  Apellidos
                </label>
                <input
                  onChange = {actualizarUsu}  
                  type="text"
                  className="form-control js-name"
                  id="lastname"
                  name="apellidos"
                  placeholder={apellidos}
                  style={{ textTransform: "capitalize" }}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="name" className="form-label">
                  Documento
                </label>
                <input
                  onChange = {actualizarUsu}  
                  type="text"
                  className="form-control js-name"
                  id="documento"
                  name="documento"
                  disabled
                  placeholder={documento}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="name" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  onChange = {actualizarUsu} 
                  type="text"
                  className="form-control js-name"
                  id="usuario"
                  name="usuario"
                  placeholder = {usuario}
                  disabled
                  style={{ textTransform: "lowercase" }}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="inputState" className="form-label">
                  Celular
                </label>
                <input
                  onChange = {actualizarUsu} 
                  type="text"
                  className="form-control js-name"
                  id="celular"
                  name="celular"
                  placeholder = {celular}
                />
              </div>
              <div className="col-sm-12">
              <label htmlFor="modelo" className="form-label">
                  Ingrese su contraseña para verificar la información
                </label><br/>
                <label htmlFor="modelo" className="form-label">
                  Contraseña
                </label>
                <input
                  className="form-control js-name"
                  type="password"
                />
              </div>
              <div className="col-12 d-grid gap-1">
                <button
                  type="submit"
                  className="btn btn-dark"
                  defaultValue="Guardar Información">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default EditarUsuario;
