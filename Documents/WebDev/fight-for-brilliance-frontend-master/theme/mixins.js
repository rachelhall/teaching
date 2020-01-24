import styled from 'styled-components';
import { sizes } from './mobileStyles'
export const GrainyImage = styled.div`
  position: relative;
  filter: grayscale(100%);

  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #eaeaea;
  background-image: url(${props => props.src});
  min-height: 400px;
  min-width: 400px;
  overflow: hidden;
  

  @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%, 0%);
    }
    70% {
      transform: translate(0%, 15%);
    }
    80% {
      transform: translate(3%, 35%);
    }
    90% {
      transform: translate(-10%, 10%);
    }
  }

  & > * {
    z-index: 20;
  }

  &:after {
    content: '';
    z-index: 10;
    animation: grain 8s steps(10) infinite;
    position: fixed;
    top: -100%;
    left: -100%;
    right: -100%;
    bottom: -100%;
    opacity: 0.25;
    height: 300%;
    width: 300%;
    background-repeat: repeat;
    filter: contrast(150%);
    background-image: url(${require('../static/texture/grain.png')});
  }

  
`;
