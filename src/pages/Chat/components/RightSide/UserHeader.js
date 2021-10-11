import React, { useContext } from "react";
import { UserContext } from "../../../../context/login";
import { Avatar } from "@material-ui/core";
import ThemeContext from "../../../../context/themContext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import User from "../Users/User";

export default function UserHeader(clicked, onClickHandler) {
  const { selectedUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { path, url } = useRouteMatch();

  if (!selectedUser) return null;

  console.log("object", selectedUser.id);

  return (
    <div style={theme} className="header">
      <div className="avatar">
        <Avatar />

        {`${selectedUser?.first_name} ${selectedUser?.last_name}`}
      </div>

      <div className="avatar_user">
        <NavLink to={`${url}/${selectedUser.id}`}>
          <MoreHorizIcon className="moreicon" />
        </NavLink>
      </div>

      <Switch>
        <Route path="/chat/:id">
          <User />
        </Route>
      </Switch>
    </div>
  );
}
