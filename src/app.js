/* eslint-disable no-unused-vars */
import React from "react";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { BrowserRouter, Switch } from "react-router-dom";
import { Browse, Signin, Signup, Home } from "./pages";
import {useAuthListener} from "./hooks";

export default function App() {
  // const user=null;
    const { user } = useAuthListener();
   console.log(user);
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          path={ROUTES.SIGN_IN}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          path={ROUTES.SIGN_UP}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Signup />
        </IsUserRedirect>

        <IsUserRedirect
          path={ROUTES.HOME}
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </BrowserRouter>
  );
}
