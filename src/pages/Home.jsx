import React, { useEffect, useState } from "react";
import Cards from "../components/Cards.jsx";
import CardGrid from "../layouts/CardGrid.jsx";
import SelectInput from "../components/SelectInput.jsx";
import SearchInput from "../components/SearchInput.jsx";
import ScrollUp from "../components/ScrollUp.jsx";
import NavBar from "../components/NavBar.jsx";
import InputsWrapper from "../layouts/InputsWrapper.jsx";
import Skeleton from "../components/Skeleton.jsx";
import PaginationWrapper from "../layouts/PaginationWrapper.jsx";
import Paginate from "../components/Paginate.jsx";

const Home = ({ countries, load }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const [currentCards, setCurrentCards] = useState([]);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  useEffect(() => {
    setCurrentCards(countries.slice(indexOfFirstCard, indexOfLastCard));
  }, [countries, currentPage, cardsPerPage]);

  const handlePageChange = (page, value) => {
    let getValue = value;
    const currentValue = Math.ceil(parseInt(getValue));
    setCurrentPage(page);
    setCurrentPage(currentValue);
  };
  const handleSelect = (e) => {
    if (e === "All") {
      setCurrentCards(countries.slice(indexOfFirstCard, indexOfLastCard));
      return;
    } else {
      let selectFilter = countries.filter((el, i) => el.region.includes(e));
      setCurrentCards(selectFilter.slice(indexOfFirstCard, indexOfLastCard));
    }
  };

  const searchCountries = async (e) => {
    let getInput = e;
    if (getInput === 0) {
      return;
    }
    if (getInput.length > 2) {
      const caseInsensitive = await getInput
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
      const filterCountries = await countries.find((items) => items.name.common.match(caseInsensitive));
      const res = await fetch(`https://restcountries.com/v3.1/name/${getInput}`);
      const data = await res.json();
      if(data.status !== 404)
      console.log(data.name)

   
    

         
      

    }
  };





  return (
    <div className={` bg-lmbg-very-light-gray  gap-y-8 flex flex-col  `}>
      <NavBar />
      <InputsWrapper select={<SelectInput onChange={handleSelect} />} search={<SearchInput search={searchCountries} />} />
      <CardGrid skeleton={<Skeleton load={load} key={currentCards.length} n={currentCards.length} />} cards={<Cards key={currentCards.length} currentCards={currentCards} load={load} />} />

      <ScrollUp load={load} />
      <div className={load ? "block" : "hidden"}>
        <PaginationWrapper>
          <Paginate handleChange={handlePageChange} />
        </PaginationWrapper>
      </div>
    </div>
  );
};

export default Home;

/*

    let filterArr = countries.find((el, i) => el.name.official.toLowerCase().includes(getInput.toLowerCase()));
      


  currentCards.shift(i);
  currentCards.unshift(filterArr);


  setCurrentCards(currentCards.slice(indexOfFirstCard, indexOfLastCard));
  console.log(currentCards)


  */
