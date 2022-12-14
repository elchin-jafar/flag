import React from "react";
import { SearchInputs } from "./Styles";
import SearchIcon from "@mui/icons-material/Search";

function Search({ onChange }) {
  function handleSearch(event) {
    onChange(event.target.value);
  }

  return (
    <>
      <SearchInputs>
        <div className="search-icon">
          {" "}
          <SearchIcon />{" "}
        </div>
        <input
          type="text"
          placeholder="Search for country..."
          onChange={handleSearch}
        />
      </SearchInputs>
    </>
  );
}

export default Search;
