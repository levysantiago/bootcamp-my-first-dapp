import { useContext, useEffect, useState } from "react";
import { createAvatar } from "../../lib/createAvatar";
import { BalanceBadge } from "../BalanceBadge";
import { IMetamaskContext } from "../context/IMetamaskContext";
import { MetamaskContext } from "../context/MetamaskContext";
import { DefaultButton } from "../DefaultButton";
import {
  Avatar,
  AvatarInputContainer,
  BalanceBadgeContainer,
  ButtonContainer,
  Container,
  Input,
} from "./styles";

export function SendPost() {
  const { cryptoBalance } = useContext<IMetamaskContext>(MetamaskContext);
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    const avatarUri = createAvatar("0x...000");
    setAvatar(avatarUri);
  }, []);

  return (
    <Container>
      <AvatarInputContainer>
        <Avatar src={avatar} alt="Avatar icon" />
        <Input />
      </AvatarInputContainer>

      <ButtonContainer>
        <DefaultButton title="Send" />
      </ButtonContainer>

      <BalanceBadgeContainer>
        <BalanceBadge text={`${cryptoBalance} BNB`} />
      </BalanceBadgeContainer>
    </Container>
  );
}
