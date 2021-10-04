import React from "react";
import {
  BrowserRouter as Router,
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
    <Router>
      <Switch>
      <Route path="/login">
          <Login />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
