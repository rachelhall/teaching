import React from "react";

import Layout from "../../../components/layout";
import PodcastArchive from "../../../components/podcastArchive";

const Interviews = props => {
  return (
    <Layout>
      <PodcastArchive title="Interviews" tag="interviews" />
    </Layout>
  );
};

Interviews.pageTransitionDelayEnter = true;
export default Interviews;
