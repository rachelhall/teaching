import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-id-swiper";
import { useQuery } from "@apollo/react-hooks";
import GET_ALL_RESOURCES from "../../graphql/queries";
// assets
import leftArrow from "../../static/icons/slider-left-white.svg";
import rightArrow from "../../static/icons/slider-right-white.svg";

// styles
import { Colors } from "../../theme";
import { Title, Text, SerifTitle } from "../../theme/fonts";
import { sizes } from "../../theme/mobileStyles";

const CtaSlider = props => {
  const [swiper, updateSwiper] = useState(null);

  const settings = {
    slidesPerView: 1
  };

  return (
    <Wrapper>
      <ModuleTitle>More from Justin</ModuleTitle>
      <div>
        <SliderWrapper>
          <Slider getSwiper={updateSwiper} {...settings}>
            <Slide>
              <SlideTitle as="h4">
                Speaking <br />& Coaching
              </SlideTitle>
              <Text style={{ color: `white`, maxWidth: `300px` }}>
                Partnering with teams and individuals by challenging them to
                rethink the way they work, what it means to build a brilliant
                brand, and what it means to build a brilliant life.
              </Text>
              <Link as="a" href="https://google.com">
                Contact
              </Link>
            </Slide>
            <Slide>
              <SlideTitle as="h4">
                Speaking <br />& Coaching
              </SlideTitle>
              <Text style={{ color: `white` }}>
                Partnering with teams and individuals by challenging them to
                rethink the way they work, what it means to build a brilliant
                brand, and what it means to build a brilliant life.
              </Text>
              <Link as="a" href="https://google.com">
                Contact
              </Link>
            </Slide>
            <Slide>
              <SlideTitle as="h4">
                Speaking <br />& Coaching
              </SlideTitle>
              <Text style={{ color: `white` }}>
                Partnering with teams and individuals by challenging them to
                rethink the way they work, what it means to build a brilliant
                brand, and what it means to build a brilliant life.
              </Text>
              <Link as="a" href="https://google.com">
                Contact
              </Link>
            </Slide>
          </Slider>
        </SliderWrapper>
        <SliderNav>
          <SliderButton onClick={() => swiper.slidePrev()}>
            <img src={leftArrow} alt="arrow pointing left" width="35" />
          </SliderButton>
          <SliderButton onClick={() => swiper.slideNext()}>
            <img src={rightArrow} alt="arrow pointing right" width="35" />
          </SliderButton>
        </SliderNav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.secondary};
  padding-bottom: 2rem;
`;

const ModuleTitle = styled(SerifTitle)`
  font-size: 1.6rem;
  padding: 5%;
  word-spacing: 1000px;
  color: white;
  @media (${sizes.MOBILE}) {
  }
`;

const SliderWrapper = styled.div`
  border-bottom: 1px solid ${Colors.background};
  margin-bottom: 2rem;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-height: 300px;
  padding: 3rem 4rem;
  border-right: 1px solid ${Colors.background};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${Colors.primary};

    a {
      color: ${Colors.secondary};
    }

    h4 {
      color: ${Colors.secondary};
    }
  }
`;

const SlideTitle = styled(Title)`
flex: 1;
  font-size: 1.2rem;
  letter-spacing: 2px;
  color: ${Colors.primary};
  margin-bottom: 2rem;
`;

const SliderNav = styled.nav`
  margin-left: 3rem;
`;

const SliderButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  margin-right: 1rem;
`;

const Link = styled(Title)`
flex: 1;
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: ${Colors.primary};
  text-decoration: none;
  margin-top: 3rem;
  display: block;

  &:after {
    content: ">";
    margin-left: 1rem;
  }
`;

export default CtaSlider;
