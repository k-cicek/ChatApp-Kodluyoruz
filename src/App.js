import React, { useState, useEffect } from "react";
import { UserContext } from "./context/login";
import Routes from "./routes";

import mockUserList from "./mock-users.json";

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userList, setUserList] = useState(mockUserList.users);

  const login = (user) => {
    setUser(user);
    localStorage.setItem("user_name", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("username");
  };

  const handleSetSelectedUser = (userId) => {
    const user = userList.find((u) => u.id === userId);
    if (user) setSelectedUser(user);
  };

  const handleSendNewMessage = (messageText) => {
    setSelectedUser({
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        {
          id: Math.random(),
          text: messageText,
          sender: user.id,
        },
      ],
    });
  };

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem("username");

    if (userNameFromStorage) {
      const userObject = JSON.parse(userNameFromStorage);
      setUser(userObject);
    }
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          selectedUser,
          setSelectedUser: handleSetSelectedUser,
          userList,
          login,
          logout,
          handleSendNewMessage,
        }}
      >
        <Routes />
      </UserContext.Provider>
    </>
  );
}

export default App;
