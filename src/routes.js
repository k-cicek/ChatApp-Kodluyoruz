import React from "react";
import {
  HashRouter,
  Redirect,
  Link,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

function Routes() {

  return (
    <HashRouter>
      <Redirect to="/login"/>
      <Switch>
      <Route path="/login">
          <Login />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Routes;
