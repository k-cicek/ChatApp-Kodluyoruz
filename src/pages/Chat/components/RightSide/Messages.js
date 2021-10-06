import React, { useContext } from "react";
import { UserContext } from "../../../../context/login";
import ThemeContext from "../../../../context/themContext";

export default function Messages() {
  const { user, selectedUser } = React.useContext(UserContext);

  const { theme } = useContext(ThemeContext);


  return (
    <div className="messages"style={theme}>
      {selectedUser
        ? selectedUser.messages.map((message) => {
            return (
              <div
                className={`message-area ${
                  message.sender === user.id ? "user-me" : ""
                }`}
              >
                <div className="message"  >{message.text}</div>
              </div>
            );
          })
        : null}
    </div>
  );
}
