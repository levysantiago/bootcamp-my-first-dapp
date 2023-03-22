import styled from "styled-components";
import wallet_icon from "../../assets/wallet-icon.svg";

interface IContainerProps {
  isNetworkWrong?: boolean;
}

export const Container = styled.button.attrs({ type: "button" })(
  (props: IContainerProps) => `
  display: flex;
  width: 150px;
  height: 40px;
  background-color: ${props.isNetworkWrong ? "#950C0C" : "#51088b"};
  border: none;
  cursor: ${props.isNetworkWrong ? "default" : "pointer"};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: ${props.isNetworkWrong ? "#950C0C" : "#600fa2"}};
  }
`
);

export const WalletIcon = styled.img.attrs({
  src: wallet_icon,
  alt: "Wallet icon",
})`
  width: 20px;
`;

export const Title = styled.span`
  font-family: "Roboto-Bold";
  font-size: 14px;
  color: #fafafa;
`;
