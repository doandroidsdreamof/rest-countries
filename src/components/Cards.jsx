import React from "react";
import { useEffect, useState } from "react";
import { Puff } from "react-loading-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link, useNavigate } from "react-router-dom";

const Cards = ({ load, currentCards }) => {

  useEffect(() =>{


  },[currentCards])


  return (
    <>
      {currentCards.map((country, id) => (
        <Link to={`/details/${country.cca3}`} >
          <div className={!load ? "hidden" : " card  dark:bg-dark-blue  rounded-md cursor-pointer duration-400 hover:scale-100 ease-in hover:animate-pulse hover:shadow-2xl transition-all  scale-95   h-full shadow-md"}>
            <div className="  h-44 w-fit">
              <LazyLoadImage key={id} effect="opacity " className={!load ? "opacity-0 " : "z-0  h-44 w-screen object-cover"} src={country.flags.png} alt={country.cca3} />
            </div>
            <div className="card-body px-2 py-6">
              <h1 className={`dark:text-white  text-gray-700  text-2xl`}> {country.name.common}</h1>
              <h3 className={` dark:text-gray-200   text-gray-700 text-sm   `}>
                <strong>Population:</strong> {new Intl.NumberFormat().format(country.population)}
              </h3>
              <h3 className={` dark:text-gray-200    text-gray-700 text-sm   `}>
                <strong>Region:</strong> {country.region}
              </h3>
              <h3 className={`dark:text-gray-200   text-gray-700 text-sm`}>
                <strong>Capital:</strong> {country.capital ? country.capital : "None"}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Cards;
