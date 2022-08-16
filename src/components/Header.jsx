import { useState,useEffect } from 'react'

//third-party imports
import { DarkModeToggle } from "react-dark-mode-toggle-2";


const Header = (props) => {
const [ dark, setDark ] = useState()

const darkFunction = () =>{
  setDark(!dark)
  props.darkFunction(!dark)
}

  return (
  <div className={`${dark ? 'bg-dark-blue' : 'bg-lmbg-very-light-gray'}  border-b-2  blur-0 h-20 flex flex-col justify-center  md:px-10  `}>
    <div className="   top-0 relative">
<p className={`${dark ? 'text-white' : 'text-black'} md:text-lg font-NunitoSans font-sixHundred md:top-5 text-xs top-6 absolute  left-4 md:left-20`}><strong>
  Where in the world?
  </strong></p>
<h2 className={`${dark ? 'text-white' : 'text-black' } text-xs md:text-base  relative text-end  top-6 right-24 md:right-32`}>Dark Mode</h2>
<div className=" justify-center flex h-14">
<DarkModeToggle 
      className=" ml-auto right-7 md:right-16 relative top-1 md:top-0 scale-75 md:scale-100 "
      onChange={darkFunction} 
      isDarkMode={dark} 
      size={50} 
    />

</div>
    </div>
    </div>
  )
}

export default Header