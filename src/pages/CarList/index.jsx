import React, { Fragment, useEffect, useState }from 'react';
import Table from '../../components/Table';
import clienteAxios from '../../config/axios'

const VerVehiculos = ( props) => {
  //state de la appconst productoJson = localStorage.getItem('user');
  const productoJson = localStorage.getItem('user');
  let usuarioLocal = (JSON.parse (productoJson));
  const { _id } = usuarioLocal;

  const [vehiculos, guardarVehiculos] = useState('');
  console.log(`idusuario ${_id}`);
  useEffect(()=>{
    const consultarAPI = () =>{
    // event.preventDefault();`
      clienteAxios.get(`/vehiculos-usuarios/${_id}`)
      .then(response => {
        //colocar el resultado de la consulta en el state
        guardarVehiculos(response.data);
        console.log(`vehiculos: ${vehiculos}`)
      })
      .catch(error =>{
        console.log(error);
      })
    }
    consultarAPI();

  }, [_id] );

  return (
    <Fragment>
      <Table vehiculos = {vehiculos} />
    </Fragment>
   );
}

export default VerVehiculos; 
