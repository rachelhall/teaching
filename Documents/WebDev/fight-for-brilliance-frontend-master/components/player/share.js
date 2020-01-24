import React from 'react';
import styled from 'styled-components';

// components
import shareBtn from '../../static/icons/player/options.svg';

const Share = props => {
  return (
    <ShareWrapper>
      <Button aria-label="player options">
        <img src={shareBtn} width="35" height="34" alt="more options icon" />
      </Button>
    </ShareWrapper>
  );
};

const ShareWrapper = styled.div`
  align-self: center;
  margin-right: 1rem;
`;

const Button = styled.button``;

export default Share;
