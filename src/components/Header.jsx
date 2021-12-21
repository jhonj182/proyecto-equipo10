import React, { Fragment } from 'react'
import Status from './Status'
import { NavLink} from 'react-router-dom'

const Head = (props) => {

  
  // const {avatar} = user;
  const salir = ()=>{
    localStorage.removeItem('user');
    window.location = ('/');
  }
  return (
    <Fragment>
    <header className="bg-light sticky-top">
        <nav className="navbar ali navbar-expand-lg navbar-light ">
          <div className="container-fluid col-log-6 justify-content-start">
            <div className="nav">
              <img className="logo" alt="logo" width="241" height="183" src="https://1000marcas.net/wp-content/uploads/2021/05/Esso-logo.png" />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-log-6 justify-content-end" id="navbarNav">
              <ul className="navbar-nav bd-highlight">
                <li className="nav-item mx-2 my-2">
                <NavLink className="nav-link px-3 btn btn-primary text-white "
                  exact to="/register-car/"
                  aria-current="page">Registrar vehiculo</NavLink>
                </li>
                <li className="nav-item mx-2 my-2">
                <NavLink className="nav-link px-3 btn btn-primary text-white "
                  exact to="/car-list/"
                  aria-current="page">Ver Vehiculos</NavLink>
                </li>
                <li className="nav-item mx-2 my-2">
                {/* <NavLink className="nav-link px-3 btn btn-primary text-white "
                  exact to="/edit-profile/"
                  aria-current="page">Editar mi Perfil</NavLink> */}
                </li>
                <li className="nav-item mx-2 my-2">
                <NavLink className="nav-link px-3 btn btn-primary text-white "
                  exact to="/charge-account/"
                  aria-current="page">Recargar</NavLink>
                </li>
                <li className="nav-item mx-2 my-2">
                <NavLink className="nav-link px-3 btn btn-primary text-white "
                  exact to="/transaction-history/"
                  aria-current="page">Transacciones</NavLink>
                </li>
                <li className="nav-item mx-2 my-2">
                <button className="nav-link px-3 btn btn-primary text-white "
                  onClick={salir}
                  aria-current="page">Salir</button>
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
