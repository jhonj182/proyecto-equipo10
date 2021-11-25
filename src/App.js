import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import History from "./pages/History/";
import RegisterCar from "./pages/Register/";
import VerVehiculos from "./pages/CarList";
import Fill from "./pages/Charge";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="register-car" element={<RegisterCar />} />
        <Route exact path="car-list" element={<VerVehiculos />} />
        <Route exact path="edit-profile" element={<editarPerfil />} />
        <Route exact path="charge-account" element={<Fill />} />
        <Route exact path="reload-car/:id" element={<Fill />} />
        <Route exact path="transaction-history" element={<History />} />
        <Route exact path="logout" element={<salir />} />
      </Routes>
    </Router>
  );
}

export default App;
