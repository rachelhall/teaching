import React, { useContext } from "react";
import styled from "styled-components";

// assets
import instagram from "../static/icons/instagram.svg";
import facebook from "../static/icons/facebook.svg";
import twitter from "../static/icons/twitter.svg";

// context
import PlayerContext from "./player/context";

// style
import { Title, Text } from "../theme/fonts";
import { Colors } from "../theme";

const SocialLinks = ({position, color}) => {
  return (
    <Social position={position} color={color}>
      <SocialButtons>
        <Button
          href=""
          target="_blank"
          rel="noopener nofollow"
          aria-label="instagram profile"
        >
          <figure>
            <img src={instagram} height="30" width="30" alt="instagram logo" />
          </figure>
        </Button>
        <Button
          href=""
          target="_blank"
          rel="noopener nofollow"
          aria-label="facebook profile"
        >
          <figure>
            <img src={facebook} height="30" width="30" alt="facebook logo" />
          </figure>
        </Button>
        <Button
          href=""
          target="_blank"
          rel="noopener nofollow"
          aria-label="twitter profile"
        >
          <figure>
            <img src={twitter} height="30" width="30" alt="twitter logo" />
          </figure>
        </Button>
      </SocialButtons>
    </Social>
  );
};

const Social = styled.div`
width: 100%;
  display: flex;
  justify-content: ${props => props.position === "right" ? "flex-end" : "center"};
  font-size: 0.7rem;
  color: ${Colors.text.muted};
  background-color: ${props => props.color === "tan" ? `${Colors.background}` : "transparent"}
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
`;
const Button = styled.a`
  margin: 0;
  padding: 0 1rem;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.3);
    /* opacity: 0.8; */
  }

  figure,
  img {
    margin: 0;
    padding: 0;
  }
`;

export default SocialLinks;
