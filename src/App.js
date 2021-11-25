// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Regv from "./pages/Registrarvehiculo";
import VerVehiculos from "./pages/VerVehiculos";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={ <Home /> } />
        <Route exact path="/registrarVehiculo/"  element={ <Regv /> } />
        <Route exact path="/ver-vehiculos/"  element={ <VerVehiculos idUsuario={1}/> } />
        <Route exact path="/editarPerfil/" element={ <editarPerfil />} />
        <Route exact path="/recargar/" element={ < recargar /> } />
        <Route exact path="/transacciones/" element={ < transacciones /> } />
        <Route exact path="/salir/" element={ < salir /> } />
      </Routes>
    </Router>
  );
}

export default App;
