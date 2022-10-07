import React, { useEffect, useState } from "react";

const DetailsContentSecond = ({ currencies, domainTop, language, code }) => {
  const [parseLanguage, setParseLanguage] = useState([]);
  const [parseCurrencies, setParseCurrencies] = useState([]); 
  useEffect(() => {
    mapItems(language, currencies);
  }, []);

  const mapItems = (language, currencies) => {
    if (language && currencies === undefined) {
      console.log("language && currencies undefined");
      return;
    }
    if (language === undefined) {
      console.log("langauge undefined");
      for(let x in currencies){
        setParseCurrencies(currencies[x])

      }
      return
    }
    if (currencies === undefined) {
      console.log("currencies undefined");
      for(let x in language){
        setParseLanguage(language[x])

      }
      return
    }

    if (language && currencies !== undefined) {
      console.log("language && currencies ok");
      for(let x in currencies){
        setParseCurrencies(currencies[x])

      }
      for(let i in language){
        setParseLanguage(language[i])

      }

    }
  };

/*
  console.log("lan", parseLanguage);
  console.log("cur", parseCurrencies);

*/


  return <>
        <p className={`  text-black text-sm `}>
        Top Level Domain:&nbsp;
        {domainTop && domainTop !== undefined ? domainTop : "none"}
      </p>
      <p className={`   text-black  text-sm `}>
        Currencies:&nbsp;
        {code !== "ATA" || "BVT"  ? parseCurrencies.name : "none"}

      </p>
      <p className={`  text-black  text-sm flex gap-2 flex-wrap`}>
        Languages:
        <span>
        {code !== "ATA" ||  "BVT"   ?  parseLanguage : "none"}
        </span>
      </p>

  
  
  
  
  
  
  
  
  
  
  
  
  
  </>;
};

export default DetailsContentSecond;
/*



  */
