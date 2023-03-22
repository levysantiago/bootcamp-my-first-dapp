import { CoinIcon, Container, Text } from "./styles";

interface IBalanceBadge {
  text: string;
}

export function BalanceBadge({ text }: IBalanceBadge) {
  return (
    <Container>
      <CoinIcon />
      <Text>{text}</Text>
    </Container>
  );
}
