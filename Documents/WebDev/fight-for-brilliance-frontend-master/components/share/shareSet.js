import React from 'react';
import styled from 'styled-components';

import { Title } from '../../theme/fonts';
import { Colors } from '../../theme';

const ShareSet = props => {
  return (
    <Wrapper>
      <SetTitle as="p">share set</SetTitle>
      <Images>
        <Square />
        <Portrait />
      </Images>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 6rem;
  margin: 2rem;
`;

const SetTitle = styled(Title)`
  font-size: 1rem;
  letter-spacing: 2px;
  color: ${Colors.primary};
  text-align: center;
  margin-bottom: 1rem;
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: minmax(222px, 1fr) minmax(136px, 1fr);
  grid-template-rows: minmax(222px, 1fr);
  min-height: 222px;
  grid-gap: 16px;
`;

const Square = styled.div`
  background-color: #d8d8d8;
`;

const Portrait = styled.div`
  background-color: #d8d8d8;
`;

export default ShareSet;
