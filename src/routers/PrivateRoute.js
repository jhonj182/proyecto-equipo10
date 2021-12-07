import { Route, Redirect, useLocation } from "react-router-dom";
import Head from '../components/Header.jsx';

// const user = {id: 1, username: "luis50"}

export default function PrivateRoute({ component: Component, ...rest }) {
  const user = true;
  const location = useLocation();

  return (
    <>
    <Head />
    <Route {...rest}>
      {user ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login" , state: { from: location }}} />
      )}
    </Route>
    </>
  );
}
