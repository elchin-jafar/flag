import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .img {
    display: flex;
    flex-direction: column;

    & button {
      cursor: pointer;
      background-color: white;
      margin: 4rem 0;
      padding: 0.75rem 3rem;
      width: 168px;
      text-align: center;

      line-height: 24px;
      font-size: 16px;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
      border: none;
      border-radius: 0.5rem;
      & svg {
        transform: translateY(6px);
        margin-right: 5px;
      }
    }
    & img {
      width: 750px;
    }
  }
`;

export const RightSide = styled.div`
  flex-grow: 1;
  padding-left: 4rem;
  display: flex;
  flex-direction: column;
  padding-top: 15rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CountryName = styled.div`
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-bottom: 1.75rem;
`;

export const Entry = styled.div`
  margin: 1rem 0;
  & .borders {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
  }
  & .border {
    padding: 0.5rem 1rem;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  }
`;

export const Key = styled.span`
  font-weight: 600;
  line-height: 24px;
`;
