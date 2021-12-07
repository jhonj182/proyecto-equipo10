import React, { Fragment }from 'react';
import RegistrarVehiculo from '../../components/RegistrarVehiculo.jsx'

const Index = ( props ) => {
  return ( 
    <Fragment>
      <RegistrarVehiculo user = {props} />
    </Fragment>
   );
}
 
export default Index;