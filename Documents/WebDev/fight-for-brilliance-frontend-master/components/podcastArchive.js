import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useQuery } from "@apollo/react-hooks";

// queries
import { PODCASTS_BY_TAG } from "../graphql/queries";
import { withApollo } from "../lib/apollo";

// components
import ArchiveCard from "./archiveCard";
import SelectedShow from "../components/podcast/selectedShow";

// style
import { Colors } from "../theme";

const PodcastArchive = props => {
  const [activeShow, setActiveShow] = useState(null);

  const { data } = useQuery(PODCASTS_BY_TAG, {
    variables: { tag: props.tag },
    notifyOnNetworkStatusChange: true
  });

  useEffect(() => {
    if (data && data.podcasts && !activeShow) {
      if (data.podcasts && data.podcasts.edges.length) {
        const show = data.podcasts.edges[0].node;
        selectShow(show);
      }
    }
  }, [data]);

  const selectShow = show => {
    setActiveShow(show);
  };

  return (
    <ArchiveWrapper>
      <SelectedShow show={activeShow} title={props.title} />
      <SideBar>
        {data &&
          data.podcasts &&
          data.podcasts.edges &&
          data.podcasts.edges.map((show, i) => (
            <ArchiveCard
              key={show.node.id}
              data={show.node}
              onClick={selectShow}
            />
          ))}
      </SideBar>
    </ArchiveWrapper>
  );
};

const ArchiveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const SideBar = styled.aside`
  flex: 1;
  background-color: ${Colors.background};
  min-height: 100vh;
  overflow-y: scroll;
`;

export default withApollo(PodcastArchive);
