import React, { Fragment }from 'react';

const Table = (props) => {
  const {usuarios} = props;
  return ( 
    <Fragment>
      <section className="container-fluid contenedor ">
        <div className="w-95 h-1000 ">
          <div className="col-lg-6  center-form d-flex flex-column align-items-center justify-content-center">
            <h1 className="mt-5 mb-5 
        text-light">Mis Vehículos</h1>
            <table className="table-light table table-striped table-bordered ">
              <thead>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Placa</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <th scope="row">1</th>
                  <td>BMW</td>
                  <td>MMU325</td>
                  <td>2022</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-success btm-h"><i className="fas fa-edit" />Tanquear</button>
                    <button type="button" className="btn btn-primary btm-h"><i className="far fa-eye" />Editar</button>
                    <button type="button" className="btn btn-danger btm-h"><i className="far fa-trash-alt" />Eliminar</button>
                  </td>
                </tr>
                <tr className="text-center">
                  <th scope="row">2</th>
                  <td>Subaru</td>
                  <td>SVV459</td>
                  <td>2020</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-success btm-h"><i className="fas fa-edit" />Tanquear</button>
                    <button type="button" className="btn btn-primary btm-h"><i className="far fa-eye" />Editar</button>
                    <button type="button" className="btn btn-danger btm-h"><i className="far fa-trash-alt" />Eliminar</button>
                  </td>
                </tr>
                <tr className="text-center">
                  <th scope="row">3</th>
                  <td>Toyota</td>
                  <td>KGB996</td>
                  <td>1996</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-success btm-h"><i className="fas fa-edit" />Tanquear</button>
                    <button type="button" className="btn btn-primary btm-h"><i className="far fa-eye" />Editar</button>
                    <button type="button" className="btn btn-danger btm-h"><i className="far fa-trash-alt" />Eliminar</button>
                  </td>
                </tr>
                <tr className="text-center">
                  <th scope="row">3</th>
                  <td>Mercedez-Benz</td>
                  <td>OPQ579</td>
                  <td>2019</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-success btm-h"><i className="fas fa-edit" />Tanquear</button>
                    <button type="button" className="btn btn-primary btm-h"><i className="far fa-eye" />Editar</button>
                    <button type="button" className="btn btn-danger btm-h"><i className="far fa-trash-alt" />Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Fragment>
   );
}
 
export default Table;