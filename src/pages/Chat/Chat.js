import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Chat() {
  const { push } = useHistory();
  return (
    <div>
      <h1>Chat</h1>
      <Link to="/chat/user">Go to user</Link>
      {/* <button
        onClick={() => {
          push("/chat/user");
        }}
      >
        Go to user
      </button> */}
    </div>
  );
}
