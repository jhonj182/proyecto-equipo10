import React from 'react'

const Fila = (vehiculos, index) => {
  const { marca, placa } = vehiculos;
  return ( 
    <tr>
    <th scope="row">{index}</th>
        <td>{marca}</td>
        <td>{placa}</td>
        <td>na</td>
        <td class="text-center">
          <a  href="tanquear/{placa}" class="btn btn-success btm-h">Tanquear</a >
          <a href="editar/{placa}" class="btn btn-primary btm-h">Editar</a >
          <a  href="eliminar/{placa}" class="btn btn-danger btm-h">Eliminar</a >
        </td>
    </tr>
   );
}
 
export default Fila;