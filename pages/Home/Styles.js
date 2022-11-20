import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  & select {
    box-shadow: 10px 10px 15px -3px rgb(0 0 0 / 0.1);
    height: 60px;
    width: 192px;
    border: 0;
    padding-left: 5px;
    border-radius: 0.75rem;
    font-size: 14px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
  & a {
    text-decoration: inherit;
    color: inherit;
    width: 288px;
  }
`;
