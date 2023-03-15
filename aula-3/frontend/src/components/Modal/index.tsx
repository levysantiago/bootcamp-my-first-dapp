import * as Dialog from "@radix-ui/react-dialog";
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

interface IModalProps {
  trigger: JSX.Element;
}

export function Modal({ trigger }: IModalProps) {
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
                <BalanceText>2.001 BNB</BalanceText>
              </BalanceCoinIconContainer>
            </BalanceContainer>

            <InputContainer>
              <InputLabel>BNB Amount</InputLabel>
              <Input />
            </InputContainer>

            <DefaultButton title="Send" />
          </ModalContentContainer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
