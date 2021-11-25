import React from 'react';

const Fill = () => {
  console.log('hola mundo')
  return ( 
    <section className="container-fluid contenedor w-60 h-1000">
      <div className="col-lg-6 center-form center pb-5">

      <form > 
      <label className="titulo fs-2 mb-2 mt-5 text-light">Recargar mi Cuenta</label>
      <div className="mb-3">            
        <label htmlFor="formGroupExampleInput" className="form-label text-light">Monto</label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder={100.000} />
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
        <input type="submit" className="btn btn-primary" defaultValue="Actualizar" />
      </div>
      </form>
      </div>
  </section>

   );
}
 
export default Fill;