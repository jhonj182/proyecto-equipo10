import React, { Fragment }from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../config/axios'

const Table = (props) => {
    const {vehiculos} = props
    // const eliminarVehiculo = (vehiculoId)+>
    const eliminarVehiculo = (vehiculoId)=>{
      clienteAxios.delete(`/vehiculos/${vehiculoId}`)
      .then(respuesta => {
          window.location = "/car-list/"
      })
      .catch(error => {
          console.log(error)
      })
    }
    return(
    <Fragment>
      <section className="container-fluid contenedor ">
        <div className="w-95 h-1000 ">
          <div className="col-lg-8 table-responsive center-form d-flex flex-column align-items-center justify-content-center">
            <h1 className="mt-5 mb-5
        text-light">Mis Vehículos</h1>
            <table className="table-light table table-striped table-bordered ">
              <thead>
                <tr className="text-center">
                  <th scope="col">Id Vehiculo</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Placa</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {!vehiculos ?  '' :
                  vehiculos.map( (vehiculo, index)=> {
                    return (
                      <tr key={index}>
                        <th scope="row">{vehiculo._id}</th>
                        <td>{vehiculo.marca}</td>
                        <td>{vehiculo.placa}</td>
                        <td>{vehiculo.modelo}</td>
                        <td className="text-center">
                        <Link
                          className="btn btn-success  mx-2 btm-h"
                          to={`reload-car/${vehiculo._id}`}
                        >
                          Tanquear
                        </Link>
                        <Link
                          className="btn btn-primary  mx-2 btm-h"
                          to={`edit-car/${vehiculo._id}`}
                        >
                          Editar
                        </Link>
                        <button
                          className="btn btn-danger  mx-2 btm-h"
                          to={`delete-car/${vehiculo._id}`}
                          onClick={()=>eliminarVehiculo(vehiculo._id)}
                        >
                          Eliminar
                        </button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody> 
            </table>
          </div>
        </div>
      </section>
    </Fragment>
    );
}

export default Table;
