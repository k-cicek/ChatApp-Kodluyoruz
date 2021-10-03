import React, { useState, useContext } from "react";
import Search from "./components/LeftSide/Search";
import Settings from "./components/LeftSide/Settings";
import UserList from "./components/LeftSide/UserList";
import MessageForm from "./components/RightSide/MessageForm";
import Messages from "./components/RightSide/Messages";
import UserHeader from "./components/RightSide/UserHeader";

import "./Chat.css";
import { UserContext } from "../../context/login";
import { Redirect} from "react-router";

export default function Chat() {
  const {user} = useContext(UserContext)
  const [search, setSearch] = useState("");

  if(!user) return <Redirect to="/login" />

  return (
    <div className="chat">
      <div className="left_side">
        <Search searchText={search} handleOnChange={setSearch}/>
        <UserList searchText={search}/>
        <Settings />
      </div>
      <div className="right_side">
        <UserHeader />
        <Messages />
        <MessageForm />
      </div>
    </div>
  );
}
