import React, { useState, useEffect } from "react";
import FlagCard from "../../components/FlagCard/FlagCard";
import { SearchBar, Main } from "./Styles";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../../components/SearchInput/Search";
import Filter from "../../components/Filter/Filter";

function Home() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => setAllData(data.data))
  }, []);

  function getCountryByName(data) {
    setFilteredData(
      allData.filter((value) =>
        value.name?.common.toLowerCase().includes(data?.toLowerCase())
      )
    );
  }

  function getCountryByRegion(data) {
    setFilteredData(allData.filter((value) => value.region == data));
  }

  console.log(filteredData);
  return (
    <>
      <SearchBar>
        <Search onChange={getCountryByName} />
        <Filter onChange={getCountryByRegion} />
      </SearchBar>
      <Main>
        {filteredData.length == 0
          ? allData.map((country, index) => (
              <Link key={index} to={`/country/${country.name.common}`}>
                <FlagCard
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  img={`${country.flags.png}`}
                />
              </Link>
            ))
          : filteredData.map((country, index) => (
              <Link key={index} to={`/country/${country.name.common}`}>
                <FlagCard
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  img={`${country.flags.png}`}
                />
              </Link>
            ))}
      </Main>
    </>
  );
}

export default Home;
