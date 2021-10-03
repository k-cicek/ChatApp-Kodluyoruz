import React, { useContext } from "react";
import Button from "../../../../components/Button/Button";
import { UserContext } from "../../../../context/login";

export default function Settings() {
const { logout } = useContext(UserContext);

  return <div className="settings">
    <Button text="Log Out" onClick={logout}/>
    <Button text="Log Out" onClick={logout}/>
  </div>;
}
