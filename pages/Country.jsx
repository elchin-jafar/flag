import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  & .img {
    display: flex;
    flex-direction: column;
    & button {
      cursor: pointer;
      background-color: white;
      padding: 0.75rem 3rem;
      width: 168px;
      text-align: center;
      text-decoration: none;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
      border: none;
      border-radius: 0.5rem;
    }
    & img {
      height: 500px;
      
    }
  }
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
        <Link to="/"><button>Back</button></Link>
        <img src={param?.flags?.svg} alt="somethingGoneWrong" />
      </div>
      <div className="info">
        <div>{param?.name?.common}</div>
      </div>
    </Container>
  );
}

export default Country;
