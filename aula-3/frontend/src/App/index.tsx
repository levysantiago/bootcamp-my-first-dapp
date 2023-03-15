import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { PostList } from "../components/PostList";
import { SendPost } from "../components/SendPost";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <Header />
      <SendPost />
      <PostList
        posts={[
          {
            id: 1,
            from: "0x123",
            content: "Mensagem",
            likes: 0,
            coins: "0.0001",
          },
          {
            id: 1,
            from: "0x123",
            content: "Mensagem",
            likes: 0,
            coins: "0.0001",
          },
          {
            id: 1,
            from: "0x123",
            content: "Mensagem",
            likes: 0,
            coins: "0.0001",
          },
          {
            id: 1,
            from: "0x123",
            content: "Mensagem",
            likes: 0,
            coins: "0.0001",
          },
        ]}
      />
    </Container>
  );
}

export default App;
