import React, { Fragment } from 'react'
import logo from '../assets/img/logo.svg'
import Status from './Status'

const Head = () => {
  return (
    <Fragment>
    <header className="bg-light sticky-top">
        <nav className="navbar ali navbar-expand-lg navbar-light ">
          <div className="container-fluid col-log-6 justify-content-start">
            <div className="nav">
              <img className="logo" alt="logo" width="241" height="183" src={logo} />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-log-6 justify-content-end" id="navbarNav">
              <ul className="navbar-nav bd-highlight">
                <li className="nav-item mx-2">
                <a className="nav-link px-3 btn btn-primary text-white "
                  href="/register-car/"
                  aria-current="page">Registrar vehiculo</a>
                </li>
                <li className="nav-item mx-2">
                <a className="nav-link px-3btn btn-primary text-white "
                  href="/car-list/"
                  aria-current="page">Ver Vehiculos</a>
                </li>
                <li className="nav-item mx-2">
                <a className="nav-link px-3 btn btn-primary text-white "
                  href="/edit-profile/"
                  aria-current="page">Editar mi Perfil</a>
                </li>
                <li className="nav-item mx-2">
                <a className="nav-link px-3 btn btn-primary text-white "
                  href="/charge-account/"
                  aria-current="page">Recargar</a>
                </li>
                <li className="nav-item mx-2">
                <a className="nav-link px-3 btn btn-primary text-white "
                  href="/transaction-history/"
                  aria-current="page">Transacciones</a>
                </li>
                <li className="nav-item mx-2">
                <a className="nav-link px-3 btn btn-primary text-white "
                  href="/logout/"
                  aria-current="page">Salir</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
    <Status />
    </Fragment>
   );
};

export default Head;