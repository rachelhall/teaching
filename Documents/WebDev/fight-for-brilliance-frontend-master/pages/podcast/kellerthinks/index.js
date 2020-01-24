import React from "react";

import Layout from "../../../components/layout";
import PodcastArchive from "../../../components/podcastArchive";

const KellerThinks = props => {
  return (
    <Layout>
      <PodcastArchive title="Kellerthinks" tag="kellerthinks" />
    </Layout>
  );
};

Interviews.pageTransitionDelayEnter = true;
export default KellerThinks;
