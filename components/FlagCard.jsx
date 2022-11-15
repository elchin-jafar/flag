import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 288px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 #9ca3af;
  & img {
    height: 100%;
    flex-grow: 1;
    box-shadow: inherit;
  }
  & .info {
    flex-grow: 1;
    padding: 2rem 1.75rem 3rem;
    line-height: 21px;
    & h2 {
      margin-bottom: 1rem;
      font-size: 20px;
      font-weight: 600;
    }
    & p {
      margin: 0.5rem 0;
      font-size: 14px;
    }
  }
`;

function FlagCard({ name, population, region, capital, img }) {
  return (
    <Card className="flag-card">
      <img src={img} alt="flagOfSomeCountry" />
      <div className="info">
        <h2>{name}</h2>
        <p>
          <span>Population: </span>
          <span>{population}</span>
        </p>
        <p>
          <span>Region: </span>
          <span>{region}</span>
        </p>
        <p>
          <span>Capital: </span>
          <span>{capital}</span>
        </p>
      </div>
    </Card>
  );
}

export default FlagCard;
