import { useContext } from "react";
import abbreviateWalletAddress from "../../lib/abbreviateWalletAddress";
import { ConnectButton } from "../ConnectButton";
import { IMetamaskContext } from "../context/IMetamaskContext";
import { MetamaskContext } from "../context/MetamaskContext";
import { Container, FeedIcon, Title, TitleContainer } from "./styles";

export function Header() {
  const { connect, walletAddress, isNetworkWrong } =
    useContext<IMetamaskContext>(MetamaskContext);

  async function handleConnect() {
    if (!walletAddress && !window.ethereum) {
      window.open("https://metamask.io", "_blank", "noopener noreferrer");
    } else {
      await connect();
    }
  }

  return (
    <Container>
      <TitleContainer>
        <FeedIcon />
        <Title>Feed</Title>
      </TitleContainer>

      <ConnectButton
        walletAddress={
          walletAddress ? abbreviateWalletAddress(walletAddress) : ""
        }
        isNetworkWrong={isNetworkWrong}
        onClick={handleConnect}
      />
    </Container>
  );
}
