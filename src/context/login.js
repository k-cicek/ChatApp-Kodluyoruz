import React from "react";

export const UserContext = React.createContext({
  selectedUser: null,
  setSelectedUser: () => {},
  user: null,
  userList: [],
  login: () => {},
  logout: () => {},
  handleSendNewMessage: () => {},
});
