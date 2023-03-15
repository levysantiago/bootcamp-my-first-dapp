import styled from "styled-components";
import coin_icon from "../../assets/coin-icon-yellow.svg";

export const Container = styled.div`
  width: 100px;
  height: 30px;
  background-color: #573b6d;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0px 10px;
`;

export const CoinIcon = styled.img.attrs({
  src: coin_icon,
  alt: "Coin icon",
})`
  size: 15px;
`;

export const Text = styled.span`
  font-family: "Roboto-Bold";
  font-size: 12px;
  color: #d09bf1;
`;
