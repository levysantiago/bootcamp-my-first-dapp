import { useEffect, useState } from "react";
import { createAvatar } from "../../lib/createAvatar";
import {
  Avatar,
  BottomInfo,
  BottomText,
  CoinButton,
  CoinContainer,
  CoinIcon,
  Container,
  ContentContainer,
  HeartButton,
  HeartIcon,
  LikeContainer,
  PostMessage,
  WalletAddress,
  WalletMessageContainer,
} from "./styles";
import coin_icon from "../../assets/coin-icon.svg";
import coin_icon_yellow from "../../assets/coin-icon-yellow.svg";
import heart_icon from "../../assets/heart-icon.svg";
import heart_icon_hollow from "../../assets/heart-icon-hollow.svg";
import { Modal } from "../Modal";

export interface IPostProps {
  id: number;
  from: string;
  content: string;
  likes: number;
  coins: string;
}

export function Post() {
  const [avatar, setAvatar] = useState<string>("");
  const [coinImg, setCoinImg] = useState<string>(coin_icon);
  const [heartImg, setHeartImg] = useState<string>(heart_icon_hollow);

  useEffect(() => {
    const avatarUri = createAvatar("0x...000");
    setAvatar(avatarUri);
  }, []);

  return (
    <Container>
      <ContentContainer>
        <Avatar src={avatar} alt="Avatar icon" />
        <WalletMessageContainer>
          <WalletAddress>0x...000</WalletAddress>
          <PostMessage>Minha mensagem aqui...</PostMessage>
        </WalletMessageContainer>
      </ContentContainer>

      <BottomInfo>
        <LikeContainer>
          <HeartButton
            onMouseEnter={() => {
              setHeartImg(heart_icon);
            }}
            onMouseLeave={() => {
              setHeartImg(heart_icon_hollow);
            }}
          >
            <HeartIcon src={heartImg} alt="Heart icon" />
          </HeartButton>
          <BottomText>2</BottomText>
        </LikeContainer>

        <CoinContainer>
          <Modal
            trigger={
              <CoinButton
                onMouseEnter={() => {
                  setCoinImg(coin_icon_yellow);
                }}
                onMouseLeave={() => {
                  setCoinImg(coin_icon);
                }}
              >
                <CoinIcon src={coinImg} alt="Coin icon" />
              </CoinButton>
            }
          />

          <BottomText>0.001 BNB</BottomText>
        </CoinContainer>
      </BottomInfo>
    </Container>
  );
}
