import React from "react";

const DetailLayout = (props) => {
  
  return (
    <section className="  bg-lm-bg-gray dark:bg-very-dark-blue w-screen h-screen">
      <div className=" mx-auto flex md:flex-row bg-lm-bg-gray dark:bg-very-dark-blue    justify flex-col items-center  w-screen ">
        <div className="lg:max-w-lg  lg:w-full flex flex-col md:ml-auto  mx-auto  md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div className="pb-5 mt-8 w-full top-0   ">{props.DetailBackButton}</div>
          {props.CountriesDetailFlag}
        </div>
        <div className="flex flex-col   md:flex-row mx:auto md:mt-28 lg:mt-8 md:mr-auto   gap-y-6  md:w-1/3  w-5/6  ">
          <div className="lg:flex-grow gap-y-3    flex flex-col md:items-start text-left  mx-auto   w-full  ">
            {props.DetailsContentFirst}
            <div className="md:flex hidden   "> {props.countriesBorder}</div>
            </div>
          <div className="lg:flex-grow md:translate-y-12  md:w-fit translate-y-0  gap-y-3  flex flex-col md:items-start text-left   mx-auto  w-full  ">
            {props.DetailsContentSecond}
            <div className="flex md:hidden "> {props.countriesBorder}</div>

          </div>
        </div>



      </div>
    </section>
  );
};

export default DetailLayout;
