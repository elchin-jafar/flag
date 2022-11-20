import { Card } from "./Styles";

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
