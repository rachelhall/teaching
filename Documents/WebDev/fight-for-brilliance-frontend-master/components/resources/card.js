import React from "react";
import styled from "styled-components";

import { Text, Title, Subtext } from "../../theme/fonts";
import { Colors } from "../../theme";

const Card = data => {
  if (!data) return null;

  const {
    name,
    description,
    image,
    ctaText,
    ctaLink,
    ctaType,
    ctaFile,
    tags
  } = data.data;

  return (
    <CardWrapper>
      {image && image.sourceUrl && (
        <ImageWrapper>
          <img src={image.sourceUrl} alt={name} width="400" height="400" />
        </ImageWrapper>
      )}
      <Content>
        <div>
          {tags && <CardTag>{tags.join(" | ")}</CardTag>}
          <CardTitle size="1rem">{name}</CardTitle>
          <CardText>{description}</CardText>
        </div>
        {ctaType === `link` && (
          <CardCta as="a" href={ctaLink}>
            {ctaText} >
          </CardCta>
        )}
        {ctaType === `download` && (
          <CardCta as="a" href={ctaFile.sourceUrl} download={true}>
            {ctaText} >
          </CardCta>
        )}
      </Content>
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-gap: 4rem;
  max-width: 700px;
  margin: 4rem auto;

  @media screen and (max-width: 600px) {
    display: block;

    img {
      margin-bottom: 2rem;
    }
  }
`;

const ImageWrapper = styled.div`
  img {
    height: auto;
    max-width: 100%;
    background-color: #d8d8d8;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTag = styled(Subtext)`
  color: #ffffff;
`;

const CardTitle = styled(Title)`
  font-size: 1.3rem;
  letter-spacing: 3px;
  margin-bottom: 1rem;
  color: ${Colors.primary};
`;

const CardText = styled(Text)`
  font-size: 1rem;
  text-transform: none;
  margin-bottom: 2rem;
  color: ${Colors.background};
`;

const CardCta = styled(Title)`
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: ${Colors.primary};
  text-decoration: none;
`;

export default Card;
