import React, { useState, useEffect } from "react";
import FlagCard from "../components/FlagCard";
import styled from "styled-components";
import axios from "axios";

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
`;

function Home() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => setAllData(data.data));
  }, []);

  return (
    <Main>
      {allData?.map((country, index) => (
        <FlagCard
          key={index}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          img={`${country.flags.svg}`}
        />
      ))}
    </Main>
  );
}

export default Home;
