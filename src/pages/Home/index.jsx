import React, { Fragment,  useState } from 'react';
import Cookies from 'universal-cookie';
import clienteAxios from '../../config/axios';

const Index = () => {
  const cookies = new Cookies();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
    const login = (event) => {
      event.preventDefault();
      clienteAxios.get('/usuarios', {params: { usuario:user, password:password }})
      .then(respuesta =>{
        if (respuesta.data.length > 0){
          let response = respuesta.data;
          const [usuario] = response[0];
          console.log(usuario);
          cookies.set("username", response[0].usuario);
        }
        })
        .catch(error => {
          console.log(error)
        });
    }
  return (
      <>
        <div>
  <header className="bg-light sticky-top">
    {/* <div class="nav">
      <img class="logo" src="img/mobil-esso-logo.jpg">
      <a class="registrarse" aria-current="page" href="#">Registrarse</a>
  </div> */}
    <nav className="navbar w-70 ali navbar-expand-lg navbar-light ">
      <div className="container-fluid col-log-6 justify-content-start">
        <div className="nav">
          <img className="logo" width={241} height={183} src="img/logo.svg" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse col-log-6 justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row-reverse bd-highlight">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/registro.html">Registrarse</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <section className="container-fluid contenedor ">
    <div className="w-707 d-flex h-1000">
      <div className="col-lg-6 d-flex align-items-center justify-content-center bg-ecology">
        <div id="carouselExampleIndicators" className="carousel slide d-none" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="http://www.fillmurray.com/g/800/600" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="http://www.fillmurray.com/g/800/601" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="http://www.fillmurray.com/g/800/602" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
        <form onSubmit={login} >
          <label className="titulo fs-2 mb-5 mt-5 text-light">INICIO DE SESION</label>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-light fs-5">Ingrese Usuario</label>
            <input
            type="email"
            name="user"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange = { event => setUser(( event.target.value )) }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-light fs-5">Password</label>
            <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange = { event => setPassword(( event.target.value )) }
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1 text-light fs-5">Recordar Usuario</label>
          </div>
          <input type="submit" className="btn btn-primary" defaultValue="Iniciar Sesion" />
        </form>
        <p className="my-5 text-light">No tienes cuenta aún <a href="/registro.html" className="terminos link-light">Crear una Cuenta</a></p>
      </div>
    </div>
  </section>
</div>

      </>
    );
}

export default Index;
