import { Route, Redirect, useLocation } from "react-router-dom";
import Head from '../components/Header.jsx';

export default function PrivateRoute({ component: Component, ...rest }) {
  var idVehiculo = (rest.computedMatch.params.id)
  const location = useLocation();
  const productoJson = localStorage.getItem('user');
  let producto = (JSON.parse (productoJson));
  let user = producto;

  console.log(idVehiculo) // mostraria 9999

  return (
    <>
    <Head 
      user = {user}
    />
    <Route {...rest}>
      {user != null ? (
        <Component 
          user = {user}
          props = {rest}
          idVehiculo = {idVehiculo}
        />
      ) : (
        <Redirect to={{ pathname: "/" , state: { from: location }}} />
      )}
    </Route>
    </>
  );
}
