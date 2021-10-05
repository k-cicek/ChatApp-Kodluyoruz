import React, { useContext } from "react";
import { UserContext } from "../../../../context/login";
import { Avatar } from "@material-ui/core";
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import ThemeContext from "../../../../context/themContext";

export default function UserHeader() {
  const { selectedUser } = React.useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);


  if (!selectedUser) return null;

  return (
    <div style={theme} className="header">
      <div className="avatar">
        <Avatar />
      </div>
      {`${selectedUser?.first_name} ${selectedUser?.last_name}`}
      <div className="avatar2">
        <MoreHoriz/>
      </div>
    </div>
  );
}
