import React, { useContext, useState } from "react";
import { Button, Input } from "../../../../components";
import { UserContext } from "../../../../context/login";

export default function MessageForm() {
  const { handleSendNewMessage } = useContext(UserContext);
  const [message, setMessage] = useState("");

  return (
    <div className="message_from">
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
