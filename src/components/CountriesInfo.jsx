import React, { useEffect, useState } from "react";

//third-party imports
import {  useNavigate  } from 'react-router-dom'
import getCountryISO2 from 'country-iso-3-to-2'

const CountriesInfo = ({country,sentLoad,darkTheme}) => {
const [ borders, setBorders ]  = useState([]);
const [ raw, setRaw ]  = useState([]);
const [ countries, setCountries ] = useState([...country])
const navigate = useNavigate()

useEffect(() =>{

    // check item data type if it is undefined return string
    countries.map((items,index)=>{
      items.borders !== undefined  ?  setBorders(items.borders) : setBorders(["None"])  
      items.borders !== undefined ? setRaw(items.borders) : setRaw(["None"])    
    })
  
},[])

const renderComponent = async (items,index,arr,raw) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${raw[index]}`)
  const data = await res.json()
   await setCountries(data)
   await navigate(`/${raw[index]}`)
   data.map((items,index)=>{
    items.borders !== undefined ?  setBorders(items.borders) : setBorders(["None"])  
    items.borders !== undefined ? setRaw(items.borders) : setRaw(["None"])    
  })
  
  }

//getCountryISO2 for covnert country code 3 digit to 3 digit after that convert code to country name.
const convertBorders = async (borders) =>{
let parseBorder = await []
let convertedArr = await [];
const regionNames =  new Intl.DisplayNames(
  ['en'], {type: 'region'}
);
for(let i = 0; i < borders.length; i++){
if(borders == 'None'){
  return
}else{
  parseBorder.push(getCountryISO2(borders[i])) 
  let convertedBorders =  regionNames.of(`${parseBorder[i]}`)
  convertedArr.push(convertedBorders)
  

}
 setBorders(convertedArr)

}
}
convertBorders(borders)

  return (
    <div className={!sentLoad  ? ' blur-xl transition-all ease-out   ' : `${darkTheme ? 'bg-very-dark-blue' : 'bg-lmbg-very-light-gray' } blur-0  h-screen justify-center pb-40 md:flex grid  md:px-10 items-center`}>                                   
      <div className=" relative left-10    md:absolute top-0 w-3/6 md:left-0 ">
      <button onClick={() => navigate('/')}  className= 
        {`${darkTheme ? 'bg-dark-blue text-white   border-gray-700 hover:bg-gray-700' : ' text-gray-900 bg-gray-50  border-gray-300 hover:bg-gray-200' } backButton rounded-lg border  lg:translate-x-5 block md:w-1/3 md:left-14 sm:ml-8 md:relative h-10 lg:w-1/5 px-3 pl-5 w-ful shadow-lg  text-center  cursor-pointer z-50    w-28   mr-auto my-5`} >    <svg aria-hidden="true" className={`${darkTheme ? 'fill-white  ' : 'fill-black' }  h-5 rotate-180  absolute mt-1 -translate-x-1`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        Back</button>

      </div>
       { countries.map((get,index)=>{
        return(
          <>
    <img className={`object-cover md:-left-4 translate-y-8 md:translate-y-0 relative md:m-auto h-auto w-seventy md:w-1/3 md:px-0 m-auto shadow-md rounded-t-md `}  
          key={index}
          src={get.flags.png} 
          alt={get.name.common || get.name.official} 
          />
          <div className={`${darkTheme ? 'bg-very-dark-blue' : 'bg-lmbg-very-light-gray' } pt-10  pl-16 space-y-4  md:m-auto  `}>
          <h1  className={`${darkTheme ? md:text-4xl text-2xl  font-sixHundred`}>{get.name.common !== undefined ? get.name.common : get.name.official  }</h1>
          <p   className={`${darkTheme ? 'text-white' : 'text-black' } t text-base `}><strong>Native Name: </strong> { get.cca3 === "ATA" || "BVT" ? get.name.common : get.name.nativeName[Object.keys(get.name.nativeName)[0]].common !== undefined ? get.name.nativeName[Object.keys(get.name.nativeName)[0]].common : "None"  }</p>
          <p   className={`${darkTheme ? 'text-white' : 'text-black' } text-base `}><strong>Population: </strong>{new Intl.NumberFormat().format(get.population)}</p>
          <p   className={`${darkTheme ? 'text-white' : 'text-black' } text-base `}><strong>Region: </strong>{get.region}</p>
          <p   className={`${darkTheme ? 'text-white' : 'text-black' } text-base `}><strong>Sub Region: </strong>{ get.subregion !== undefined   ? get.subregion : "None"}</p>
          <p   className={`${darkTheme ? 'text-white' : 'text-black' } text-base `}><strong>Capital: </strong>{ get.capital !== undefined ? get.capital : "None"}</p>
          </div>
         <div  className={`${darkTheme ? 'bg-very-dark-blue' : 'bg-lmbg-very-light-gray' } space-y-4   pl-16 pt-4 md:m-auto `}>
          <p   className={`${darkTheme ? 'text-white' : 'text-black' } text-base `}><strong>Top Level Domain: </strong>{get.tld}</p>
          <p   className={`${darkTheme ? 'text-white' : 'text-black' } text-base `}><strong>Currencies: </strong>{ get.cca3 === "ATA" || "BVT" ? "None" :   get.currencies[Object.keys(get.currencies)[0]].name !== undefined  ? get.currencies[Object.keys(get.currencies)[0]].name  : "None"}</p>
          <p   className={`${darkTheme ? 'text-white' : 'text-black' } text-base `}><strong>Languages: </strong>{ get.cca3 === "BVT" ? get.languages[Object.keys(get.languages)[0]]  :  get.cca3 === "ATA"   ? get.languages || "None" : get.languages[Object.keys(get.languages)[0]] !== undefined  ? get.languages[Object.keys(get.languages)[0]] : "None"}</p>
          <div className={`${darkTheme ? 'bg-very-dark-blue text-white' : 'bg-lmbg-very-light-gray text-black' } text-base  max-w-sm gap-y-3  flex mr-auto flex-wrap gap-x-3 `}><strong>Border Countries: </strong>
     {raw && borders.map((items,arr,index) =>{
      return(
       <button onClick={() => renderComponent(items,arr,index,raw)} className={borders != "None" ? `${darkTheme ? 'text-white bg-dark-blue border-none hover:bg-gray-600' : 'text-gray-900 bg-gray-50 hover:bg-gray-200' }  px-3 pl-3  shadow-lg  text-center  cursor-pointer z-50    w-auto   rounded-sm border border-gray-300` : `border-none cursor-default bg-none`}>{items ? items : "None"}</button>
       
      );
     })}
        </div>
          </div>
          </>
        
        );
        
       })}
           </div>

  )
}


export default CountriesInfo


