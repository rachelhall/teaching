import React, { useContext, useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Slider from 'rc-slider';

// assets
import playBtn from '../../static/icons/player/play.svg';
import pauseBtn from '../../static/icons/player/pause.svg';
import soundIcon from '../../static/icons/player/sound.svg';

import { Colors } from '../../theme';
import { Subtext } from '../../theme/fonts';
import PlayerContext from './context';

const Controls = props => {
  const ctx = useContext(PlayerContext);
  const [playerUrl, setPlayerUrl] = useState(null);
  const [volume, setVolume] = useState(70);
  const [trackLength, setTrackLength] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const player = useRef(null);

  useEffect(() => {
    setPlayerUrl(props.url);
    if (ctx.isPlaying) {
      player.current.seekTo(props.playhead, `seconds`);
    }
  }, [props.url, props.playhead]);

  const setPodcastReady = () => {
    if (seconds !== props.playhead) {
      player.current.seekTo(props.playhead, `seconds`);
    }
    if (playerUrl) {
      ctx.update({ isPlaying: true });
    }
  };

  const playPause = () => {
    ctx.update({ isPlaying: !ctx.isPlaying });
  };

  const handleDuration = duration => {
    setTrackLength(duration);
  };

  const handleProgress = state => {
    if (state) {
      const { playedSeconds = 0, played = 0 } = state;
      setSeconds(playedSeconds);
      setTrackProgress(parseInt(played * 100));
    }
  };

  const formatSeconds = time => {
    if (String(time).length === 1) {
      return `0${time}`;
    } else {
      return time;
    }
  };

  const formatTime = time => {
    let min = parseInt(time / 60);
    let sec = parseInt(time % 60);

    min = formatSeconds(min);
    sec = formatSeconds(sec);

    return `${min}:${sec}`;
  };

  return (
    <ControlsWrapper>
      <PlayButton
        onClick={playPause}
        aria-label={`${ctx.isPlaying ? 'pause' : 'play'} audio`}
      >
        <Icon
          src={playBtn}
          width={60}
          alt="play icon"
          visible={!ctx.isPlaying}
        />
        <Icon
          src={pauseBtn}
          width={60}
          alt="pause icon"
          visible={ctx.isPlaying}
        />
      </PlayButton>

      <Track>
        <Time>{formatTime(seconds)}</Time>
        <Slider
          defaultValue={0}
          value={trackProgress}
          railStyle={{ backgroundColor: `white`, height: 2 }}
          trackStyle={{ backgroundColor: Colors.primary, height: 2 }}
          handleStyle={{
            backgroundColor: Colors.primary,
            border: `none`,
            width: 2,
            borderRadius: 0
          }}
        />
        <Time>{formatTime(trackLength)}</Time>
      </Track>

      <Volume>
        <VolumnIcon src={soundIcon} alt="volumn icon" width="22" />
        <Slider
          defaultValue={70}
          railStyle={{ backgroundColor: `white`, height: 2 }}
          trackStyle={{ backgroundColor: Colors.primary, height: 2 }}
          handleStyle={{
            backgroundColor: Colors.primary,
            border: `none`
          }}
          onChange={data => setVolume(data)}
        />
      </Volume>

      <HidePlayer>
        <ReactPlayer
          ref={player}
          url={playerUrl}
          volume={volume / 100}
          playing={ctx.isPlaying}
          onProgress={handleProgress}
          onDuration={handleDuration}
          onReady={setPodcastReady}
        />
      </HidePlayer>
    </ControlsWrapper>
  );
};

const ControlsWrapper = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Time = styled(Subtext)`
  color: ${Colors.primary};
  margin: 1rem;
`;

const PlayButton = styled.button`
  position: relative;
  height: 60px;
  width: 60px;
`;

const Icon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transition: all 0.15s ease-in-out;
  transform: ${props => (props.visible ? 'scale(1)' : 'scale(0)')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

const Track = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Volume = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 2rem;
`;

const VolumnIcon = styled.img`
  margin-right: 0.5rem;
`;

const HidePlayer = styled.div`
  display: none;
`;

export default Controls;
