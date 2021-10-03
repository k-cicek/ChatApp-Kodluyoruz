import React, { useContext } from "react";
import { UserContext } from "../../../../context/login";

export default function Messages() {
  const { selectedUser } = React.useContext(UserContext);

  return (
    <div className="messages">
      {selectedUser
        ? selectedUser.messages.map((message) => {
            return <div className="message">{message.text}</div>;
          })
        : null}
    </div>
  );
}
