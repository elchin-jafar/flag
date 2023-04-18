import styled from "styled-components";

export const Container = styled.div`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
  height: 100vh;
  transition: background-color 0.2s;
  &.dark {
    color: white;
    background-color: rgb(32, 44, 55);
    & Header {
      background-color: rgb(43, 57, 69);
    }
    & Main {
      background-color: rgb(32, 44, 55);
    }
    & Main .flag-card {
      background-color: rgb(43, 57, 69);
      box-shadow: none;
    }
    & Main section .img button {
      background-color: rgb(43, 57, 69);
      color: white;
    }
    & Main section div div .borders .border {
      background-color: rgb(43, 57, 69);
      color: white;
    }
    & Main .search-icon svg {
      color: black;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 64px;

  & .logo {
    font-size: 1.5rem;
    font-weight: 600;
  }
  & .dark-mode {
    display: flex;
    font-weight: 400;
    cursor: pointer;
    user-select: none;
    & .icon {
      transform: scale(0.85);
    }
    & svg {
      transform: rotate(-30deg);
      margin-right: 5px;
    }
  }
`;

export const Main = styled.main`
  padding: 0 4rem;
  @media (max-width: 450px) {
    padding: 0 3rem;
  }
  background-color: rgb(250, 250, 250);
  transition: background-color 0.2s;
`;
