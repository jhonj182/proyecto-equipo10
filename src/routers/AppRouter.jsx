import "./App.css";
import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home";
import History from "../pages/History";
import RegisterCar from "../pages/Register";
import VerVehiculos from "../pages/CarList";
import Fill from "../pages/Charge";
import UserList from '../pages/Users';
import AdminList from '../pages/Admin';
import Profile from '../pages/Profile';
import EditUser from '../pages/EditUser';
import RegisterUser from '../pages/RegisterUser';
// import clienteAxios from '../config/axios';
import Cookies from 'universal-cookie';

const AppRouter = ( props ) => {
  const cookies = new Cookies();
  let user = true;
  if (cookies){
    user = true;
  }
  const [transaccion, getTransacciones] = useState([]);
  const [vehiculos, getVehiculos] = useState([]);
  // useEffect( () => {
  //   const consultarApi = () => {
  //     clienteAxios.get('/transacciones?userId=8')
  //       .then(respuesta =>{
  //         getTransacciones(respuesta.data);
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       });
  //     clienteAxios.get('/vehiculos?userId=8')
  //       .then(respuesta =>{
  //         getVehiculos(respuesta.data);
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       });
  //   }
  //   consultarApi();
  // }, [] );

  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register-user" component={RegisterUser}/>
        <PrivateRoute exact path="/register-car" component={RegisterCar} />
        <PrivateRoute exact path="/register" component={RegisterUser} />
        <PrivateRoute exact path="/car-list" component={VerVehiculos}/> 
        <PrivateRoute exact path="/edit-profile" component={EditUser} />
        <PrivateRoute exact path="/charge-account" component={Fill} />
        <PrivateRoute exact path="/reload-car/:id" component={Fill} />
        <PrivateRoute exact path="/transaction-history" component={History} />
        <PrivateRoute exact path="/logout" component={<salir />} />
        <PrivateRoute exact path="/user-list" component={UserList} />
        <PrivateRoute exact path="/admin-list" component={AdminList} />
      </Switch>
  );
}

export default AppRouter;
