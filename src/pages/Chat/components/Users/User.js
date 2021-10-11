import React, { useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import VideocamIcon from "@material-ui/icons/Videocam";
import CallIcon from "@material-ui/icons/Call";
import Avatar from "@mui/material/Avatar";

import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context/login";

export default function User() {
  const { selectedUser } = useContext(UserContext);

  return (
    <div className="user_info">
      <div className={`close-button`}>
        <Link to="/chat">
          <CloseIcon />
        </Link>
      </div>
      <div className="user_info_user">
        <Avatar sx={{ width: 120, height: 120 }} />
        <div className="user-info_user-name">
          {selectedUser.first_name + " "}
          {selectedUser.last_name}
        </div>
        <p>Last Seen 2 Hours Ago!</p>
      </div>
      <div className="user_details">
        <div className="user_icon">
          <VideocamIcon />
          <p>Message</p>
        </div>
        <div className="user_icon">
          <CallIcon />
          <p>Call</p>
        </div>
        <div className="user_icon">
          <ChatBubbleIcon />
          <p>Video</p>
        </div>
      </div>
    </div>
  );
}
