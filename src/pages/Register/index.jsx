import React, { Fragment, useState }from 'react';
import RegistrarVehiculo from '../../components/RegistrarVehiculo.jsx'

const Index = ( props ) => {
  const [vehiculos, setVehiculos] = useState({});
  return ( 
    <Fragment>
      <RegistrarVehiculo user = {props} setVehiculos={setVehiculos} vehiculos = "vehiculos" />
    </Fragment>
   );
}
 
export default Index;