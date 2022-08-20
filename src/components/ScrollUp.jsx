import { useEffect } from "react";

 const ScrollUp = (props) => {


    useEffect(() =>{
        const upButton = document.querySelector('.scroll-up');
        const upSvg = document.querySelector('.up-svg');
        window.addEventListener('scroll', () => {   
        window.scrollY > 100 ?  upButton.style.display = "block" &&  upSvg.style.display = "block" : upButton.style.display = "none" &&  upSvg.style.display = "block"
     
          });

    },[])

const scrollUpButton = async () => {
    const upButton = document.querySelector('.scroll-up');
    upButton.addEventListener("click", () => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        }); 
      });

}
    
  return (
    <>
    <button onClick={() => scrollUpButton()} type="button" className={`${props.dark ? 'hidden text-red-500 border-red-700 hover:bg-red-700 hover:text-white  dark:border-red-500 dark:text-red-700 dark:hover:text-black focus:outline-none' : 'text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white focus:outline-none'}  scroll-up animate-bounce  border bottom-4 right-6 fixed font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center `}>
    <svg aria-hidden="true" className="up-svg hidden w-5 h-5 -rotate-90"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    </>
   
    
  )
}

export default ScrollUp
