import React, { useEffect, useState } from "react";
import Header from './components/Header';
import CountriesInfo from './components/CountriesInfo';
import ScrollUp from "./components/ScrollUp";

import { Puff } from 'react-loading-icons';
import { Routes, Route, useNavigate  } from 'react-router-dom';

function App() {
  const [ countries, setCountries ]  = useState([]);
  const [ single, setSingle ]  = useState([]);
  const [ show, setShowMore ]  = useState(12);
  const [ hideInput, setHideInput ]  = useState(false);
  const [ load, setLoad ]  = useState(false);
  const [ code, setCode ]  = useState();
  const navigate = useNavigate()
  const [dark, setDark] = useState(false);

  useEffect( () => {
    fetchAll()
          setTimeout(() =>{setLoad(true)},2000)
          // wait until items loaded.
          navigate(`/`)  
  }, []);
  //inside function because this used inside multiple places.
  const fetchAll = async  () =>{
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = await response.json();
    await setCountries(jsonResponse)
  } else {
     console.log(response.status, response.statusText);
  }
  }

  const searchCountries = async (getName) => {
    const showAllButton = await document.querySelector('.show-more-button')
    const showAllSpan = await document.querySelector('.show-more-span')
    getName.length == 0 ?  showAllButton.style.display =   "block" :   showAllButton.style.display =   "none" 
    getName.length == 0 ?  showAllSpan.style.display =   "block" :   showAllSpan.style.display =   "none" 
    if(getName.length === 0){
      fetchAll()
      return
 
    }
 else if(getName.length > 2){
  const caseInsensitive =  getName.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
  const filterCountries =   countries.find(items => items.name.common.match(caseInsensitive));
const res = await fetch(`https://restcountries.com/v3.1/name/${getName}`)
 for(let i = 0; i < filterCountries.length; i++ )
 if(filterCountries.name.toLowerCase().charAt(i) !== getName.toLowerCase().charAt(i)) return
     const data = await res.json()
     await setCountries(data)
     return
     
    }
   }
   const filterRegions = async (getRegion) => {
    if(getRegion === "All"){
      fetchAll()
      return
    }else{
      const res = await fetch(`https://restcountries.com/v3.1/region/${getRegion}`)
      const data = await res.json()
      await setCountries(data)
      return
    }

}
   //When click the countris card navigate that page and send data to detail page.
   function singleCountries(country,index){
    navigate(`/${country.cca3}`)
    setSingle([country])
    setCode(index)

  }

  //When page is changed hide there items
  const hideInputArea = async () =>{
    const inputArea =  await document.querySelector('.HiddenWhenNavigate');
    const optArea = await document.querySelector('.HiddenWhenNavigateOpt');
    const svgHide =  await document.querySelector('.hideSvg');
    const buttonBack = await  document.querySelector('.backButton');
    const currentHref = await  window.location.href;
    const check =  currentHref.charAt(currentHref.length - 1);
    if(check === '/'){
       inputArea.style.display = await ""; 
       optArea.style.display = await  ""; 
       svgHide.style.display = await ""; 
       buttonBack.style.display = await"none";
       return
    }
    else{
      inputArea.style.display = await "none"
      optArea.style.display = await  "none"
      svgHide.style.display = await "none"
      buttonBack.style.display = await ""
      return
    }
  }
  hideInputArea()
 
  return (
    <div className={`dark:bg-very-dark-blue bg-lmbg-very-light-gray  h-screen `}>
    <nav  className={load ? " relative   " : `dark:bg-dark-blue dark:border-b-very-dark-blue dark:border-0  border-b-gray-300 bg-white border-2  relative   animate-pulse`}>
    {/* getting data from child component for dark theme state */}
    <Header darkFunction={x => setDark(x)}  />
    </nav>
    <div className={`dark:bg-very-dark-blue bg-lmbg-very-light-gray flex flex-col md:flex-wrap translate-y-7   px-10`}>
    <label className={`dark:text-gray-300 text-gray-900   mb-2 text-sm font-medium  sr-only `}>Search</label>
    <div class="relative">
        <div className={`dark:text-white text-red-200 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none`}>
            <svg aria-hidden="true" className={`dark:text-gray-400 text-gray-500  hideSvg md:left-14 md:z-20 md:relative w-5 h-5 `} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search"  className={`dark:text-white dark:bg-dark-blue  dark:border-gray-500 text-gray-900 bg-gray-50  border-gray-300  HiddenWhenNavigate animation block md:w-1/3 md:left-14 md:relative p-4 pl-10 w-full  text-sm  rounded-lg border focus:ring-blue-500`} placeholder="Search a country..." onChange={(getName) =>searchCountries(getName.target.value) }/>
    </div>
      <select className={`dark:bg-dark-blue dark:text-white bg-white  HiddenWhenNavigateOpt focus:ring-blue-500 focus:ring-2 mr-auto my-5 md:-translate-y-4 md:right-24 p-3 font-NunitoSans block md:absolute shadow-md rounded-md cursor-pointer`} onChange={(getRegion) =>filterRegions(getRegion.target.value) }>
      <option value="Filter by Region" disabled>Filter by Region</option>
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
    </div>
    <Routes>
    <Route  path="/"
           element={
            <>
           <div className={`bg-lmbg-very-light-gray dark:bg-very-dark-blue  grid md:grid-cols-3 lg:grid-cols-4 gap-2  justify-center gap-x-0 px-16 md:px-auto  lg:px-auto object-cover `}>
           {countries.slice(0,`${show}`).map((country,index) =>{
             return (
              <main>
             <div key={country.name} onClick={() => { singleCountries(country,index); setHideInput(!hideInput)}} className={!load ? 'animate-pulse   translate-y-14 shadow-2xl  space-y-4 md:w-eighty space-x-2 rounded-md md:mr-auto md:ml-auto  cursor-pointer relative left-0 h-nintyFive hover:opacity-75 hover:shadow-2xl  bg-lm-elements-white   flex flex-col items-center ' : ` dark:bg-dark-blue bg-lmelements-white translate-y-14 shadow-2xl space-y-4 md:w-eighty space-x-2 rounded-md md:mr-auto md:ml-auto   cursor-pointer relative left-0 h-nintyFive hover:opacity-75 hover:shadow-2xl   object-cover  flex flex-col items-center `} >
             <img className={!load ? 'opacity-0' : "object-cover max-h-36 w-full rounded-t-md"} 
               src={country.flags.png} 
               alt={country.cca3} 
               />
               <svg class={load ? 'hidden' : `absolute scale-50 sw-full rounded text-gray-200`}xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg>
               <Puff className={!load ? " absolute top-1/3 "  : "hidden"}  stroke="black" size={70} strokeOpacity={.125} />
               <div className={!load ? "opacity-0 w-full p-4" : `w-full p-3`}>
               <h1  className={` dark:text-white text-black text-xl   font-sixHundred`}> {country.name.common}</h1>
               <h3  className={` dark:text-white  text-black text-base   pt-1`}><strong>Population:</strong> {new Intl.NumberFormat().format(country.population)}</h3>
               <h3  className={` dark:text-white  text-black text-base   pt-1 `}><strong>Region:</strong> {country.region}</h3>
               <h3  className={` dark:text-white  text-black text-base pt-1 pb-3 md:pb-5`  }><strong>Capital:</strong> {country.capital ? country.capital : "None"}</h3>               
               </div>          
           </div>
           </main>
             );
           }) } 
           </div>
           <div onClick={() => setShowMore(show === 12 ? 250 : 12)} className={!load ? "hidden " : `dark:bg-very-dark-blue pt-10 pb-1  bg-lmbg-very-light-gray `}>
           <button className={`show-more-button relative   inline-flex -translate-x-1/2 left-1/2 items-center justify-center p-1  mb-2 mt-16 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white`}>
           <span className={`dark:bg-dark-blue dark:text-white bg-white text-black show-more-span relative font-NunitoSans px-10 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0`}>
               {show === 12 ? 'Show All' :  "Show Less"}
               </span>
              </button>
           </div>
        
           </>
           
             }
            />
            <Route
             path={`/:${code}`}
             element={<CountriesInfo country={single} sentLoad={load} darkTheme={dark}  key={code} /> }  />      
    </Routes>
    <ScrollUp dark={dark} />
    </div>
 
  );
}

export default App;