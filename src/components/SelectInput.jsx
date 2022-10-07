import React from 'react'

 const SelectInput = (prop) => {

  return (
    <select onChange={(getRegion) => prop.onChange(getRegion.target.value)} className={`select focus:select-primary w-full max-w-xs md:max-w-sm   bg-white   font-NunitoSans shadow-md rounded-md cursor-pointer`} >
    <option value="Filter by Region" disabled>Filter by Region</option>
    <option value="All">All</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>


  )
}


export default SelectInput;