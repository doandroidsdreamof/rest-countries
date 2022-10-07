import React from "react";

const CardGrid = (props) => {
  

  return (
    <div className={`card-place   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-evenly gap-2  lg:gap-x-6 lg:gap-y-10 lg:px-20    px-6 md:px-10 `}>
      {props.cards}
{ props.skeleton}
  
    </div>
  );
};

export default CardGrid;
