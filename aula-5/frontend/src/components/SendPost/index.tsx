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
  const {
    cryptoBalance,
    walletAddress,
    messageContractRepository,
    reloadComponents,
  } = useContext<IMetamaskContext>(MetamaskContext);
  const [avatar, setAvatar] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function handleSendPost() {
    if (!walletAddress) {
      alert("Connect to Metamask!");
      return;
    } else if (!message) {
      alert("Type a message!");
      return;
    }

    try {
      setLoading(true);
      await messageContractRepository?.newMessage(message);
      setMessage("");
      reloadComponents();
      alert("Transaction executed!");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const avatarUri = createAvatar(walletAddress);
    setAvatar(avatarUri);
  }, []);

  return (
    <Container>
      <AvatarInputContainer>
        <Avatar src={avatar} alt="Avatar icon" />
        <Input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </AvatarInputContainer>

      <ButtonContainer>
        <DefaultButton
          title="Send"
          onClick={handleSendPost}
          loading={loading}
        />
      </ButtonContainer>

      <BalanceBadgeContainer>
        <BalanceBadge text={`${cryptoBalance} BNB`} />
      </BalanceBadgeContainer>
    </Container>
  );
}
