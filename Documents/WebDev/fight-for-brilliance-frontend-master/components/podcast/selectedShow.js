import React from "react";
import styled from "styled-components";
import Link from "next/link";

// assets
import logo from "../../static/logos/ffb-circle.svg";
import leftArrow from "../../static/icons/left-arrow.svg";

// components
import Button from "../button";

// styles & lib
import { Title, Text, Subtext, SerifTitle } from "../../theme/fonts";
import { GrainyImage } from "../../theme/mixins";
import { Colors } from "../../theme";

const SelectedShow = ({ show, title }) => {
  if (!show) return <p>...</p>;

  return (
    <SinglePodcast>
      <Link href="/podcast">
        <PageTitle size="1.5rem" as="a">
          <figure>
            <img src={leftArrow} width="46" />
          </figure>
          {title}
        </PageTitle>
      </Link>
      <Episode>
        <EpisodeImage
          src={show.Podcast.primaryimage.sourceUrl}
          css={`
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            height: 70vh;
          `}
        />
        <EpisodeBadge aria-hidden>
          <EpisodeNumber size="2rem" as="p">
            EP. {show.Podcast.episodenumber}
          </EpisodeNumber>
          <Logo src={logo} width="130" />
        </EpisodeBadge>
        <EpisodeBtn href={`/podcast/${show ? show.slug : ""}`}>
          Go to episode
        </EpisodeBtn>
      </Episode>
      <Details>
        <Subtext>{show.Podcast.length} minutes</Subtext>
        <Text
          css={`
            color: ${Colors.text.default};
          `}
        >
          {show.Podcast.shortdescription}
        </Text>
      </Details>
    </SinglePodcast>
  );
};

const PageTitle = styled(SerifTitle)`
  color: white;
  width: 100%;
  margin: 4rem 2rem;
  padding-left: 2rem;
  display: flex;
  overflow-y: scroll;
  justify-content: flex-start;
  align-items: flex-start;
  text-transform: capitalize;

  & figure {
    margin: 0 1rem 0 0;
    padding: 0;
  }
`;

const SinglePodcast = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${Colors.primary};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Episode = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding-right: 3rem;
  width: 100%;
`;

const Details = styled.div`
  margin-top: 7rem;
  padding-right: 4rem;
  padding-left: 4rem;
  box-sizing: border-box;
`;

const EpisodeBadge = styled.div`
  position: absolute;
  z-index: 20;
  top: -5rem;
  right: 4rem;
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  color: white;

  animation: rotate 45s infinite ease-in-out;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const EpisodeNumber = styled(Title)`
  position: relative;
  margin-top: 3rem;
  text-align: right;
  margin-left: 2rem;
  color: white;
  z-index: 5;
  letter-spacing: 4px;
`;

const EpisodeImage = styled(GrainyImage)`
  height: auto !important;
  flex: 1;
  opacity: 0.6;
  z-index: 1;
  padding: 28%;
  box-sizing: border-box;
  margin-right: -7rem;
`;

const EpisodeBtn = styled(Button)`
  display: block;
  flex: 1;
  position: relative;
  z-index: 10;
`;

export default SelectedShow;
