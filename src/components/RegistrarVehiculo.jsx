import React, { Fragment }from 'react';

const Table = () => {

  return ( 
    <Fragment>
      <section className="container-fluid contenedor ">
  <div className="w-70 h-1000 ">
    <div className="col-lg-6  center-form d-flex flex-column align-items-center justify-content-center">
      <h1 className="mt-5 mb-5 
  text-light">Registro de Vehículo</h1>
      <form className="row g-3 text-light">
        <div className="col-sm-12">
          <label htmlFor="name" className="form-label">Placa</label>
          <input type="text" className="form-control js-name" id="name" name="name" placeholder="AAA000" style={{textTransform: 'uppercase'}} />
        </div>
        <div className="col-sm-12">
          <label htmlFor="inputState" className="form-label">Marca del Vehículo</label>
          <select id="inputState" className="form-select">
            <option selected>Seleccione</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Citroën">Citroën</option>
            <option value="Ford">Ford</option>
            <option value="Foton">Foton</option>
            <option value="Hyundai">Hyundai</option>
            <option value="JAC">JAC</option>
            <option value="Kia">Kia</option>
            <option value="Mazda">Mazda</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Renault">Renault</option>
            <option value="Subaru">Subaru</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Subaru">Subaru</option>
            <option value="Toyota">Toyota</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Otra Marca">Otra Marca</option>
          </select>
        </div>
        <div className="col-sm-12">
          <label htmlFor="modelo" className="form-label">Modelo</label>
          <input className="form-control js-name" type="number" min={1900} max={2099} step={1} defaultValue={2021} />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              He leido y acepto los <a href="#" className="terminos link-light">Términos y Condiciones de Registro de Vehículos</a>
            </label>
          </div>
        </div>
        <div className="col-12">
          <input type="submit" className="btn btn-dark" defaultValue="Registrar Vehículo" />
        </div>
      </form>
    </div>
  </div>
</section>

    </Fragment>
   );
}
 
export default Table;