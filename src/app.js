import React from "react";
import * as ROUTES from "./constants/routes";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {Browse, Signin, Signup, Home} from "./pages"
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.BROWSE} component = {Browse}/>
        <Route path={ROUTES.SIGN_IN} component = {Signin}/>
        <Route path={ROUTES.SIGN_UP} component = {Signup}/>
        <Route path={ROUTES.HOME} exact component = {Home}/>
      </Switch>
    </BrowserRouter>
  );
}


