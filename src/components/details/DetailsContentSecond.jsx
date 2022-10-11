import React, { useEffect, useState } from "react";

const DetailsContentSecond = ({ currencies, domainTop, language, code }) => {
  const [parseLanguage, setParseLanguage] = useState([]);
  const [parseCurrencies, setParseCurrencies] = useState([]); 
  useEffect(() => {
    mapItems(language, currencies);
  }, [language,currencies]);

  const mapItems = (language, currencies) => {
    if (language && currencies === undefined) {
      return;
    }
    if (language === undefined) {
      for(let x in currencies){
        setParseCurrencies(currencies[x])
      }
      return
    }
    if (currencies === undefined) {
      for(let x in language){
        setParseLanguage(language[x])

      }
      return
    }

    if (language && currencies !== undefined) {
      for(let x in currencies){
        setParseCurrencies(currencies[x])

      }
      for(let i in language){
        setParseLanguage(language[i])

      }

    }
  };




  return <>
        <p className={`dark:text-gray-300 text-gray-800  text-sm  font-NunitoSans`}>
        Top Level Domain:&nbsp;
        {domainTop && domainTop !== undefined ? domainTop : "none"}
      </p>
      <p className={`dark:text-gray-300   text-gray-800  text-sm font-NunitoSans `}>
        Currencies:&nbsp;
        {code !== "ATA" || "BVT"  ? parseCurrencies.name : "none"}

      </p>
      <p className={`dark:text-gray-300 text-gray-800   text-sm flex gap-2 flex-wrap font-NunitoSans`}>
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
