import { Container, Title, WalletIcon } from "./styles";

interface IConnectButtonProps {
  walletAddress?: string;
  isNetworkWrong?: boolean;
  onClick?: () => void;
}

export function ConnectButton({
  walletAddress,
  isNetworkWrong,
  onClick,
}: IConnectButtonProps) {
  if (isNetworkWrong) {
    return (
      <Container onClick={onClick} isNetworkWrong={isNetworkWrong}>
        <Title>Wrong Network</Title>
      </Container>
    );
  } else if (walletAddress) {
    return (
      <Container onClick={onClick}>
        <WalletIcon />
        <Title>{walletAddress}</Title>
      </Container>
    );
  } else {
    return (
      <Container onClick={onClick}>
        <Title>Connect Wallet</Title>
      </Container>
    );
  }
}
