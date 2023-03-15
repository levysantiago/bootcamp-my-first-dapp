import styled from "styled-components";
import feed_icon from "../../assets/feed-icon.svg";

export const Container = styled.div`
  padding: 20px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const FeedIcon = styled.img.attrs({
  src: feed_icon,
  alt: "Feed Icon",
})`
  size: 18px;
`;

export const Title = styled.span`
  font-family: "Roboto-Bold";
  font-size: 15px;
  color: #d09bf1;
`;
