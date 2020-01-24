import React from "react";
import styled from "styled-components";
import moment from "moment";

// components
import { Tabs, TabContent } from "../tabs";

// style
import { Colors } from "../../theme";
import { Title, Text, Subtext } from "../../theme/fonts";

const Details = ({ guest, date, detail, links }) => {
  const dateFormat = moment(date).format(`DD.MM.YY`);

  const createMarkup = data => {
    return { __html: data };
  };

  return (
    <Wrapper>
      <Sideline>
        <Subtext>
          {guest} | {dateFormat}
        </Subtext>
      </Sideline>

      <Content>
        <Tabs labels={["Overview", "Notes"]}>
          <TabContent tabId="overview">
            <ContentWrapper>
              <Description as="h3">{detail.title}</Description>
              <Text
                as="div"
                css={`
                  text-align: justify;
                `}
                dangerouslySetInnerHTML={createMarkup(detail.content)}
              ></Text>
            </ContentWrapper>
          </TabContent>

          <TabContent tabId="notes">
            <ContentWrapper>
              <Description
                as="h4"
                css={`
                  padding-left: 0;
                  color: ${Colors.secondary};
                `}
              >
                Links
              </Description>

              {links &&
                links.map(link => {
                  return (
                    <LinkGroup key={link.linkurl.url}>
                      <NoteTitle>{link.linktitle}</NoteTitle>
                      <NoteLink
                        as="a"
                        href={link.linkurl.url}
                        target="_blank"
                        rel="noopener nofollow"
                      >
                        {link.linkurl.url}
                      </NoteLink>
                    </LinkGroup>
                  );
                })}

              <Description
                as="h4"
                css={`
                  margin-top: 3rem;
                  padding-left: 0;
                  color: ${Colors.secondary};
                `}
              >
                Connect
              </Description>

              <LinkGroup>
                <NoteTitle>Justin on Instagram</NoteTitle>
                <NoteLink
                  as="a"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  www.booktitlehere.com
                </NoteLink>
              </LinkGroup>

              <LinkGroup>
                <NoteTitle>Justin on Twitter</NoteTitle>
                <NoteLink
                  as="a"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  www.booktitlehere.com
                </NoteLink>
              </LinkGroup>

              <LinkGroup>
                <NoteTitle>Website</NoteTitle>
                <NoteLink
                  as="a"
                  href="https://justinkeller.com"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  www.booktitlehere.com
                </NoteLink>
              </LinkGroup>
            </ContentWrapper>
          </TabContent>
        </Tabs>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${Colors.background};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 5rem;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const Description = styled(Title)`
  font-size: 1.6rem;
  color: ${Colors.primary};
  letter-spacing: 3px;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  margin-top: 5rem;

  p + p {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;

const LinkGroup = styled.div`
  margin-bottom: 2rem;

  /* p + p {
    margin-top: 0rem;
  } */
`;

const Sideline = styled.div`
  flex: 1 1 30%;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${Colors.secondary};
  text-align: right;
  margin-top: calc(7rem + 10px);

  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  flex: 2 1 60%;
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0 5%;
    flex: 1;
  }
`;

const NoteTitle = styled(Subtext)``;

const NoteLink = styled(Text)`
  color: ${Colors.primary};
  margin-bottom: 2rem;
`;

export default Details;
