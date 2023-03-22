import { Container, Title } from "./styles";

interface IDefaultButtonProps {
  title: string;
}

export function DefaultButton({ title }: IDefaultButtonProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
