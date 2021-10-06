import React, { useState, useEffect } from "react";
import { UserContext } from "./context/login";
import Routes from "./routes";

import mockUserList from "./mock-users.json";
import ThemeContext, { themes } from "./context/themContext";

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userList, setUserList] = useState(mockUserList.users);
  const [theme, setTheme] = useState(themes.dark);

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
    const newSelectedUser = {
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        {
          id: Math.random(),
          text: messageText,
          sender: user.id,
        },
      ],
    };
    setSelectedUser(newSelectedUser);
    const newUserList = userList.map((u) => {
      if (u.id === selectedUser.id) return newSelectedUser;
      else return u;
    });
    setUserList(newUserList);
  };

  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
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
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
      </ThemeContext.Provider>
    </>
  );
}

export default App;
