import { useContext, useEffect, useState } from "react";
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
import abbreviateWalletAddress from "../../lib/abbreviateWalletAddress";
import { MetamaskContext } from "../context/MetamaskContext";
import { IMetamaskContext } from "../context/IMetamaskContext";
import { ThreeDots } from "react-loader-spinner";

export interface IPostProps {
  id: number;
  from: string;
  content: string;
  likes: number;
  coins: string;
}

export function Post({ id, from, content, likes, coins }: IPostProps) {
  const { messageContractRepository, reloadComponents } =
    useContext<IMetamaskContext>(MetamaskContext);
  const [avatar, setAvatar] = useState<string>("");
  const [coinImg, setCoinImg] = useState<string>(coin_icon);
  const [heartImg, setHeartImg] = useState<string>(heart_icon_hollow);
  const [loading, setLoading] = useState(false);

  async function handleLikeMessage(messageId: number) {
    try {
      setLoading(true);
      await messageContractRepository?.likeMessage(messageId);
      reloadComponents();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const avatarUri = createAvatar(from.toLowerCase());
    setAvatar(avatarUri);
  }, []);

  return (
    <Container>
      <ContentContainer>
        <Avatar src={avatar} alt="Avatar icon" />
        <WalletMessageContainer>
          <WalletAddress>{abbreviateWalletAddress(from)}</WalletAddress>
          <PostMessage>{content}</PostMessage>
        </WalletMessageContainer>
      </ContentContainer>

      <BottomInfo>
        {loading ? (
          <ThreeDots
            height="20"
            width="20"
            radius="9"
            color="#fafafa"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ alignSelf: "center" }}
            visible={true}
          />
        ) : (
          <LikeContainer>
            <HeartButton
              onMouseEnter={() => {
                setHeartImg(heart_icon);
              }}
              onMouseLeave={() => {
                setHeartImg(heart_icon_hollow);
              }}
              onClick={() => {
                handleLikeMessage(id);
              }}
            >
              <HeartIcon src={heartImg} alt="Heart icon" />
            </HeartButton>
            <BottomText>{likes}</BottomText>
          </LikeContainer>
        )}

        <CoinContainer>
          <Modal
            messageId={id}
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

          <BottomText>{`${coins} BNB`}</BottomText>
        </CoinContainer>
      </BottomInfo>
    </Container>
  );
}
