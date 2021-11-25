import React from 'react';
const Index = () => {
  function saludar(){
    alert('hola mundo');
  }
  return ( 
    <div>
  <section className="container-fluid contenedor ">
        <div className="h-1000 ">
          <div className="col-lg-8 table-responsive-lg center-form d-flex flex-column align-items-center justify-content-center">
            <h1 className="mt-5 mb-5 
        text-light">Transacciones</h1>
            <table className="table-light table table-striped  table-hover">
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
                <tr className="text-center">
                  <td>22-10-2021</td>
                  <td>$50.000</td>
                  <td>FRE-456</td>
                  <td>45</td>
                  <td>8</td>
                  <td>Saldo</td>
                </tr>
                <tr className="text-center" onClick={saludar}>
                  <td>22-11-2021</td>
                  <td>$60.000</td>
                  <td>HJQ-456</td>
                  <td>92</td>
                  <td>90</td>
                  <td>Pago con puntos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
</div>

    );
}
 
export default Index;