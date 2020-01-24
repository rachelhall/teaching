import React, { useContext } from 'react';
import styled from 'styled-components';

import PlayerContext from './context';

// components
import Controls from './controls';
import Share from './share';
import TrackInfo from './trackInfo';

const PodcastPlayer = props => {
  const ctx = useContext(PlayerContext);

  return (
    <Player visible={ctx.visible}>
      <TrackInfo title={ctx.title} date={ctx.date} image={ctx.image} />
      <Controls url={ctx.url} playhead={ctx.playhead} />
      <Share />
    </Player>
  );
};

const Player = styled.div`
  position: fixed;
  display: grid;
  height: 132px;
  grid-template-columns: 1fr 2fr auto;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(171deg, #edeae8, #dcd8d6);
  border: 0 solid #979797;
  z-index: 40;
  transition: all 0.3s ease-in-out;
  transform: ${props =>
    props.visible ? 'translateY(0%)' : 'translateY(100%)'};
`;

export default PodcastPlayer;
