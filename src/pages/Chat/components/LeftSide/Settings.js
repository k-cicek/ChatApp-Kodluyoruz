import React, { useContext } from "react";
import Button from "../../../../components/Button/Button";
import { UserContext } from "../../../../context/login";
import ThemeContext, { themes} from "../../../../context/themContext";


export default function Settings() {
const { logout } = useContext(UserContext);

const { theme, toggleTheme } = useContext(ThemeContext);

  return <div style={theme} className="settings">
    <Button text="" onClick={toggleTheme}/>
    <Button text="Log Out" onClick={logout}/>
  </div>;
}
