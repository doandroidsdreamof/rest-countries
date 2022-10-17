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
    setCurrentCards(countries);
    const hidePagination = document.querySelector(".hide-on-search");
    hidePagination.style.display = "block";
  }, [countries]);

  const handlePageChange = (page, value) => {
    let getValue = value;
    const currentValue = Math.ceil(parseInt(getValue));
    setCurrentPage(page);
    setCurrentPage(currentValue);
  };
  const handleSelect = (e) => {
    const hidePagination = document.querySelector(".hide-on-search");
    if (e === "All") {
      setCurrentCards(countries);
      setCurrentPage(1);
      hidePagination.style.display = "block";
      setCardsPerPage(20);
      return;
    } else {
      let selectFilter = countries.filter((el, i) => el.region.includes(e));
      setCurrentCards(selectFilter);
      setCurrentPage(1);
      setCardsPerPage(selectFilter.length);
      console.log(selectFilter.length);
      hidePagination.style.display = "none";
    }
  };

  const searchCountries = (e) => {
    let getInput = e;
    const hidePagination = document.querySelector(".hide-on-search");
    hidePagination.style.display = "none";
    let findItems = countries.filter((el, i) => el.name.official.toLowerCase().includes(getInput.toLowerCase()));
    if (findItems.length > 0) {
      let parseArr = Array(cardsPerPage).fill(findItems);
      setCurrentCards(parseArr[0]);
    }
    if (getInput.length === 0) {
      hidePagination.style.display = "block";
      setCurrentPage(1);
      setCardsPerPage(20);

    }
  };

  return (
    <main className="bg-lm-bg-gray dark:bg-very-dark-blue overflow-x-hidden">
      <div className={` bg-lm-bg-gray dark:bg-very-dark-blue   gap-y-8 flex flex-col  `}>
        <NavBar />
        <InputsWrapper select={<SelectInput onChange={handleSelect} />} search={<SearchInput search={searchCountries} />} />
        <CardGrid skeleton={<Skeleton load={load} n={cardsPerPage} />} cards={<Cards currentCards={currentCards.slice(indexOfFirstCard, indexOfLastCard)} load={load} />} />
        <ScrollUp load={load} />
        <div className={load ? "block" : "hidden"}>
          <PaginationWrapper>
            <Paginate handleChange={handlePageChange} />
          </PaginationWrapper>
        </div>
      </div>
    </main>
  );
};

export default Home;
