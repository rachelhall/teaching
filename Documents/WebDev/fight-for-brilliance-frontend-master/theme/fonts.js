import styled from 'styled-components';
import Colors from './colors';
import { sizes } from '../theme/mobileStyles'

/**
 * @param string size (5rem)
 * @param string color (Colors.secondary)
 */
export const Title = styled.h1`
  font-family: Config-Medium, Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: ${props => (props.size ? props.size : '5rem')};
  color: ${props => (props.color ? props.color : Colors.secondary)};
  letter-spacing: 10.42px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  @media (${sizes.MOBILE}) {
   
  }
`;

/**
 * @param string size (2rem)
 * @param string color (Colors.secondary)
 */
export const SerifTitle = styled.h1`
  font-family: 'PT Serif', serif;
  font-weight: normal;
  font-size: ${props => (props.size ? props.size : '2rem')};
  color: ${props => (props.color ? props.color : Colors.secondary)};
  letter-spacing: 0.3px;
  line-height: 2.3rem;
  margin: 0 0 1rem 0;
  padding: 0;
`;

/**
 * @param string size (0.6rem)
 * @param string color (Colors.secondary)
 */
export const Subtext = styled.p`
  font-family: Config-SemiBold, Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: ${props => (props.size ? props.size : '.6rem')};
  color: ${props => (props.color ? props.color : Colors.secondary)};
  letter-spacing: 3.1px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

/**
 * @param string size (1rem)
 * @param string color (Colors.secondary)
 */
export const Text = styled.p`
  font-family: PT Serif, serif;
  font-weight: normal;
  font-size: ${props => (props.size ? props.size : '1rem')};
  color: ${props => (props.color ? props.color : Colors.secondary)};
  letter-spacing: 0;
  line-height: 1.8rem;
  margin: 0;
  padding: 0;
  max-width: ${props => (props.maxWidth ? props.maxWidth: '600px' )};
  flex: 1;

  & + p {
    margin-top: 1rem;
  }
`;
