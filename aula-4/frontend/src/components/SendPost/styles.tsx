import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
  gap: 10px;
`;

export const AvatarInputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 100%;
`;

export const Input = styled.input.attrs({ placeholder: "Whats up?" })`
  background-color: #573b6d;
  border: 0px;
  border-radius: 100px;
  padding: 5px 10px;
  color: #d09bf1;
  flex: 2;

  ::placeholder {
    color: #8f65a9;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BalanceBadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
