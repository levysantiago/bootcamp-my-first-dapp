import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useState } from "react";
import { IMetamaskContext } from "../context/IMetamaskContext";
import { MetamaskContext } from "../context/MetamaskContext";
import { DefaultButton } from "../DefaultButton";
import {
  BalanceCoinIconContainer,
  BalanceContainer,
  BalanceLabel,
  BalanceText,
  CloseIcon,
  CoinIcon,
  DialogClose,
  DialogContent,
  DialogTrigger,
  Input,
  InputContainer,
  InputLabel,
  ModalContentContainer,
  Overlay,
} from "./styles";
import { BigNumber as BN } from "bignumber.js";

interface IModalProps {
  messageId: number;
  trigger: JSX.Element;
}

export function Modal({ messageId, trigger }: IModalProps) {
  const { cryptoBalance, messageContractRepository, reloadComponents } =
    useContext<IMetamaskContext>(MetamaskContext);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleMonetizeMessage() {
    if (!new BN(value).isGreaterThan(0)) {
      alert("Invalid value!");
      return;
    }
    if (!new BN(value).isLessThanOrEqualTo(cryptoBalance)) {
      alert("Insuficient BNB value!");
      return;
    }

    try {
      setLoading(true);
      await messageContractRepository?.monetizeMessage(messageId, value);
      setValue("");
      reloadComponents();
      alert("Transaction executed!");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog.Root>
      <DialogTrigger>{trigger}</DialogTrigger>

      <Dialog.Portal>
        <Dialog.Overlay>
          <Overlay />
        </Dialog.Overlay>

        <DialogContent>
          <DialogClose>
            <CloseIcon />
          </DialogClose>

          <ModalContentContainer>
            <BalanceContainer>
              <BalanceLabel>Available</BalanceLabel>
              <BalanceCoinIconContainer>
                <CoinIcon />
                <BalanceText>{`${cryptoBalance} BNB`}</BalanceText>
              </BalanceCoinIconContainer>
            </BalanceContainer>

            <InputContainer>
              <InputLabel>BNB Amount</InputLabel>
              <Input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </InputContainer>

            <DefaultButton
              title="Send"
              onClick={handleMonetizeMessage}
              loading={loading}
            />
          </ModalContentContainer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
