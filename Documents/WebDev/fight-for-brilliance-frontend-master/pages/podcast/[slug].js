import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";

// components
import Layout from "../../components/layout";
import PodcastHeader from "../../components/podcast/header";
import ClipSlider from "../../components/podcast/clipSlider";
import Details from "../../components/podcast/details";
import Related from "../../components/podcast/related";
import PageLoader from "../../components/pageLoader";

// queries & data
import { withApollo } from "../../lib/apollo";
import { POSTCAST_BY_SLUG } from "../../graphql/queries";

const SinglePodcast = props => {
  const router = useRouter();
  const { slug = `` } = router.query;

  const { data, loading } = useQuery(POSTCAST_BY_SLUG, {
    variables: { slug: slug }
  });

  const renderMeta = () => {
    if (data && data.podcastBy) {
      const { Podcast } = data.podcastBy;
      return (
        <Head>
          <meta key="og:type" property="og:type" content="article" />
          <meta
            key="og:url"
            property="og:url"
            content={`https://fight-for-brilliance.coreybrown89.now.sh${router.asPath}`}
          />
          <meta
            key="og:title"
            property="og:title"
            content={`${Podcast.title} with special guest ${Podcast.guestname}`}
          />
          <meta
            key="og:description"
            property="og:description"
            content={Podcast.sharedescription}
          />
          <meta
            key="og:image"
            property="og:image"
            content={Podcast.facebookimage.sourceUrl}
          />
          <meta
            key="og:image:height"
            property="og:image:height"
            content="630"
          />
          <meta key="og:image:width" property="og:image:width" content="1200" />
          <meta
            key="og:video"
            property="og:video"
            content={Podcast.sharevideosquare}
          />
          <meta
            key="og:video:secure_url"
            property="og:video:secure_url"
            content={Podcast.sharevideosquare}
          />
          <meta
            key="og:video:height"
            property="og:video:height"
            content="1080"
          />
          <meta key="og:video:width" property="og:video:width" content="1080" />
        </Head>
      );
    } else {
      return null;
    }
  };

  console.log({ data, loading });

  return (
    <Layout>
      {renderMeta()}
      <PageLoader visible={loading} />
      {data && data.podcastBy && (
        <PodcastHeader
          data={{ ...data.podcastBy.Podcast, date: data.podcastBy.date }}
        />
      )}
      {data && data.podcastBy && (
        <ClipSlider
          quotes={data.podcastBy.Podcast.audioquotes}
          url={data.podcastBy.Podcast.podcasturl}
          image={data.podcastBy.Podcast.primaryimage.sourceUrl}
          title={data.podcastBy.Podcast.guestname}
          data={data.podcastBy.date}
        />
      )}
      {data && data.podcastBy && (
        <Details
          detail={{
            title: data.podcastBy.Podcast.overviewtitle,
            content: data.podcastBy.Podcast.overviewcontent
          }}
          links={data.podcastBy.Podcast.links}
          notes={data.podcastBy.Podcast.overviewtitle}
          guest={data.podcastBy.Podcast.guestname}
          date={data.podcastBy.date}
        />
      )}
      {/* <Related /> */}
    </Layout>
  );
};

SinglePodcast.pageTransitionDelayEnter = true;

export default withApollo(SinglePodcast);
