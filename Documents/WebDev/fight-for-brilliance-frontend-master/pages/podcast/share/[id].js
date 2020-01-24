import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

// components
import Layout from '../../../components/layout';
import ShareSet from '../../../components/share/shareSet';
import { Text, Title } from '../../../theme/fonts';
import { Colors } from '../../../theme';

// queries & data
import { withApollo } from '../../../lib/apollo';
import { PODCAST_SHARE_INFO } from '../../../graphql/queries';

const SharePage = props => {
  const router = useRouter();
  const { id = `` } = router.query;

  const { loading, data } = useQuery(PODCAST_SHARE_INFO, {
    variables: { slug: id }
  });

  //www.facebook.com/sharer/sharer.php?u=https://fight-for-brilliance.coreybrown89.now.sh/podcast/test

  return (
    <Layout>
      <Background>
        <PageHeader>
          <Title
            size="2rem"
            style={{ letterSpacing: `4px`, color: Colors.primary }}
          >
            Thank your for sharing.
          </Title>
          <Text>
            By sharing this episode, you could be giving someone the exact words
            they need to inspire them to fight for brilliance in their life.
            Thank you for being a part of this community.
          </Text>
        </PageHeader>

        <Sharing>
          <ShareSet title="Image set" />
          <ShareSet title="Video Set" />
        </Sharing>
      </Background>
    </Layout>
  );
};

const Background = styled.div`
  background-color: ${Colors.background};
  padding-top: 8rem;
`;

const PageHeader = styled.div`
  margin: 0 auto;
  max-width: 680px;
  text-align: center;
  padding: 1rem;
  padding-bottom: 5rem;

  h1 {
    margin-bottom: 2rem;
  }
`;

const Sharing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;
`;

export default withApollo(SharePage);
