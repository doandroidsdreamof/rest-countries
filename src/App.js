import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx'
import DetailPage from './pages/DetailPage.jsx'



function App() {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);


  useEffect(() => {
    console.time("time");
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((get) => { setCountries(get), setLoad(true), console.timeEnd("time") })
      .catch((err) => {
        console.log(err);
      });
     
  }, [load]);


  

  return (


    <Routes>

      <Route path="/"
        element={
          <Home countries={countries} load={load} />
        }
      />
      <Route

        load={load}
        path={'/details/:name'}
        element={<DetailPage />} />

      <Route

        load={load}
        path='*'
        element={
          <Home countries={countries} load={load} />
        }
        
        />

    </Routes>


  );
}

export default App;

