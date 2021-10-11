import React, { useContext } from "react";
import { Input } from "../../../../components";
import ThemeContext from "../../../../context/themContext";

export default function Search({ searchText, handleOnChange }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={theme}>
      <div className="search">
        <Input
          placeHolder="Search"
          type="text"
          style={theme}
          onChange={(e) => {
            handleOnChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
