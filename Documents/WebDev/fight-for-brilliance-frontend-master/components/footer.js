import React, { useContext } from 'react';
import styled from 'styled-components';

// assets
import instagram from '../static/icons/instagram.svg';
import facebook from '../static/icons/facebook.svg';
import twitter from '../static/icons/twitter.svg';

// components
import SocialLinks from '../components/social';

// context
import PlayerContext from './player/context';

// style
import { Title, Text } from '../theme/fonts';
import { Colors } from '../theme';

const Footer = props => {
  const ctx = useContext(PlayerContext);

  return (
    <FooterWrapper id="site-footer" extraMargin={ctx.visible}>
      <Title
          size="1rem"
          css={`
            font-family: Config-SemiBold;
            display: block;
            color: ${Colors.text.muted};
            letter-spacing: 3px;
            text-align: center;
          `}
        >
          Fight for brilliance
        </Title>
      <SocialLinks />
      <Colophon>
        <ColText>
          ©{new Date().getFullYear()} Fight For Brilliance. All rights reserved.
        </ColText>
        <Link as="a" href="mailto:info@fightforbrilliance.com">
          info@fightforbrilliance
        </Link>
      </Colophon>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  z-index: 40;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.secondary};
  padding: 3rem 3rem 1rem 3rem;
  border-top: 3px solid ${Colors.primary};
  margin-bottom: ${props => props.extraMargin ? '132px' : '0'};
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.7rem;
  color: ${Colors.text.muted};
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
`;
const Button = styled.a`
  margin: 0;
  padding: 0 1rem;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.3);
    /* opacity: 0.8; */
  }

  figure,
  img {
    margin: 0;
    padding: 0;
  }
`;

const ColText = styled(Text)`
  font-size: 0.7rem;
  color: ${Colors.text.muted};
  font-weight: normal;
  margin-right: 0.25rem;
`;

const Link = styled(Text)`
  font-size: 0.7rem;
  color: ${Colors.primary};
  text-decoration: none;
`;

const Colophon = styled.div`
  display: flex;
`;

export default Footer;
