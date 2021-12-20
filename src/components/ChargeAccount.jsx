import React, { useState } from 'react';
import clienteAxios from '../config/axios'

const Fill = () => {
  const [valor, saveValor] = useState({
    valor: '',
  });
  const actualizarState = event =>{
    saveValor({
      ...valor,
      [event.target.name]: event.target.value 
    })
    console.log(valor);
  }
  const productoJson = localStorage.getItem('user');
  let usuarioLocal = (JSON.parse (productoJson));
  const { _id } = usuarioLocal;
  const recargarCuenta = (event)=>{
    event.preventDefault();
    clienteAxios.put(`/recargar-usuarios/${_id}`, {params:{ cantidad : valor.valor }})
    .then(response => {
      console.log(response)
      alert(response);
    })
    .catch(error =>{
      console.log(error);
      alert("error usuario no registrado con éxito ");
    })
  }
  console.log('hola mundo')
  return (
    <section className="container-fluid contenedor w-60 h-1000">
      <div className="col-lg-6 center-form center pb-5">

      <form onSubmit={recargarCuenta}>
      <label className="titulo fs-2 mb-2 mt-5 text-light">Recargar mi Cuenta</label>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label text-light">Monto</label>
        <input type="text" onKeyUp= {actualizarState} className="form-control" name="valor" id="formGroupExampleInput" placeholder={100.000} />
      </div>
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
