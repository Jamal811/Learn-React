import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
//header
const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <header className={isDarkMode ? "dark" : "light"}>
      <h1>Theme Toggler</h1>
      <button onClick={handleToggle}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
