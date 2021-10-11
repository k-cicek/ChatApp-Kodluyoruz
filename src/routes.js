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
import User from "./pages/Chat/components/Users/User";
import Search from "./pages/Chat/components/LeftSide/Search";
import UserList from "./pages/Chat/components/LeftSide/UserList";
import Settings from "./pages/Chat/components/LeftSide/Settings";


function Routes() {

  return (
    <HashRouter>
      <Redirect to="/login" />
      <Switch>
        <Route path="/chat/:id">
          <div className="chat">
            <div className="left_side">
              <Search />
              <UserList />
              <Settings />
            </div>
            <div className="right_side">
              <User />
            </div>
          </div>
        </Route>
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
