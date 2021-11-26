import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const TableUsers = ( { clientes, rol } ) => {
  return (
    <Fragment>
      <section className="container-fluid contenedor ">
        <div className="w-95 h-1000 ">
          <div className="col-lg-6  center-form d-flex flex-column align-items-center justify-content-center">
            <h1 className="mt-5 mb-5 text-light">Busqueda de Empleados</h1>
            <div className="col-md-6 mb-5">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            <table className="table-light table table-striped table-bordered ">
              <thead>
                <tr className="text-center">
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Username</th>
                  { rol==='Cliente' ? '' : <th scope="col">Rol</th> }
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
              {!clientes ? '': clientes.map((cliente, index) => {
                const {nombre, apellido, usuario, rol, id} = cliente;
                return(
                  <tr key={index} className="text-center">
                    <th scope="row">{id}</th>
                    <td>{nombre}</td>
                    <td>{apellido}</td>
                    <td>{usuario}</td>
                    { rol==='Cliente' ? '' : <td>{rol}</td> }
                    <td className="text-center">
                      <Link to={`/edit-user/${id}`} className="btn btn-primary btm-h">Editar</Link>
                      <Link to={`/delete-user/${id}`} className="btn btn-danger btm-h">Eliminar</Link>
                    </td>
                </tr>
                );

              })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Fragment>
   );
}

export default TableUsers;
