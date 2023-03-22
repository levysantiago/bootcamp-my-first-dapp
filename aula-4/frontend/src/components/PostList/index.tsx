import { IPostProps, Post } from "../Post";
import { Container } from "./styles";

interface IPostListProps {
  posts: IPostProps[];
}

export function PostList({ posts }: IPostListProps) {
  return (
    <Container>
      {posts.map((post, index) => {
        return <Post key={`post-list-item-${index}`} />;
      })}
    </Container>
  );
}
