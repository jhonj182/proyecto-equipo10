import React, { useEffect, useState, Fragment }from 'react';
import axios from 'axios';
import Table from '../components/Table';
const VerVehiculos = (props) => {
  const URL = 'http://localhost:3000/usuarios';
  const [usuarios, setUsuarios] = useState();
  console.log(URL);

  const fetchApi = async () =>{
    axios.get(URL)
      .then(res => {
        const persons = res.data;
        setUsuarios(persons);
      })
  }
  useEffect(() => {
    fetchApi();
  }, []);
  return ( 
    <Fragment>
      <Table props = {props} usuarios = {usuarios}/>
    </Fragment>
   );
}
 
export default VerVehiculos;