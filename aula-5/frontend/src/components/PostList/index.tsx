import { ThreeDots } from "react-loader-spinner";
import { IPostProps, Post } from "../Post";
import { Container } from "./styles";

interface IPostListProps {
  posts: IPostProps[];
  loading?: boolean;
}

export function PostList({ posts, loading }: IPostListProps) {
  return (
    <Container>
      {loading ? (
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#fafafa"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ alignSelf: "center" }}
          visible={true}
        />
      ) : (
        posts.map((post, index) => {
          return <Post key={`post-list-item-${index}`} {...post} />;
        })
      )}
    </Container>
  );
}
