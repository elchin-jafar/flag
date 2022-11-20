import React from "react";

function Filter({ onChange }) {
  function SelectHandler(event) {
    const regionData = event.target.value;
    onChange(regionData);
  }
  return (
    <div className="selectInput">
    <select onChange={SelectHandler}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
    </div>
  );
}

export default Filter;
