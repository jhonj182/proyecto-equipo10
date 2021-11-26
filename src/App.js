import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import History from "./pages/History/";
import RegisterCar from "./pages/Register/";
import VerVehiculos from "./pages/CarList";
import Fill from "./pages/Charge";
import UserList from './pages/Users'
import AdminList from './pages/Admin'
import { getData } from "./config/db";

function App() {
  let data = getData();
  let user = 9;
  let vehiculos = data.vehiculos;
  let transacciones = data.transacciones;
  let vehiculo = vehiculos.filter( (obj) => obj.userId === user );
  let transaccion = transacciones.filter( (obj) => obj.userId === user );
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="register-car" element={<RegisterCar />} />
        <Route exact path="car-list" element={<VerVehiculos vehiculos={vehiculo}/>}/>
        <Route exact path="edit-profile" element={<editarPerfil />} />
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
