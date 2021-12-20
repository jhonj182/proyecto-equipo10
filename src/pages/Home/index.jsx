import React, { useState, Fragment } from 'react';
import clienteAxios from '../../config/axios';
import md5 from 'md5';


const Index = (props) => {
  const [users, saveUser] = useState({
    usuario: '',
    password: ''
  });
  //leer datos del form
  const actualizarState = event =>{
    saveUser({
      ...users,
      [event.target.name]: event.target.value 
    })
    console.log(users);
  }

    const consultarUsuario = (event)=>{
      event.preventDefault();
      var pass = (users.password);
      clienteAxios.post('/login', { params: {email: users.usuario, password: pass}})
      .then(response => {
        console.log(response)
        console.log(response.data)
        if(response.data){
          const respuesta=response.data;
          localStorage.setItem('user', JSON.stringify(respuesta));
          alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellidos}`);
          window.location = '/profile';
        }

      })
      .catch(error =>{
        console.log(error);
      })
    }
    console.log('desde index home');

  return (
    <Fragment>
      <div>
        <header className="bg-light sticky-top">
          <nav className="navbar w-70 ali navbar-expand-lg navbar-light ">
            <div className="container-fluid col-log-6 justify-content-start">
              <div className="nav">
                {/* <img className="logo" width={241} height={183} src="img/logo.svg" /> */}
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse col-log-6 justify-content-end" id="navbarNav">
                <ul className="navbar-nav d-flex flex-row-reverse bd-highlight">
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="/register-user">Registrarse</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <section className="container-fluid contenedor ">
          <div className="w-707 d-flex h-1000">
            <div className="col-lg-6 d-flex align-items-center justify-content-center bg-ecology">

            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <form
                onSubmit={consultarUsuario}
              >
                <label className="titulo fs-2 mb-5 mt-5 text-light">INICIO DE SESION</label>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label text-light fs-5">Ingrese Usuario</label>
                  <input 
                  type="email" 
                  name="usuario" 
                  className="form-control" 
                  id="exampleInputEmail1" 
                  onKeyUp={actualizarState}
                  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label text-light fs-5">Password</label>
                  <input type="password" 
                  name="password" 
                  className="form-control" 
                  onKeyUp={actualizarState}
                  id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1 text-light fs-5">Recordar Usuario</label>
                </div>
                <input type="submit" className="btn btn-primary" defaultValue="Iniciar Sesion" /> 
              </form>
              <p className="my-5 text-light">No tienes cuenta aún <a href="/register-user" className="terminos link-light">Crear una Cuenta</a></p>
            </div>
          </div>
        </section>
      </div>

    </Fragment>
  );
}

export default Index;
