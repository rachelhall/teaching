import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Colors } from '../../theme';
import { Title, Subtext } from '../../theme/fonts';

import dave from '../../static/images/dave.jpg';

const propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string
};

const defaultProps = {
  title: ``,
  date: ``,
  image: ``
};

const TrackInfo = ({ title, date, image }) => {
  return (
    <InfoWrapper>
      <Image src={image} />
      <Content>
        <ShowTitle as="p">Fight for brilliance with Justin Keller</ShowTitle>
        <Date as="p">{date}</Date>
        <Name as="p">{title}</Name>
      </Content>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  padding: 1rem;
`;

const ShowTitle = styled(Title)`
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: ${Colors.text.muted};
  max-width: 175px;
  margin-bottom: 0.5rem;
`;

const Date = styled(Subtext)`
  color: ${Colors.primary};
`;

const Name = styled(Title)`
  font-size: 1.1rem;
  letter-spacing: 3px;
  color: ${Colors.secondary};
`;

const Image = styled.div`
  background-image: url(${props => props.src});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 90px;
`;

TrackInfo.propTypes = propTypes;
TrackInfo.defaultProps = defaultProps;

export default TrackInfo;
