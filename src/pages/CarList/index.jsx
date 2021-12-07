import React, { Fragment }from 'react';
import Table from '../../components/Table';

const VerVehiculos = (props) => {

  return (
    <Fragment>
      <Table vehiculos = {props} />
    </Fragment>
   );
}

export default VerVehiculos;
