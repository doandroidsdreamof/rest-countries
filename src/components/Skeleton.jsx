import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";

const Skeleton = ({ load,n }) => {
  
useEffect(() =>{

},[load])
  return (
    <>
      {[...Array(n)].map((e, i) => (
        <div key={i} className={load ? "hidden" : "w-full h-full rounded-md shadow-md animate-pulse z-50 "}>
          <div className="h-48 rounded-t bg-gray-200 dark:bg-gray-700"></div>
          <div className=" px-4 py-8 space-y-4  sm:p-8 dark:bg-gray-900">
            <div className="w-full h-6 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-full h-6 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-3/4 h-6 rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Skeleton;

