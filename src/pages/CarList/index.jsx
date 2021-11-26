import React, { Fragment }from 'react';
import Table from '../../components/Table';

const VerVehiculos = ({vehiculos}) => {

  return (
    <Fragment>
      <Table vehiculos = {vehiculos} />
    </Fragment>
   );
}

export default VerVehiculos;
