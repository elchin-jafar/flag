import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  height: 395px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 #9ca3af;
  & img {
    height: 192px;
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
