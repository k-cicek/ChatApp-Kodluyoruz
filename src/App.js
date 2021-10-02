import React, { useState, useEffect } from "react";
import { UserContext } from "./context/login";
import Routes from "./routes";

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState({
    id: 1,
    firstName: "Kevser",
  });

  const login = (username) => {
    setUser(user);
    localStorage.setItem("user_name", JSON.stringify(user));
  };

  const logout = () => {};

  const handleSetSelectedUser = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem("username");

    if (userNameFromStorage) {
      const userObject = JSON.parse(userNameFromStorage);
      console.log(userObject);
      setUser(userObject);
    }
  }, []);

  return (
    <>
     <UserContext.Provider
      value={{
        user,
        selectedUser,
        login,
        logout,
      }}
    >
      <Routes />
    </UserContext.Provider>
    </>
   
  );
}

export default App;
