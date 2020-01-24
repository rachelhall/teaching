import React from 'react';
import styled from 'styled-components';

// components
import ImageSlider from '../imageSlider';
import { SerifTitle } from '../../theme/fonts';

// style
import { Colors } from '../../theme';

const RelatedEpisodes = props => {
  return (
    <Wrapper>
      <ContentWrapper>
        <GridWrapper>
          <RelatedWrapper>
            <Related as="h6">
              Related
              <br />
              episodes
            </Related>
          </RelatedWrapper>
          <SliderWrapper>
            <ImageSlider />
          </SliderWrapper>
        </GridWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 0 4rem 5rem 4rem;
  background-color: ${Colors.background};
  overflow-x: hidden;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 6rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${Colors.primary};
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
`;

const RelatedWrapper = styled.div`
  flex: 1;
  align-self: center;
`;

const Related = styled(SerifTitle)`
  word-break: break-all;
  color: white;
`;

const SliderWrapper = styled.div`
  width: 70%;
`;

export default RelatedEpisodes;
