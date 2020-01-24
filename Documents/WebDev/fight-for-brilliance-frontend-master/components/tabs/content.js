import React, { useContext } from 'react';
import styled from 'styled-components';

// context
import { TabContext } from './index';

const Content = ({ tabId, children }) => {
  const value = useContext(TabContext);
  const active = value === tabId.toLowerCase();
  return <Wrapper aria-hidden={!active}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  height: auto;
  opacity: 1;
  transform: translateX(0);
  transition: all 0.3s ease-in-out;

  &[aria-hidden='true'] {
    position: fixed;
    height: 0px;
    opacity: 0;
    transform: translateY(10%);
  }
`;

export default Content;
