import React, { useContext, useState } from "react";
import styled from "styled-components";
import Slider from "react-id-swiper";
import moment from "moment";

// assets
import downArrow from "../../static/icons/down-arrow.svg";
import leftArrow from "../../static/icons/chevron-left.svg";
import rightArrow from "../../static/icons/chevron-right.svg";

// components
import PlayButton from "../playButton";
import PlayerContext from "../../components/player/context";

// style
import { Colors } from "../../theme";
import { SerifTitle, Text } from "../../theme/fonts";

const ClipSlider = ({ quotes, url, date, title, image }) => {
  const ctx = useContext(PlayerContext);
  const [swiper, updateSwiper] = useState(null);
  const formatDate = moment(date).format(`DD.MM.YY`);

  const updatePlayer = timecode => {
    ctx.update({
      visible: true,
      url: url,
      isPlaying: true,
      playhead: getSeconds(timecode),
      date: formatDate,
      image,
      title
    });
  };

  const getSeconds = timecode => {
    const [hours, mins, seconds] = timecode.split(`:`);
    return Number(seconds) + Number(mins) * 60 + Number(hours) * 3600;
  };

  const settings = {
    slidesPerView: 1,
    watchOverflow: true,
    loop: true
  };

  if (quotes)
    return (
      <Wrapper>
        <Slider getSwiper={updateSwiper} {...settings}>
          {quotes &&
            quotes.map(quote => {
              return (
                <SlideOuter>
                  <SlideInner>
                    <Quote>{quote.quotetext}</Quote>
                    <PlayButton
                      color="white"
                      size="55"
                      onClick={() => updatePlayer(quote.quotetimecode)}
                    />
                    <Description>Start the show from here</Description>
                  </SlideInner>
                </SlideOuter>
              );
            })}
        </Slider>

        <SliderNav>
          <NavButton
            onClick={() => swiper.slidePrev()}
            aria-label="got to previous slide"
          >
            <img src={leftArrow} alt="arrow left" />
          </NavButton>
          <NavButton
            onClick={() => swiper.slideNext()}
            aria-label="got to next slide"
          >
            <img src={rightArrow} alt="arrow right" />
          </NavButton>
        </SliderNav>

        <ShowMore>
          <ShowMoreText>Show details</ShowMoreText>
          <figure>
            <img src={downArrow} height="38" alt="down arrow" />
          </figure>
        </ShowMore>
      </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 53px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background-color: ${Colors.primary};

  @media (max-width: 768px) {
    height: auto;
    padding-top: 5rem;
    padding-bottom: 2rem;
    flex-direction: column;
  }
`;

const SlideOuter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SlideInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;

  @media (max-width: 768px) {
    margin: 0 1.25rem;
    max-width: none;
  }
`;

const Quote = styled(SerifTitle)`
  color: white;
  font-size: 1.8rem;
  max-width: 580px;
  text-align: center;
  line-height: 1.5em;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(Text)`
  font-size: 0.7rem;
  color: ${Colors.secondary};
  text-align: center;
  margin-top: 0.5rem;
`;

const ShowMore = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: relative;
    margin-top: 4rem;
  }

  figure {
    margin: 0;
    padding: 0;
    animation: bobble 3s infinite ease-in-out;
  }

  @keyframes bobble {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const ShowMoreText = styled(Text)`
  color: white;
  margin-bottom: 0.5rem;
`;

const SliderNav = styled.nav`
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 0;
  right: 0;
  z-index: 30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  width: 100%;
`;

const NavButton = styled.button`
  background-color: ${Colors.secondary};
  padding: 0.5rem 1rem;
  pointer-events: all;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    transform: scale(0.8);
  }
`;

export default ClipSlider;
