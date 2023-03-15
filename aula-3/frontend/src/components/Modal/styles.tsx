import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import close_icon from "../../assets/close.svg";
import coin_icon_yellow from "../../assets/coin-icon-yellow.svg";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0px;
`;

export const DialogTrigger = styled(Dialog.Trigger)`
  border: none;
  background-color: transparent;
`;

export const DialogClose = styled(Dialog.Close)`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`;

export const CloseIcon = styled.img.attrs({
  src: close_icon,
  alt: "Close dialog icon",
})`
  position: absolute;
  right: 30px;
  top: 20px;
  width: 15px;
`;

export const DialogContent = styled(Dialog.Content)`
  width: 300px;
  height: auto;
  background-color: #573b6d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-30%);
  border-radius: 10px;
  padding: 50px 30px 20px 30px;

  @media (max-width: 575px) {
    width: 70%;
  }
`;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

export const InputLabel = styled.span`
  font-family: "Roboto-Bold";
  font-size: 12px;
  color: #fafafa;
  margin-bottom: 5px;
`;

export const Input = styled.input.attrs({ placeholder: "0.001" })`
  background-color: #765095;
  border: 0px;
  border-radius: 100px;
  padding: 10px 10px;
  color: #d09bf1;
  flex: 2;
  text-align: center;

  ::placeholder {
    color: #8f65a9;
  }
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  left: 30px;
  top: 20px;
`;

export const BalanceCoinIconContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const BalanceLabel = styled.span`
  font-family: "Roboto-Bold";
  font-size: 10px;
  color: #fafafa;
`;

export const BalanceText = styled.span`
  font-size: 10px;
  color: #d09bf1;
`;

export const CoinIcon = styled.img.attrs({
  src: coin_icon_yellow,
  alt: "Coin icon",
})`
  size: 15px;
`;
