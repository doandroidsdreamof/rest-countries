import React from 'react'

 const CountriesDetailFlag = ({flag,nameFirst,nameSecond}) => {

  return (
 
    <img className={nameFirst === 'Nepal' ?  `object-cover object-center rounded w-fit shadow-lg` :   `shadow-lg object-cover object-center rounded w-full `}  
          src={flag} 
          alt={nameFirst ? nameFirst : nameSecond} 
          />
  )
}

export default CountriesDetailFlag;