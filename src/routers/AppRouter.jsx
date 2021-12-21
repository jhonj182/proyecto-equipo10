import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Route, Switch, useParams } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
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
import Reload from '../pages/reload';
import clienteAxios from '../config/axios'

const AppRouter = () => {
  
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register-user">
          <RegisterUser />
        </Route>
        <PrivateRoute exact path="/register-car" component={RegisterCar} />
        <PrivateRoute exact path="/register" component={RegisterUser} />
        <PrivateRoute exact path="/car-list" component={VerVehiculos}  /> 
        <PrivateRoute exact path="/edit-profile" component={EditUser} />
        <PrivateRoute exact path="/edit-car" component={EditUser} />
        <PrivateRoute exact path="/profile" component={Profile } />
        <PrivateRoute exact path="/charge-account" component={Fill} />
        <PrivateRoute exact path="/reload-car/:id" component={Reload} />
        <PrivateRoute exact path="/transaction-history" component={History} />
        <PrivateRoute exact path="/logout" component={<salir />} />
        <PrivateRoute exact path="/user-list" component={UserList} />
        <PrivateRoute exact path="/admin-list" component={AdminList} />
      </Switch>
  );
}

export default AppRouter;
