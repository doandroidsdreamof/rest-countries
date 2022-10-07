import React from "react";
import { useNavigate } from "react-router-dom";

const DetailBackButton = () => {
  const navigate = useNavigate();

  return (
<button onClick={() => navigate("/")} type="button" className="text-gray-700 bg-white shadow-lg  ease-in duration-200 hover:scale-105 hover:shadow-xl hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center inline-flex items-center flex-row-reverse ">
    Back
    <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5 rotate-180 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</button>
  );
};
export default DetailBackButton;

/*
dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-gray-800

*/
