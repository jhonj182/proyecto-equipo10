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
              Editar Perfil
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
                  Ingrese su contraseña para verificar la información
                </label><br/>
                <label htmlFor="modelo" className="form-label">
                  Contraseña
                </label>
                <input
                  className="form-control js-name"
                  type="password"
                />
              </div>
              <div className="col-12 d-grid gap-1">
                <button
                  type="submit"
                  className="btn btn-dark"
                  defaultValue="Guardar Información">
                  Guardar
                </button>
                <button
                  type="submit"
                  className="btn btn-dark"
                  defaultValue="Guardar Información">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Table;
