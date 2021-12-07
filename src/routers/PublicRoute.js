import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({ component: Component, ...rest }) {
  const auth = true;

  return (
    <Route {...rest}>
      {!auth ? (
        <Component />
      ) : (
        <Redirect to="/dashboard" />
      )}
    </Route>
  );
}