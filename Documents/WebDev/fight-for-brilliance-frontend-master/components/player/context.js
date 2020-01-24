import { createContext } from 'react';

export default createContext({
  visible: false,
  url: null,
  isPlaying: false,
  playhead: 0,
  title: `Test Title`,
  date: `01.01.20`,
  image: ``
});
