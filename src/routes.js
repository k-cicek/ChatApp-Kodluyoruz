import React from "react";
import {
  HashRouter,
  Redirect,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import useLogin from "./hooks/useLogin";
import Login from "./pages/Login/Login";
import Chat from "./pages/Chat/Chat";

function Routes() {

  return (
    <HashRouter>
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Routes;
