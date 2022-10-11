import { useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import DarkToggle from "./DarkToggle.jsx";
import React from "react";

const Navbar = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  useEffect(() => {}, [theme]);

  function handleDark() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="navbar  bg-lm-white dark:bg-dark-blue w-screen    shadow-md  px-3 md:px-10 border-b   border-gray-300 lg:px-20">
      <div className="flex-1">
        <p className={` text-black md:text-lg md:left-3 dark:text-white left-6 relative  font-NunitoSans font-sixHundred  text-xs `}>
          <strong>Where in the world?</strong>
        </p>
      </div>
      <div className="flex flex-row gap-x-5 ">
        <h2 className={`dark:text-white  text-black text-xs md:text-base font-NunitoSans  relative text-end font-bold md:font-medium `}>{theme === "dark" ? "Dark Mode" : "Light Mode"}</h2>
        <DarkToggle darkMode={handleDark} />
      </div>
    </div>
  );
};

export default Navbar;
