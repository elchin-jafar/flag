import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  & .img {
    /* flex-grow:1; */
    display: flex;
    flex-direction: column;

    & button {
      cursor: pointer;
      background-color: white;
      margin: 4rem 0;
      padding: 0.75rem 3rem;
      width: 168px;
      text-align: center;
      text-decoration: none;
      line-height: 24px;
      font-size: 16px;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
      border: none;
      border-radius: 0.5rem;
    }
    & img {
      width: 750px;
    }
  }
`;

const RightSide = styled.div`
  flex-grow: 1;
  padding-left: 4rem;
  display: flex;
  flex-direction: column;
  padding-top: 15rem;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountryName = styled.div`
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-bottom: 1.75rem;
`;

const Entry = styled.p`
  margin: 1rem 0;
  & .borders {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
  }
  & .border {
    padding: 0.5rem 1rem;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  }
`;

const Key = styled.span`
  font-weight: 600;
  line-height: 24px;
`;

function Country() {
  const { name } = useParams();
  const [param, setParam] = useState({});

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((data) => setParam(...data.data));
  }, []);

  console.log(param);

  return (
    <Container>
      <div className="img">
        <Link to="/">
          <button>Back</button>
        </Link>
        <img src={param?.flags?.svg} alt="somethingGoneWrong" />
      </div>
      <RightSide>
        <CountryName>{param.name?.common}</CountryName>
        <Info>
          <div className="left-side-info">
            <Entry key="1">
              <Key>Native Name: </Key>
              <span>{param?.name?.official}</span>
            </Entry>
            <Entry key="2">
              <Key>Population: </Key>
              <span>{param.population}</span>
            </Entry>
            <Entry key="3">
              <Key>Region: </Key>
              <span>{param.region}</span>
            </Entry>
            <Entry key="4">
              <Key>Sub Region: </Key>
              <span>{param.subregion}</span>
            </Entry>
            <Entry key="5">
              <Key>Capital: </Key>
              <span>{param.capital}</span>
            </Entry>
            <Entry key="6">
              <Key>Border: </Key>
              <div className="borders">
                {param.borders ? (
                  param.borders?.map((border) => (
                    <span className="border">{border}</span>
                  ))
                ) : (
                  <span>No Borders</span>
                )}
              </div>
            </Entry>
          </div>
          <div className="right-side-info">
            <Entry key="7">
              <Key>Top Level Domain: </Key>
            </Entry>
            <Entry key="8">
              <Key>Currencies: </Key>
              {param.currencies &&
                Object.values(param.currencies)?.map((curr, index) => (
                  <span key={index}>{curr.name}</span>
                ))}
            </Entry>
            <Entry key="9">
              <Key>Language: </Key>
              {param.languages &&
                Object.values(param.languages).map((lang, index, array) =>
                  index + 1 === array.length ? (
                    <span key={index}>{lang}</span>
                  ) : (
                    <span key={index}>{`${lang}, `}</span>
                  )
                )}
            </Entry>
          </div>
        </Info>
      </RightSide>
    </Container>
  );
}

export default Country;
