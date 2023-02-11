import styled, { css } from "styled-components";

export const Box = styled.div`
  width: 23rem;
  height: 5rem;
  text-align: center;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  ${(props) =>
    props.budget &&
    css`
      background: silver;
      color: black;
    `}
  ${(props) =>
    props.remaining &&
    css`
      background-color: lightgreen;
      color: green;
    `}
  ${(props) =>
    props.spent &&
    css`
      background-color: lightblue;
      color: blue;
    `}
`;
