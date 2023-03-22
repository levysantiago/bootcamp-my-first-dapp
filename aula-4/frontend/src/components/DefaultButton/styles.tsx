import styled from "styled-components";

export const Container = styled.button.attrs({ type: "button" })`
  display: flex;
  width: 150px;
  height: 40px;
  background-color: #51088b;
  border: none;
  cursor: pointer;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #600fa2;
  }
`;

export const Title = styled.span`
  font-family: "Roboto-Bold";
  font-size: 14px;
  color: #fafafa;
`;
