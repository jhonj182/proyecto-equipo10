import React from 'react';
import { FormatNumber } from '../config/functions'

const StatusCard = ( {Titulo, Valor}) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary mb-2 text-uppercase">
                {Titulo}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {Titulo !== "Puntos Acumulados" ? <FormatNumber number={Valor} /> : Valor}
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-calendar fa-2x text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default StatusCard;
