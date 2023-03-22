import { ThreeDots } from "react-loader-spinner";
import { Container, Title } from "./styles";

interface IDefaultButtonProps {
  title: string;
  onClick?: () => void;
  loading?: boolean;
}

export function DefaultButton({
  title,
  onClick,
  loading,
}: IDefaultButtonProps) {
  return (
    <Container
      onClick={onClick}
      style={{ cursor: loading ? "default" : "pointer" }}
    >
      {loading ? (
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#fafafa"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
