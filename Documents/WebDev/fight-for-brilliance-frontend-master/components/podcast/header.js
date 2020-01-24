import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";

// assets
import dave from "../../static/images/dave.jpg";
import apple from "../../static/logos/apple.png";
import spotify from "../../static/logos/spotify.png";
import stitcher from "../../static/logos/stitcher.png";
import youtube from "../../static/logos/youtube.png";
import downArrow from "../../static/icons/chevron-down.svg";
import circleLogo from "../../static/logos/ffb-circle-dark.svg";

// context
import PlayerContext from "../player/context";

// style
import { Colors } from "../../theme";
import { Title, Subtext } from "../../theme/fonts";
import { GrainyImage } from "../../theme/mixins";
import PlayButton from "../playButton";

const PodcastHeader = ({ data }) => {
  const ctx = useContext(PlayerContext);
  const date = moment(data.date).format(`DD.MM.YY`);

  return (
    <Wrapper>
      <Details>
        <HeaderTitle>{data.guestname}</HeaderTitle>
        <Subtext>
          {date} | {data.tags[0].name}
        </Subtext>
        <Title
          as="h2"
          size="1.6rem"
          css={`
            margin-top: 0.5rem;
            color: white;
            letter-spacing: 3px;
            max-width: 300px;
            color: ${Colors.primary};
          `}
        >
          {data.title}
        </Title>
        <PlayWrapper>
          <PlayButton
            label="play podcast"
            isPlaying={ctx.isPlaying}
            onClick={() => {
              if (ctx.isPlaying) {
                ctx.update({
                  visible: false,
                  isPlaying: false,
                  title: data.guestname,
                  date: date,
                  image: data.primaryimage.sourceUrl
                });
              } else {
                ctx.update({
                  url: data.podcasturl,
                  visible: true,
                  isPlaying: true,
                  playhead: 0,
                  title: data.guestname,
                  date: date,
                  image: data.primaryimage.sourceUrl
                });
              }
            }}
          />
        </PlayWrapper>
      </Details>
      <Display>
        <Logo>
          <Title as="p">Ep. {data.episodenumber}</Title>
          <img src={circleLogo} width="150" />
        </Logo>
        <ColorGrainy src={data.primaryimage.sourceUrl}></ColorGrainy>
        <Listens>
          <Subtext>Listen or Watch</Subtext>
          <SocialIcons>
            <a
              href="https://apple.com"
              target="_blank"
              rel="nooppener nofollow"
            >
              <img src={apple} height="27" alt="apple logo" />
            </a>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="nooppener nofollow"
            >
              <img src={spotify} height="27" alt="spotify logo" />
            </a>
            <a
              href="https://stitcher.com"
              target="_blank"
              rel="nooppener nofollow"
            >
              <img src={stitcher} height="27" alt="stitcher logo" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="nooppener nofollow"
            >
              <img src={youtube} height="27" alt="youtube logo" />
            </a>
          </SocialIcons>
        </Listens>
      </Display>
      <Inside>
        <Title
          size="1rem"
          css={`
            letter-spacing: 4px;
            margin-right: 1rem;
          `}
        >
          Inside this episode
        </Title>
        <img src={downArrow} width="22" alt="down arrow" />
      </Inside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 4rem;
  background-color: ${Colors.background};
  height: calc(90vh - 53px);

  @media (max-width: 768px) {
    height: auto;
  }
`;

const HeaderTitle = styled(Title)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
  word-break: break-word;
  word-spacing: 1000px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8%;
  box-sizing: border-box;
`;

const Display = styled.div`
  position: relative;
  flex: 1;
  margin-top: 2rem;
  border-right: 0.5px solid ${Colors.secondary};
  display: flex;
  flex-direction: column;
`;

const ColorGrainy = styled(GrainyImage)`
  filter: grayscale(0%);
  opacity: 0.8;
  flex: 1;
`;

const Logo = styled.div`
  position: absolute;
  top: -2rem;
  left: -6rem;
  z-index: 10;

  p {
    font-size: 2rem;
    color: white;
    position: absolute;
    display: block;
    left: 3rem;
    top: 40%;
    width: 200%;
    z-index: 10;
  }

  img {
    z-index: 5;
    animation: rotate 30s infinite ease-in-out;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const PlayWrapper = styled.div`
  margin-top: 2rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;

  a {
    transition: all 0.15s;
    flex: 1 1 auto;
    margin-right: 1rem;
  }

  & a:hover {
    transform: scale(1.1);
  }
`;

const Listens = styled.div`
  padding: 2rem;
  border-left: 0.5px solid ${Colors.secondary};
`;

const Inside = styled.div`
  padding: 1rem;
  padding-left: 4rem;
  background-color: white;
  border-top: 1px solid ${Colors.secondary};
  width: 100%;
  display: flex;
  align-items: center;
`;

export default PodcastHeader;
