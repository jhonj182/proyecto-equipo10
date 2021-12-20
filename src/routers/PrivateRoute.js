import { Route, Redirect, useLocation } from "react-router-dom";
import Head from '../components/Header.jsx';

export default function PrivateRoute({ component: Component, ...rest }) {
  const location = useLocation();
  const productoJson = localStorage.getItem('user');
  let producto = (JSON.parse (productoJson));
  let user = producto;

  return (
    <>
    <Head 
      user = {user}
    />
    <Route {...rest}>
      {user != null ? (
        <Component 
          user = {user}
        />
      ) : (
        <Redirect to={{ pathname: "/" , state: { from: location }}} />
      )}
    </Route>
    </>
  );
}
