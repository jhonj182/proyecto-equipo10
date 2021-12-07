import React, { Fragment, useState } from "react";
import clienteAxios from '../config/axios';

const Table = ( props ) => {
  const {user} = props.user;
  console.log(user.id)
  const [vehiculo, saveVehiculo] = useState({
    id: 0,
    marca: '',
    placa: '',
    modelo: 0,
    idUsuario: 0
  });
  const actualizarState = event =>{
    saveVehiculo({
      ...vehiculo,
      [event.target.name]: event.target.value 
    })
    console.log(vehiculo);
  }
  const getIdVehiculo = () => {
    clienteAxios.get('/vehiculos')
    .then(response => {
      console.log(response.data.length)
    })
    .catch(error =>{
      console.log(error);
      alert("error vehiculo no registrado con éxito ");
    })
  }
  
  const registrarVehiculo = (event)=>{
    event.preventDefault();
    let idNuevo = getIdVehiculo()+1;
    clienteAxios.post('/vehiculos', { id: idNuevo, marca: vehiculo.marca, modelo: vehiculo.modelo, placa: vehiculo.placa, idUsuario: user.id })
    .then(response => {
      console.log(response)
      alert("vehiculo registrado con éxito ");
      window.location = '/car-list';
    })
    .catch(error =>{
      console.log(error);
      alert("error vehiculo no registrado con éxito ");
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
              Registro de Vehículo
            </h1>
            <form 
            onSubmit={registrarVehiculo}
            className="row g-3 text-light">
              <div className="col-sm-12">
                <label htmlFor="name" className="form-label">
                  Placa
                </label>
                <input
                  type="text"
                  className="form-control js-name"
                  id="name"
                  name="name"
                  placeholder="AAA000"
                  style={{ textTransform: "uppercase" }}
                  onKeyUp = {actualizarState}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="inputState" className="form-label">
                  Marca del Vehículo
                </label>
                <input
                  className="form-control js-name"
                  type="text"
                  name ="marca"
                  onKeyUp = {actualizarState}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="modelo" className="form-label">
                  Modelo
                </label>
                <input
                  className="form-control js-name"
                  type="number"
                  min={1900}
                  max={2099}
                  step={1}
                  defaultValue={2021}
                  name = 'modelo'
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
                  defaultValue="Registrar Vehículo"
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
