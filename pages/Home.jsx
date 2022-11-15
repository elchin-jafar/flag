import React, { useState, useEffect } from "react";
import FlagCard from "../components/FlagCard";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
  & a {
    text-decoration: inherit;
    color: inherit;
    width: 288px;
  }
`;

function Home() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => setAllData(data.data));
  }, []);
  console.log(allData);
  return (
    <Main>
      {allData?.map((country, index) => (
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
  );
}

export default Home;
