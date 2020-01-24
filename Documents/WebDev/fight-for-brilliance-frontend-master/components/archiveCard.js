import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { Colors } from '../theme';
import { Title, Subtext } from '../theme/fonts';

const ArchiveCard = ({ data = null, onClick = () => {} }) => {
  if (!data) return null;
  const date = moment(data.date).format(`MM.DD.YY`);

  return (
    <article>
      <Card onClick={() => onClick(data)} aria-label="select podcast">
        <Guest size="1rem" as="h3">
          {data.Podcast.guestname}
        </Guest>
        <Subtext>
          {date} | {data.Podcast.tags[0].name}
        </Subtext>
        <CardTitle size="1rem" as="h4">
          {data.Podcast.title}
        </CardTitle>
      </Card>
    </article>
  );
};

const Card = styled.button`
  width: 100%;
  background-color: ${Colors.background};
  text-align: left;
  padding: 3rem;
  border: none;
  border-bottom: 0.5px solid ${Colors.secondary};
  box-sizing: border-box;
  transition: all 0.3s;
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: ${Colors.primary};

    h3 {
      color: ${Colors.background};
    }

    h4 {
      color: white;
    }
  }
`;

const Guest = styled(Title)`
  letter-spacing: 2px;
  color: ${Colors.text.muted};
  margin-bottom: 1rem;
`;

const CardTitle = styled(Title)`
  letter-spacing: 2px;
  color: ${Colors.primary};
  margin-top: 0.5rem;
`;

export default ArchiveCard;
