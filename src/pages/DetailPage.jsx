import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import DetailsContentFirst from "../components/details/DetailsContentFirst.jsx";
import DetailsContentSecond from "../components/details/DetailsContentSecond.jsx";
import CountriesDetailFlag from "../components/details/CountriesDetailFlag.jsx";
import DetailBackButton from "../components/details/DetailBackButton.jsx";
import DetailLayout from "../layouts/DetailLayout.jsx";
import DetailsBorders from "../components/details/DetailsBorders.jsx";
import { useLocation } from "react-router-dom";
import countries from "i18n-iso-countries";

const DetailPage = () => {
  let countryName = useParams();
  const location = useLocation();
  const [detail, setDetail] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryName.name}`)
      .then((res) => res.json())
      .then((get) => {
        setDetail(get);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [countryName]);

  return (
    <>
      <NavBar />

      {detail.cca3 !== "ATA" || detail.cca3 !== "BVT"
        ? detail.map((country, index) => (
            <>
              <DetailLayout
                CountriesDetailFlag={<CountriesDetailFlag flag={country.flags.png} nameFirst={country.name.common} nameSecond={country.name.official} />}
                DetailsContentFirst={<DetailsContentFirst nameFirst={country.name.common || "none"} nameSecond={country.name.official || "none"} nameThird={country.name.nativeName} population={country.population || "none"} region={country.region || "none"} subRegion={country.subregion || "none"} capital={country.capital || "none"} />}
                DetailBackButton={<DetailBackButton />}
                countriesBorder={country.borders ? <DetailsBorders all={[country]} getName={(x) => setName(x)} n={country.borders.length} countryBorders={country} /> : null}
                DetailsContentSecond={<DetailsContentSecond 
                currencies={country.currencies  } 
                domainTop={country.tld }
                language={country.languages  }
                code={country.cca3}
      
               />}
              />
            </>
          ))
        : detail.map((country, index) => (
            <>
              <DetailLayout
                CountriesDetailFlag={<CountriesDetailFlag flag={country.flags.png} nameFirst={country.name.common} nameSecond={country.name.official} />}
                DetailsContentFirst={<DetailsContentFirst nameFirst={country.name.common || "none"} nameSecond={country.name.official || "none"} nameThird={country.name.nativeName} population={country.population || "none"} region={country.region || "none"} subRegion={country.subregion || "none"} capital={country.capital || "none"} />}
                DetailBackButton={<DetailBackButton />}
                countriesBorder={country.borders ? <DetailsBorders all={[country]} getName={(x) => setName(x)} n={country.borders.length} countryBorders={country.borders} /> : null}
              />
            </>
          ))}
    </>
  );
};

export default DetailPage;

/*




  

countriesBorder={country.borders ? <DetailsBorders all={[country]} getName={(x) => setName(x)} n={country.borders.length} countryBorders={country.borders} /> : null}




            <div className="border  ">
                  <div className={`  dark:text-gray-200 md:max-w-sm    text-black text-baseflex flex-wrap `}>
                    <strong>Border Countries: </strong>
                    <br />

                    <div className=" gap-1 flex-wrap flex">
  
                    </div>
                  </div>
                </div>






         countriesBorder={country.borders === undefined ? null : <DetailsBorders getName={x => setName(x)} n={country.borders.length} countryBorders={convertBorders(country.borders)}   />}

          CountriesDetailFlag={<CountriesDetailFlag    key={index.length} flag={country.flags.png} nameFirst={country.name.common} nameSecond={country.name.official} />}
            DetailsContentFirst={<DetailsContentFirst 
            nameFirst={country.name.common || 'none'} 
            nameSecond={country.name.official || 'none'}
            nameThird={country.name.nativeName ? Object.values(country.name.nativeName)[0] : null }
            population={country.population || 'none'}
            region={country.region || 'none'}
            subRegion={country.subregion || 'none'}
            capital={country.capital || 'none'}
            />}

          DetailsContentSecond={<DetailsContentSecond 
            currencies={country.currencies ? Object.values(country.currencies)[0].symbol : null } 
            domainTop={country.tld || null}
            language={country.languages ? Object.values(country.languages)[0] : null  }
            code={country.cca3}

         />}
         DetailBackButton={<DetailBackButton />}
         countriesBorder={country.borders === undefined ? null : <DetailsBorders getName={x => setName(x)} n={country.borders.length} countryBorders={convertBorders(country.borders)}   />}

            />

            */
