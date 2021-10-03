import { useContext, useState } from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";

import "./Login.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { UserContext } from "../../context/login";

export default function Login() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const { user, login } = useContext(UserContext);
  const { pathname } = useLocation();

  const handleSubmitLogin = () => {
    login({
      id: Math.random(),
      username,
      firstName,
      lastName,
    });
  };

  if (user && pathname === "/login") return <Redirect to="/chat" />;


  return (
    <div className="login">
      <h1 className="text-fix">Log in to your account</h1>
      <Input
        type="text"
        placeHolder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        type="text"
        placeHolder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <Input
        type="text"
        placeHolder="Last Name"
        onChange={(e) => {
        setLastName(e.target.value);
        }}
      />
      <Button onClick={handleSubmitLogin} text="LOGIN" />
    </div>
  );
}
