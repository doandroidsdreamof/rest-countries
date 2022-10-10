import React, { useEffect, useState } from "react";


 const PaginationWrapper = ({children}) => {
  useEffect(()=>{
    const showItem = document.querySelector('.showItem');
    setTimeout(()=>{
      showItem.style.display = 'flex';
    },3000)
  },[])

  return (
    <div className='showItem hidden h-12 w-full text-center   justify-center'>
        {children}

    </div>
  )
}


export default PaginationWrapper