import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  & .img {
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
      height: 600px;
      flex-grow: 1;
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
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((data) => setParam(...data.data));
  }, []);

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
            <Entry>
              <Key>Native Name: </Key>
              <span>{param?.name?.official}</span>
            </Entry>
            <Entry>
              <Key>Population: </Key>
              <span>{param.population}</span>
            </Entry>
            <Entry>
              <Key>Region: </Key>
              <span>{param.region}</span>
            </Entry>
            <Entry>
              <Key>Sub Region: </Key>
              <span>{param.subregion}</span>
            </Entry>
            <Entry>
              <Key>Capital: </Key>
              <span>{param.capital}</span>
            </Entry>
            <Entry>
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
            <Entry>
              <Key>Top Level Domain: </Key>
            </Entry>
            <Entry>
              <Key>Currencies: </Key>
              {/* <span>{param.currencies.[]?.name}</span> */}
            </Entry>
            <Entry>
              <Key>Language: </Key>
              <span>native name</span>
            </Entry>
          </div>
        </Info>
      </RightSide>
    </Container>
  );
}

export default Country;
