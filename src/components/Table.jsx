import React, { Fragment, useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../config/axios'

const Table = (props) => {
  const idUsuario = (props.vehiculos.user.id)
  // const {user} = props.user;
  // var vehiculos
  const [vehiculos, setVehiculos] = useState({});
  var datas
  const vehiculo  = () => {
    // event.preventDefault();
    clienteAxios.get('/vehiculos', {params: { idUsuario: idUsuario } })
    .then(response => {
      datas = response.data
      console.log(datas)
      setVehiculos(datas);
    })
    .catch(error =>{
      console.log(error);
    })
  }
  useEffect(() => { 
    console.log(vehiculos)
    vehiculo() }, []);
  
  return (
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
                        <th scope="row">{vehiculo.id}</th>
                        <td>{vehiculo.marca}</td>
                        <td>{vehiculo.placa}</td>
                        <td>{vehiculo.modelo}</td>
                        <td class="text-center">
                        <Link
                          className="btn btn-success  mx-2 btm-h"
                          to={`reload-car/${vehiculo.id}`}
                        >
                          Tanquear
                        </Link>
                        <Link
                          className="btn btn-primary  mx-2 btm-h"
                          to={`reload-car/${vehiculo.id}`}
                        >
                          Editar
                        </Link>
                        <Link
                          className="btn btn-danger  mx-2 btm-h"
                          to={`reload-car/${vehiculo.id}`}
                        >
                          Eliminar
                        </Link>
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
