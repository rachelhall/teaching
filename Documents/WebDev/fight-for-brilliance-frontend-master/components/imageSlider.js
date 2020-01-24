import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Slider from 'react-id-swiper';

// assets
import dave from '../static/images/dave.jpg';
import leftArrow from '../static/icons/slider-arrow-left.svg';
import rightArrow from '../static/icons/slider-arrow-right.svg';

import { Colors } from '../theme';
import { Title } from '../theme/fonts';

const ImageSlider = props => {
  const [swiper, updateSwiper] = useState(null);

  const settings = {
    spaceBetween: 16,
    slidesPerView: 3,
    watchOverflow: true
  };

  return (
    <Wrapper>
      <Slider getSwiper={updateSwiper} {...settings}>
        {[0, 1, 2, 3, 4, 5, 6].map(slide => (
          <SlideLink href="/podcast/test">
            <figure>
              {/* TODO: add episode name to alt text */}
              <img src={dave} alt="" />
              <Name as="figcaption">Dave Hollis</Name>
              <Episode as="figcaption">
                Facing greif and learning to dream again
              </Episode>
            </figure>
          </SlideLink>
        ))}
      </Slider>
      <Navigation>
        <NavButton
          aria-label="go to previous slide"
          onClick={() => swiper.slidePrev()}
        >
          <img src={leftArrow} alt="previous slide arrow" height="20" />
        </NavButton>
        <NavButton el="go to next slide" onClick={() => swiper.slideNext()}>
          <img src={rightArrow} alt="next slide arrow" height="20" />
        </NavButton>
      </Navigation>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 4rem;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0 2rem 0 0;
`;

const Name = styled(Title)`
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: white;
  word-break: break-word;
`;

const Episode = styled(Title)`
  font-size: 0.6rem;
  letter-spacing: 1.2px;
  color: ${Colors.secondary};
`;

const SlideLink = styled.a`
  max-width: 300px;
  width: 100%;
  text-decoration: none;

  img {
    transition: transform 0.15s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.1) translateY(-5%);
      box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.3);
    }
  }
`;

export default ImageSlider;
