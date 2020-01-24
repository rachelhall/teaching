import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import darkPlay from '../static/icons/play.svg';
import whitePlay from '../static/icons/play-sm-white.svg';
import darkPause from '../static/icons/pause.svg';
import whitePause from '../static/icons/pause-sm-white.svg';

const propTypes = {
  isPlaying: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.oneOf([`white`, `dark`])
};
const defaultProps = {
  isPlaying: false,
  onClick: () => {},
  label: ``,
  size: 60,
  color: `dark`
};

const PlayButton = ({ onClick, label, size, color, isPlaying }) => {
  return (
    <Button onClick={onClick} aria-label={label}>
      {isPlaying && <img src={color === `dark` ? darkPause : whitePause} width={size} />}
      {!isPlaying && <img src={color === `dark` ? darkPlay : whitePlay} width={size} />}
    </Button>
  );
};

const Button = styled.button`
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  display: inline;
  text-align: left;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

PlayButton.propTypes = propTypes;
PlayButton.defaultProps = defaultProps;

export default PlayButton;
