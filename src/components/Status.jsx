import React from 'react';
import StatusCard from './StatusCard';

const Status = (props) => {
  const productoJson = localStorage.getItem('user');
  if(productoJson){
  let usuarioLocal = (JSON.parse (productoJson));
  var { saldo, puntos } = usuarioLocal;
  } 
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
          Valor = {puntos}
        />
        <StatusCard
          Titulo = {'Saldo'}
          Valor = {`${saldo}`}
        />

      </div>
    </section>

   );
}

export default Status;
