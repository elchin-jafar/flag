import styled from "styled-components";
import searchIcon from "../assets/search_black_24dp.svg";

const Input = styled.div`
  & input {
    padding-left: 25px;
    background: url("../assets/search_black_24dp.svg") no-repeat left;
    background-size: 20px;
    width: 500px;
    height: 30px;
  }
`;

function Search({onChange}) {
    function handleChange(event) {
        onChange(event.target.value);
    }
  return (
    <Input>
    <input type="text" placeholder="Search for country..." onChange={handleChange}/>
    </Input>
  );
}

export default Search;
