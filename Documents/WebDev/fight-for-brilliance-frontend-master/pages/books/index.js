import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

// data
import { withApollo } from "../../lib/apollo";
import { GET_ALL_RESOURCES } from "../../graphql/queries";
import { formatResources } from "../../lib/formatResourcs";

// components
import Layout from "../../components/layout";
import { Tabs, TabContent } from "../../components/tabs";
import { BookList, ResourceList } from "../../components/resources";
import { Title } from "../../theme/fonts";
import { Colors } from "../../theme";

const Books = props => {
  const { loading, data } = useQuery(GET_ALL_RESOURCES);
  let resources = { books: [], resources: [] };

  if (data && data.resources) {
    resources = formatResources(data);
  }

  return (
    <Layout>
      <PageWrapper>
        <Tabs labels={["Books", "Resources"]} centered>
          <TabContent tabId="books">
            <TabWrapper>
              {resources.books.length > 0 && (
                <BookList data={resources.books} />
              )}
            </TabWrapper>
          </TabContent>
          <TabContent tabId="resources">
            <TabWrapper>
              {resources.resources.length > 0 && (
                <ResourceList data={resources.resources} />
              )}
            </TabWrapper>
          </TabContent>
        </Tabs>
      </PageWrapper>
    </Layout>
  );
};

const PageWrapper = styled.div`
  padding: 4rem 5%;
  background-color: ${Colors.secondary};
`;

const TabWrapper = styled.div`
  margin-top: 3rem;

  @media (min-width: 768px) {
    min-height: 90vh;
  }
`;

export default withApollo(Books);
