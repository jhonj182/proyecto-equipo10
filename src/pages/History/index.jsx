import React from 'react';
import { getVehiculo } from "../../config/db";

const Index = ({transacciones}) => {

  return (
    <div>
  <section className="container-fluid contenedor px-5">
        <div className="h-1000 ">
          <div className="col-lg-12 col-sm-12  d-flex flex-column align-items-center justify-content-center">
            <h1 className="mt-5 mb-5
        text-light">Transacciones</h1>
            <table className="table-light px-2 table table-responsive table-striped table-hover">
              <thead>
                <tr className="text-center">
                  <th scope="col">Fecha</th>
                  <th scope="col">Monto</th>
                  <th scope="col">Vehiculo</th>
                  <th scope="col">Puntos Obtenidos</th>
                  <th scope="col">Puntos Redimidos</th>
                  <th scope="col">Tipo de Transacción</th>
                </tr>
              </thead>
              <tbody>
              {console.log(transacciones)}
              {!transacciones ?  '' : transacciones.map( (transaccion, index)=> {
                    let placas = (getVehiculo(transaccion.vehiculoId))[0].placa;
                    console.log(placas)
                    return (
                      <tr key={index}>
                        <th className="px-2" scope="row">{transaccion.fecha}</th>
                        <td className="px-2">{transaccion.monto}</td>
                        <td className="px-2">{placas}</td>
                        <td className="px-2">{transaccion.puntosObtenidos}</td>
                        <td className="px-2">{transaccion.puntosRedimidos}</td>
                        <td className="px-2">{transaccion.tipo}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
</div>

    );
}

export default Index;
