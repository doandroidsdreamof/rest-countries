import React from "react";

const SearchInput = (prop) => {
  return (
    <>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium  text-gray-900  sr-only">
          Search
        </label>
        <div className="relative  ">
          <div className="flex absolute  inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 `dark:text-gray-400 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input   onChange={(getName) => prop.search(getName.target.value)} type="search" id="default-search" className="dark:bg-dark-blue dark:text-white border block p-4 pl-10 w-full text-sm   rounded-lg    text-gray-900 bg-white   border-gray-300   focus:ring-blue-500 focus:border-blue-500    dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a country..." required=""  />
        </div>
  
    </>
  );
};

export default SearchInput;
