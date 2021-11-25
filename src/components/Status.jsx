import React from 'react';

const Status = () => {
  return ( 
    <section className="container-fluid contenedor pt-3">
  <div className="row">
    {/* Valor combustible Extra */}
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercasem b-1">
                Galon Extra
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                $20,000
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-calendar fa-2x text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Valor combustible Corriente */}
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                Galon Corriente
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                $15,000
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-dollar-sign fa-2x text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Puntos Acumulados */}
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-black text-uppercase mb-1">
                Puntos Acumulados
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                $3.515
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-dollar-sign fa-2x text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Saldo Disponible */}
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                Saldo Disonible
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                $351.496
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-comments fa-2x text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   );
}
 
export default Status;