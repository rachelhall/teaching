import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ReactFullpage from "@fullpage/react-fullpage";

// components
import Layout from "../../components/layout";
import Button from "../../components/button";
import SocialLinks from "../../components/social";

// lib
import { withApollo } from "../../lib/apollo";

// assets
import bgImage from "../../static/images/dave.jpg";
import circLogo from "../../static/logos/ffb-circle.svg";
import downArrow from "../../static/icons/down-arrow.svg";

// style
import { Title } from "../../theme/fonts";
import { GrainyImage } from "../../theme/mixins";
import { Colors } from "../../theme";
import { sizes } from "../../theme/mobileStyles";

const PodcastArchive = props => {
  return (
    <Layout>
      <div className="section" id="section1" data-anchor="hero">
        <div
          className="fp-bg"
          style={{
            backgroundColor: Colors.background,
            backgroundSize: `cover`
          }}
        ></div>
        <SocialLinks position="right" color="tan" />
        <HeroWrapper>
          <GrainyImageContainer>
            <GrainyImage
              src={require("../../static/images/hero.jpg")}
              css={`
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                margin-top: 0;
                height: 70vh;
                @media (${sizes.MOBILE}) {
                  min-width: 20em;
                  min-height: 14em;
                  max-width: 22em;
                  max-height: 30em;
                  background-position: 40px -35px;
                  transform: scale(1.35);
                }
              `}
            >
              <Title
                size="3rem"
                css={`
                  color: white;
                  padding: 2rem;
                  text-align: center;
                  min-width: 325px;
                  max-width: 650px;

                  @media (${sizes.MOBILE}) {
                    letter-spacing: 3px;
                    max-width: 250px;
                    font-size: 1.5rem;
                  }
                `}
              >
                I'm Justin, and I'm in your corner.
              </Title>
            </GrainyImage>
          </GrainyImageContainer>

          <Link href="/podcast#welcome">
            <ScrollLink as="a">
              Scroll Down
              <figure>
                <img src={downArrow} alt="down arrow" />
              </figure>
            </ScrollLink>
          </Link>
        </HeroWrapper>
      </div>
      <div className="section" id="section2" data-anchor="welcome">
        <div
          className="fp-bg"
          style={{
            backgroundColor: Colors.primary
          }}
        ></div>
        <BrowseWrapper>
          <CircleLogo>
            <figure>
              <img src={circLogo} alt="fight for brilliance logo" />
            </figure>
          </CircleLogo>

          <Title
            size="1.1rem"
            as="h2"
            css={`
              color: white;
              padding: 2rem;
              max-width: 500px;
              letter-spacing: 4.58px;
              text-align: justify;
              line-height: 2rem;
              font-weight: normal;
              word-break: break-all;
              margin-bottom: 10vh;
              @media (${sizes.MOBILE}) {
              }
            `}
          >
            Welcome to the show that challenges you every week to rebel against
            complacency and conformity, and fight for brilliance in every area
            of your life.
          </Title>
          <Button href="/podcast/interviews">Browse Shows</Button>
        </BrowseWrapper>
      </div>
    </Layout>
  );
};

const HeroWrapper = styled.section`
  display: flex;
  position: relative;
  justify-content: stretch;
  align-items: center;
  /* flex-direction: column; */
  background-color: ${Colors.background};
  padding: 0 4rem 9rem 4rem;
  height: 100%;
  min-height: 70vh;
  width: 100%;
  box-sizing: border-box;
  @media (${sizes.MOBILE}) {
    justify-content: center;
    padding-bottom: 180px;
  }
`;

const BrowseWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.primary};
  padding: 4rem;
  height: 100%;
  min-height: 100vh;
  @media (${sizes.MOBILE}) {
    padding: 3rem;
  }
`;

const CircleLogo = styled.div`
  position: absolute;
  top: -8rem;
  left: 1rem;
  animation: rotate 25s infinite ease-in-out;
  @media (${sizes.MOBILE}) {
    max-width: 10em;
    top: -3rem;
    left: 0.3rem;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ScrollLink = styled.a`
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 1rem;
  font-family: "PT Serif", "Times New Roman", Times, serif;
  color: ${Colors.primary};
  text-align: center;
  text-decoration: none;
  @media (${sizes.MOBILE}) {
    bottom: 5rem;
  }
`;

const GrainyImageContainer = styled.div`
  min-width: 90vw;
  margin: 0 auto;
  padding: 0;

  @media (${sizes.MOBILE}) {
    min-width: 20em;
    min-height: 18em;
    max-width: 22em;
    max-height: 30em;
    overflow: hidden;
  }
`;

export default withApollo(PodcastArchive);
