import React, { Fragment } from "react";

const Table = () => {
  return (
    <Fragment>
      <section className="container-fluid contenedor ">
        <div className="w-70 h-1000 ">
          <div className="col-lg-6  center-form d-flex flex-column align-items-center justify-content-center">
            <h1
              className="mt-5 mb-5 text-light"
            >
              Registro de Usuario
            </h1>
            <form className="row g-3 text-light">
              <div className="col-sm-12">
                <label htmlFor="name" className="form-label">
                  Nombres y Apellidos
                </label>
                <input
                  type="text"
                  className="form-control js-name"
                  id="name"
                  name="name"
                  style={{ textTransform: "uppercase" }}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="name" className="form-label">
                  Documento
                </label>
                <input
                  type="text"
                  className="form-control js-name"
                  id="name"
                  name="name"
                  style={{ textTransform: "uppercase" }}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="name" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="text"
                  className="form-control js-name"
                  id="name"
                  name="name"
                  style={{ textTransform: "uppercase" }}
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="inputState" className="form-label">
                  Celular
                </label>
                <input
                  className="form-control js-name"
                  type="text"
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="modelo" className="form-label">
                  Contraseña
                </label>
                <input
                  className="form-control js-name"
                  type="password"
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="modelo" className="form-label">
                  Repetir Contraseña
                </label>
                <input
                  className="form-control js-name"
                  type="password"
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    He leido y acepto los{" "}
                    <a href="/" className="terminos link-light">
                      Términos y Condiciones de Registro de Vehículos
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-12">
                <input
                  type="submit"
                  className="btn btn-dark"
                  defaultValue="Registrar Vehículo"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Table;
