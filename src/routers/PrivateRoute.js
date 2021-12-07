import { Route, Redirect, useLocation } from "react-router-dom";
import Head from '../components/Header.jsx';
import Cookies from 'universal-cookie';
// const user = {id: 1, username: "luis50"}

export default function PrivateRoute({ component: Component, ...rest }) {
  const cookies = new Cookies(); 
  // let user = localStorage.getItem['user'];
  // user = JSON.parse(user);
  // console.log(user)
  // const user = true;
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
      {user ? (
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
