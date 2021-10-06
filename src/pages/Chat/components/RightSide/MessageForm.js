import React, { useContext, useState } from "react";
import { Button, Input } from "../../../../components";
import { UserContext } from "../../../../context/login";
import ThemeContext, { themes } from "../../../../context/themContext";

export default function MessageForm() {
  const { handleSendNewMessage } = useContext(UserContext);
  const [message, setMessage] = useState("");

  const { theme } = useContext(ThemeContext);

  return (
    <div className="message_from" style={theme} >
      <Input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeHolder="Send new message"
      />
      <Button
        text="Send"
        onClick={() => {
          handleSendNewMessage(message);
          setMessage("");
        }}
      />
    </div>
  );
}
