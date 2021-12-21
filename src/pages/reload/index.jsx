import React, { useState, Fragment, useEffect } from 'react';
import { FormatNumber } from '../../config/functions'
import { useParams } from 'react-router-dom';
import clienteAxios from '../../config/axios';

const Index = (props) => {
    const productoJson = localStorage.getItem('user');
    const [cantidadGalones, setCantidad] = useState(0);
    const [valorGalon, setValor] = useState(0);
    const [puntos, setPuntos] = useState(0);
    const [monto, setMonto] = useState(0);
    const [isLoading, setIsloading] = useState(false)
    let usuarioLocal = (JSON.parse (productoJson));
    const {_id, saldo, email, password} = usuarioLocal;
    const {idVehiculo} = props;
    // const vehiculoId = useParams['id'];
    // const vehiculoId = props.computedMatch.params.id;
    const [transaccion, setTransaccion] = useState({
      user_id : _id,
      tipo : 'pago',
      monto : monto,
      vehiculo : idVehiculo,
      puntos_obt: puntos
  })

  useEffect(()=>{
      if(valorGalon !==0 && cantidadGalones !==0 && isLoading){
          setMonto( valorGalon * cantidadGalones);
          console.log(valorGalon)
      }
      if (valorGalon == 50000){
        setPuntos( (parseInt(monto)/1000) * 10 )
      }else if (valorGalon == 70000){
        setPuntos( (parseInt(monto)/1000) * 15 )
        }
      
    setIsloading(false);

  }, [valorGalon, cantidadGalones, puntos])
  useEffect(()=>{
    if(monto !==0){
      if (valorGalon == 50000){
        setPuntos( (parseInt(monto)/1000) * 10 )
      }else if (valorGalon == 70000){
        setPuntos( (parseInt(monto)/1000) * 15 )
        }
        setTransaccion({
            ...transaccion,
            monto,
            puntos_obt : puntos 
          })
    }


  }, [monto])

  const actualizarState = event =>{
    setTransaccion({
      ...transaccion,
      [event.target.name]: event.target.value 
    })
    console.log(transaccion);
  }

    const realizarTransaccion = (event)=>{
      event.preventDefault();
      
      console.log(transaccion)
      clienteAxios.post('/transacciones', transaccion)
      .then(response => {
        console.log(response)
        console.log(response.data)
        if(response.data){
          const respuesta=response.data;
          console.log(respuesta)
          consultarUsuario();
          descargarCuenta();
          
        }

      })
      .catch(error =>{
        console.log(error);
      })
    }
    const descargarCuenta = ()=>{
      let valor = saldo - monto;
      clienteAxios.put(`/recargar-usuarios/${_id}`, {params:{ cantidad : valor }})
      .then(response => {
        console.log(response)
        window.location = '/car-list/';
      })
      .catch(error =>{
        console.log(error);
        alert("error usuario no registrado con éxito ");
      })
      
    }
    const consultarUsuario = ()=>{
      clienteAxios.post('/login', { params: {email: email, password: password}})
      .then(response => {
        console.log(response)
        alert('hola');
        console.log(response.data)
        if(response.data){
          const respuesta=response.data;
          localStorage.setItem('user', JSON.stringify(respuesta));
        }
  
      })
      .catch(error =>{
        console.log(error);
      })
    }
  return (
    <Fragment>
    <div>
      <section className="container-fluid contenedor">
        
        <div className="w-707 d-flex h-1000">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <form
                onSubmit={realizarTransaccion}
            >
                
              <label className="titulo fs-2 mb-5 mt-5 text-light">Tanquear Vehiculo</label>
              <br />
              <br />
              <label className="titulo fs-2 mb-5 mt-5 text-light">Total a Pagar: <FormatNumber number={monto} /></label>
              <br />
              <label className="titulo fs-2 mb-5 mt-5 text-light">Puntos Obtenidos: <FormatNumber number={puntos} /></label>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="js-cantidad form-label text-light fs-5">Cantidad de Galones</label>
                <input 
                type="number" 
                name="cantidad" 
                className="form-control"
                onChange={(event)=>setCantidad(event.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label text-light fs-5">Puntos a usar</label>
                <input 
                type="text" 
                name="puntos" 
                className="form-control"
                onChange={actualizarState}
                disabled
                />
              </div>
              <br />
              <select name="cars" id="cars" onChange={(event)=>{
                  setValor(event.target.value);
                  setIsloading(true);
                  }}>
                <option value="">Seleccione tipo</option>
                <option value="50000">corriente</option>
                <option value="70000">extra</option>
                </select>
              <br />
              <br />
              <br />

              <input type="submit" className="btn btn-warning" defaultValue="Tanquear" />
            </form>
          </div>
        </div>
      </section>
    </div>

  </Fragment>
  );
}

export default Index;
