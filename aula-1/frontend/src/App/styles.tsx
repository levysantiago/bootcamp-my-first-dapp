import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 300px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    padding: 0px 200px;
  }

  @media (max-width: 1024px) {
    padding: 0px 100px;
  }

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;
