import React, { useState } from 'react';
import clienteAxios from '../config/axios'
import { FormatNumber } from '../config/functions'

const Fill = () => {
  const productoJson = localStorage.getItem('user');
  let usuarioLocal = (JSON.parse (productoJson));
  const { _id, password, email, saldo } = usuarioLocal;
  const [valor, saveValor] = useState(0);
  const actualizarState = event =>{
    saveValor( parseInt( event.target.value ) + parseInt(saldo) );
    console.log(valor)
  }
  const consultarUsuario = ()=>{
    clienteAxios.post('/login', { params: {email: email, password: password}})
    .then(response => {
      console.log(response)
      console.log(response.data)
      if(response.data){
        const respuesta=response.data;
        localStorage.setItem('user', JSON.stringify(respuesta));
        window.location = '/car-list/';
      }

    })
    .catch(error =>{
      console.log(error);
    })
  }
  const recargarCuenta = (event)=>{
    event.preventDefault();
    alert(_id)
    clienteAxios.put(`/recargar-usuarios/${_id}`, {params:{ cantidad : valor }})
    .then(response => {
      console.log(response)
      alert(response);
      consultarUsuario();
    })
    .catch(error =>{
      console.log(error);
      alert("No se pudo recargar ");
    })
  }
  return (
    <section className="container-fluid contenedor w-60 h-1000">
      { valor }
      <div className="col-lg-6 center-form center pb-5">

      <form onSubmit={recargarCuenta}>
      <label className="titulo fs-2 mb-2 mt-5 text-light">Recargar mi Cuenta</label>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label text-light">Monto</label>
        <input type="number" onChange= {actualizarState} className="form-control" name="valor" id="formGroupExampleInput" placeholder={100.000} />
      </div>
      <label className="titulo fs-2 mb-2 mt-5 text-light">Su nuevo saldo será <FormatNumber number={valor} color="#f0f0f0" /></label>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label text-light">Medio de pago</label>
        <select id="inputState" className="form-select">
          <option selected>Seleccione</option>
          <option value="debito">Tarjeta debito</option>
          <option value="credito">Tarjeta de Credito</option>
        </select>
      </div>
      <div className="col-12">
        <input type="submit" className="btn btn-primary" value="Cargar Cuenta" />
      </div>
      </form>
      </div>
  </section>

  );
}

export default Fill;
