import React, { Fragment, useEffect, useState }from 'react';
import Table from '../../components/Table';
import clienteAxios from '../../config/axios';

const VerVehiculos = (props) => {
  //state de la app
  const {user} = props;
  console.log(user._id)
  const idUsuario = (user._id);
  const [vehiculos, guardarVehiculos] = useState([]);
  console.log(idUsuario);
  useEffect(()=>{
    const consultarAPI = () =>{
    // event.preventDefault();
      clienteAxios.get(`/vehiculos-usuarios/${idUsuario}`)
      .then(response => {
        //colocar el resultado de la consulta en el state
        guardarVehiculos(response.data);
      })
      .catch(error =>{
        console.log(error);
      })
    }
    consultarAPI();

  }, [idUsuario] );

  return (
    <Fragment>
      <Table vehiculos = {vehiculos} />
    </Fragment>
   );
}

export default VerVehiculos; 
