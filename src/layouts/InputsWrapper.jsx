import React from "react";

const InputsWrapper = ( props ) => {
  return (
    <div className=" flex flex-col md:flex-row w-full gap-y-5 justify-between px-6 md:px-10 lg:px-20">
      <div className='search-place  ml-2  w-full md:w-thirty'>
        {props.search}
        </div>

      <div className='selection-place ml-2 md:ml-0 mr-2'>
        {props.select}
        </div>
    </div>
  );
};

export default InputsWrapper;
