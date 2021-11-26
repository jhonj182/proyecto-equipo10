import React, { Fragment } from 'react';
import TableUsers from '../../components/TableClientes';
import { getData } from '../../config/db'

const Index = () => {
  const users = getData().usuarios;
  const clientes = users.filter( (usuario) => usuario.rol === 'Cliente' );

  return (
    <Fragment>
      <TableUsers
        clientes = {clientes}
        rol = 'Cliente'
      />
    </Fragment>
   );
}

export default Index;
