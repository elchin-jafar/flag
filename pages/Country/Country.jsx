import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, RightSide, Info, CountryName, Entry, Key } from "./Styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Country() {
  const { name } = useParams();
  const [param, setParam] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setParam(...response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      {isLoading && <>Loading..</>}
      {error && <>{error}</>}
      {!error && !isLoading && param && (
        <>
          <div className="img">
            <Link to="/">
              <button>
                {" "}
                <KeyboardBackspaceIcon /> <span className="btn-text">
                  Back
                </span>{" "}
              </button>
            </Link>
            <img src={param?.flags?.svg} alt="somethingGoneWrong" />
          </div>
          <RightSide>
            <CountryName>{param?.name?.common}</CountryName>
            <Info>
              <div className="left-side-info">
                <Entry key="1">
                  <Key>Native Name: </Key>
                  <span>{param?.name?.official}</span>
                </Entry>
                <Entry key="2">
                  <Key>Population: </Key>
                  <span>{param?.population}</span>
                </Entry>
                <Entry key="3">
                  <Key>Region: </Key>
                  <span>{param?.region}</span>
                </Entry>
                <Entry key="4">
                  <Key>Sub Region: </Key>
                  <span>{param?.subregion}</span>
                </Entry>
                <Entry key="5">
                  <Key>Capital: </Key>
                  <span>{param?.capital}</span>
                </Entry>
                <Entry key="6">
                  <Key>Border: </Key>
                  <div className="borders">
                    {param?.borders ? (
                      param?.borders?.map((border) => (
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
                  {param?.currencies &&
                    Object.values(param?.currencies)?.map((curr, index) => (
                      <span key={index}>{curr.name}</span>
                    ))}
                </Entry>
                <Entry key="9">
                  <Key>Language: </Key>
                  {param?.languages &&
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
        </>
      )}
    </Container>
  );
}

export default Country;
