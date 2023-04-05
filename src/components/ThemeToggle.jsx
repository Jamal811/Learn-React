import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
//toggletheme
const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#1f2937" : "#f3f4f6";
    document.body.style.color = isDarkMode ? "#f3f4f6" : "#1f2937";
  }, [isDarkMode]);

  return (
    <button
      className={`btn btn-${isDarkMode ? "dark" : "primary"} rounded-pill`}
      onClick={handleToggle}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
