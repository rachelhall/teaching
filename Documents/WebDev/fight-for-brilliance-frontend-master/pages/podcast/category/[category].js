import React from "react";
import { useRouter } from "next/router";

import Layout from "../../../components/layout";
import PodcastArchive from "../../../components/podcastArchive";

const Interviews = props => {
  const router = useRouter();
  const { category = `` } = router.query;

  return (
    <Layout>
      <PodcastArchive title={category} tag={category} />
    </Layout>
  );
};

Interviews.pageTransitionDelayEnter = true;

export default Interviews;
