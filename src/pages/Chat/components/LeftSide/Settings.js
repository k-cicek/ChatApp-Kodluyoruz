import React, { useContext } from "react";
import { UserContext } from "../../../../context/login";
import ThemeContext, { themes } from "../../../../context/themContext";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export default function Settings() {
  const { logout } = useContext(UserContext);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={theme} className="settings">
      <button onClick={toggleTheme} className="button-logout">
        <NightsStayIcon/>
      </button>
      <button onClick={logout} className="button-logout">
        <ExitToAppIcon/>
      </button>
    </div>
  );
}
