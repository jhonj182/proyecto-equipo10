import React from 'react';
import StatusCard from './StatusCard'

const Status = () => {
  return (
    <section className="container-fluid contenedor pt-3 px-5">
      <div className="row">
        {/* Valor combustible Extra */}
        <StatusCard
          Titulo = {'Gasolina Extra'}
          Valor = {50000}
        />
        <StatusCard
          Titulo = {'Gasolina Corriente'}
          Valor = {50000}
        />
        <StatusCard
          Titulo = {'Puntos Acumulados'}
          Valor = {50000}
        />
        <StatusCard
          Titulo = {'Saldo'}
          Valor = {50000}
        />

      </div>
    </section>

   );
}

export default Status;
