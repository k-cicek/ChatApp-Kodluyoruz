import React from "react";

export const themes = {
  dark: { background: "#cfcccc" },
  light: { background: "#e8e8e8" },
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;