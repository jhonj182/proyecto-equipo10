import "./App.css";
import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import History from "./pages/History/";
import RegisterCar from "./pages/Register/";
import VerVehiculos from "./pages/CarList";
import Fill from "./pages/Charge";
import UserList from './pages/Users';
import AdminList from './pages/Admin';
import EditUser from './pages/EditUser';
import RegisterUser from './pages/RegisterUser';
import clienteAxios from './config/axios';
import Cookies from 'universal-cookie';

const App = ( props ) => {
  const cookies = new Cookies();
  const [transaccion, getTransacciones] = useState([]);
  const [vehiculos, getVehiculos] = useState([]);
  useEffect( () => {
    const consultarApi = () => {
      clienteAxios.get('/transacciones?userId=8')
        .then(respuesta =>{
          getTransacciones(respuesta.data);
        })
        .catch(error => {
          console.log(error)
        });
      clienteAxios.get('/vehiculos?userId=8')
        .then(respuesta =>{
          getVehiculos(respuesta.data);
        })
        .catch(error => {
          console.log(error)
        });
    }
    consultarApi();
  }, [] );

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="register-car" element={<RegisterCar />} />
        <Route exact path="register" element={<RegisterUser />} />
        <Route exact path="car-list" element={<VerVehiculos vehiculos={vehiculos}/>}/>
        <Route exact path="edit-profile" element={<EditUser />} />
        <Route exact path="charge-account" element={<Fill />} />
        <Route exact path="reload-car/:id" element={<Fill />} />
        <Route exact path="transaction-history" element={<History transacciones ={transaccion} />} />
        <Route exact path="logout" element={<salir />} />
        <Route exact path="user-list" element={<UserList />} />
        <Route exact path="admin-list" element={<AdminList />} />
      </Routes>
    </Router>
  );
}

export default App;
