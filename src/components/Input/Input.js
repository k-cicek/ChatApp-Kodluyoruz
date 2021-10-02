import React from "react";

import "./Input.css";

export default function Input({ type, name, onChange, placeHolder }) {
  return <input className="input" type={type} name={name} onChange={onChange} placeHolder={placeHolder}/>;
}
