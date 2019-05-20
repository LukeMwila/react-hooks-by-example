import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & button {
    background: rgba(51, 51, 255, 1) !important;
  }
`;

export const ToDoItem = styled.div`
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  text-decoration: ${(props: { complete?: boolean }) =>
    props.complete ? "line-through" : "none"};
`;

export const Header = styled.h4`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: bold;
`;
