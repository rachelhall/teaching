import React from "react";
import styled from "styled-components";

import circleLogo from "../../static/logos/ffb-circle-dark.svg";

import { Colors } from "../../theme";

const PageLoader = (visible = true) => {
  return (
    <Wrapper visible={visible}>
      <Logo>
        <img src={circleLogo} width="150" />
      </Logo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.primary};
  opacity: ${props => (props.visible === true ? 1 : 0)};
  transition: all 0.5s ease-out;
  pointer-events: none;
`;

const Logo = styled.div`
  img {
    z-index: 5;
    animation: rotate 5s infinite ease-in-out;
    opacity: 0.3;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default PageLoader;
