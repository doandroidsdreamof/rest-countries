import React from 'react'
import { useEffect, useState } from "react";

const DetailsContentFirst = ({nameFirst,nameSecond,nameThird,population,region,subRegion,capital}) => {

const [parseNative,setParseNative] = useState([]);

/*
console.log('second content nameFirst',nameFirst)
console.log('second content nameSecond',nameSecond)
console.log(' second content nameThird',nameThird)
console.log(' second content population',population)
console.log(' second content region',region)
console.log(' second content subRegion',subRegion)
console.log(' second content capital',capital)
*/

  useEffect(() =>{
    parseNativeName(nameThird)

  },[nameThird])


function parseNativeName(native){
  let parse = [];
  for(let x in native){
    parse.push(native[x].common)
  }

  setParseNative(parse)

}



return (
<>
    <h1  className={`  text-black  md:mt-4   md:text-2xl text-xl  font-bold`}>{nameFirst ? nameFirst : nameSecond }</h1>
    <p   className={` text-gray-800 text-sm `}>Native Name: { parseNative[0]  ? parseNative[0] : 'none' }</p>
    <p   className={` text-gray-800 text-sm `}>Population: {population != 'none' ? new Intl.NumberFormat().format(population) : 'none' }</p>
    <p   className={` text-gray-800 text-sm `}>Region: {region ? region : 'none'}</p>
    <p   className={` text-gray-800  text-sm`}>Sub Region: {subRegion ? subRegion : 'none'}</p>
    <p   className={` text-gray-800 text-sm `}>Capital: {capital ? capital : 'none'}</p>


</>
  )
}


export default DetailsContentFirst;


