import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #573b6d;
  flex-direction: column;
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  position: relative;
  min-height: 100px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 100%;
  margin-top: 12px;
`;

export const WalletMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 5px;
`;

export const WalletAddress = styled.span`
  font-family: "Roboto-Bold";
  font-size: 14px;
  color: #fafafa;
`;

export const PostMessage = styled.span`
  font-size: 12px;
  color: #d09bf1;
`;

export const BottomInfo = styled.div`
  position: absolute;
  display: flex;
  bottom: 10px;
  right: 50px;
  gap: 50px;
`;

export const LikeContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const CoinContainer = styled(LikeContainer)``;

export const BottomText = styled.span`
  font-size: 10px;
  color: #d09bf1;
`;

export const CoinIcon = styled.img`
  cursor: pointer;
`;

export const HeartIcon = styled(CoinIcon)``;

export const CoinButton = styled.div`
  border: 0px;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

export const HeartButton = styled(CoinButton)``;
