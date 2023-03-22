import { useContext, useEffect, useState } from "react";
import { IMetamaskContext } from "../components/context/IMetamaskContext";
import { MetamaskContext } from "../components/context/MetamaskContext";
import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { PostList } from "../components/PostList";
import { SendPost } from "../components/SendPost";
import { IMessage } from "../repositories/MessageContractRepository/IMessage";
import { Container } from "./styles";

function App() {
  const { messageContractRepository, walletAddress, reload } =
    useContext<IMetamaskContext>(MetamaskContext);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(false);

  async function getMessages() {
    if (messageContractRepository && walletAddress) {
      setLoading(true);
      const _messages = await messageContractRepository.getMessages();
      setMessages(_messages);
      setLoading(false);
    } else {
      setMessages([]);
    }
  }

  useEffect(() => {
    getMessages();
  }, [messageContractRepository, walletAddress, reload]);

  return (
    <Container>
      <Header />
      <SendPost />
      <PostList posts={messages} loading={loading} />
    </Container>
  );
}

export default App;
