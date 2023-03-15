import abbreviateWalletAddress from "../../lib/abbreviateWalletAddress";
import { ConnectButton } from "../ConnectButton";
import { Container, FeedIcon, Title, TitleContainer } from "./styles";

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <FeedIcon />
        <Title>Feed</Title>
      </TitleContainer>

      <ConnectButton
        walletAddress={abbreviateWalletAddress(
          "0xe2d3A739EFFCd3A99387d015E260eEFAc72EBea1"
        )}
      />
    </Container>
  );
}
