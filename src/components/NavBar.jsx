import React, { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import DarkToggle from "./DarkToggle.jsx";

const Navbar = (props) => {
  const [dark, setDark] = useState();


  return (
    <div className="navbar shadow-md  px-3 md:px-10 border-b bg-lmbg-very-light-gray  border-gray-300 lg:px-20">
      <div className="flex-1">
        <p className={` text-black md:text-lg md:left-3  left-6 relative  font-NunitoSans font-sixHundred  text-xs `}>
          <strong>Where in the world?</strong>
        </p>
      </div>
      <div className="flex flex-row gap-x-5 ">
        <h2 className={`  text-black text-xs md:text-base font-NunitoSans  relative text-end `}>Dark Mode</h2>

        <DarkToggle />
      </div>
    </div>
  );
};

export default Navbar;


/*
  const { theme, setTheme } = React.useContext(ThemeContext);

  const darkFunction = () => {
    setDark(!dark);
    props.darkFunction(!dark);
    setTheme(theme === "dark" ? "light" : "dark");
  };


  */