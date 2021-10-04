import React from "react";
import { UserContext } from "../../../../context/login";
import { Avatar } from "@material-ui/core";
import MoreHoriz from '@material-ui/icons/MoreHoriz';

export default function UserHeader() {
  const { selectedUser } = React.useContext(UserContext);

  if (!selectedUser) return null;

  return (
    <div className="header">
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
