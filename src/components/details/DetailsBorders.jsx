import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getCountryISO2 from "country-iso-3-to-2";
import countries from "i18n-iso-countries";

const DetailsBorders = ({ countryBorders, n, getName, all }) => {
  const [borders, setBorders] = useState([]);
  const [countryName, setCountryName] = useState();
  const [disable, setDiasable] = useState(true);
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

  const navigate = useNavigate();
  useEffect(() => {
    convertBorders(countryBorders);
  }, [countryBorders]);

  function convertBorders(data) {
    let arr = [data];
    let parseBorder = [];
    let converted = [];
    for (let i = 0; i < arr.length; i++) {
      parseBorder.push(arr[i].borders);
      for (let j = 0; j < parseBorder[0].length; j++) {
        converted.push(countries.getName(`${parseBorder[0][j]}`, "en", { select: "alias" }));
      }
    }
    let output = converted.filter(function(element) {
      return element !== undefined;
    });
    setBorders(output);
  }

  const handleCode = async (e) => {
    const getName = await e.target.value;
    setCountryName(getName);
    passData(getName);

    if (e.button === 1) {
      setDiasable(false);
    } else {
      setDiasable(true);
    }
  };
  const passData = (pass) => {
    getName(pass);
  };

  return (
    <div className={`   md:max-w-sm    text-gray-900 dark:text-gray-100 text-baseflex flex-wrap `}>
      <strong>Border Countries: </strong>
      <br />

      <div className=" gap-1 flex-wrap flex mt-4 ">
        {borders && borders.length > 0
          ? borders.map((e, i) => (
              <Link to={`/details/${countries.getAlpha3Code(`${e}`, "en")}`}>
                <button key={i} value={e ? e : null} className="dark:text-white  dark:bg-dark-blue text-gray-800 bg-white shadow-md font-NunitoSans  p-1.5 rounded-md duration-200 hover:scale-105 hover:shadow-xl ease-in-out ">
                  {e ? e : null}
                </button>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default DetailsBorders;
