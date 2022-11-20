import styled from "styled-components";

export const SearchInputs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-weight: 600;

  & input {
    background-color: white;
    border: 0;
    font-size: 14px;
    width: 300px;
    padding: 0.5rem;
    width: 430px;
    height: 60px;
    line-height: 1.25rem;
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    box-shadow: 10px 10px 15px -3px rgb(0 0 0 / 0.1);
  }
  & input:focus {
    outline: none;
  }
  & .search-icon {
    height: 60px;
    padding: 1.25rem;
    display: grid;
    place-items: center;
    background-color: white;
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    & svg {
      opacity: 0.5;
    }
  }
`;
