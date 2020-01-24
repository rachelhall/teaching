import React from "react";
import styled from "styled-components";

// styles
import { Colors } from "../../theme";
import { Title, Text } from "../../theme/fonts";
import { sizes } from "../../theme/mobileStyles";

const PhotoText = ({
  layout = `photo-left`,
  title,
  content,
  image = `https://source.unsplash.com/random/400x475`
}) => {
  return (
    <Wrapper>
      {layout === `photo-left` && (
        <PhotoContainer layout={`photo-left`}>
          <Photo src={image} />
        </PhotoContainer>
      )}
      <Content >
        <ContentTitle>
          FOR YEARS, JON BATTLED WITH ADDICTION BUT IT WAS WHEN HE LET GO OF
          CONTROL THAT HE FOUND HIS WAY.
        </ContentTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          tincidunt cursus urna in lobortis. Ut maximus lorem at posuere
          commodo. Fusce a molestie leo, id ullamcorper purus. Sed posuere sit
          amet urna ut sagittis. Donec molestie consectetur urna, porttitor
          fermentum ex tempor id. Nulla sit amet interdum sem. Curabitur gravida
          velit et libero finibus, non pretium velit vestibulum. Praesent felis
          metus, pretium et mi vel, blandit tincidunt elit. Nulla venenatis
          laoreet molestie.
        </Text>
      </Content>
      {layout === `photo-right` && (
        <PhotoContainer layout={`photo-right`}>
          <Photo src={image} />
        </PhotoContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.layout === "photo-left"
      ? "minmax(400px, 1fr) minmax(200px, 2fr)"
      : "minmax(200px, 2fr) minmax(400px, 1fr)"};
  padding: 6rem 0;
  padding-bottom: 8%;
  padding: 6rem 0;
  padding-bottom: 8%;
  background-color: ${Colors.background};
  @media (${sizes.MOBILE}) {
    display: flex;
    flex-direction: column;
  }
`;

const PhotoContainer = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: ${props =>
    props.layout === "photo-left" ? "flex-end" : "flex-start"};
  @media (${sizes.MOBILE}) {
    max-width: 85vw;
    margin: auto;
    padding: 4em 0;
  }
`;

const Photo = styled.img`
  max-width: 20em;
  background-color: #eaeaea;
`;

const Content = styled.div`
  padding: 0 4rem;
  @media(${sizes.MOBILE}) {
    padding 0 2rem;
  }
`;

const ContentTitle = styled(Title)`
  font-size: 1.4rem;
  color: ${Colors.primary};
  letter-spacing: 3px;
  margin-bottom: 4rem;
`;

export default PhotoText;
