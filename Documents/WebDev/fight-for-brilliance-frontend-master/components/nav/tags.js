import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { Colors } from "../../theme";
import { Title, SerifTitle, Text } from "../../theme/fonts";

const Tags = ({ visible, data, onClose }) => {
  const router = useRouter();

  if (!data) return null;

  return (
    <Wrapper visible={visible}>
      <MainTags>
        <Close onClick={onClose}>X</Close>
        <MainShow>
          <SerifTitle
            as="button"
            onClick={() => {
              router.push(`/podcast/kellerthinks`);
              onClose();
            }}
          >
            Kellerthinks
          </SerifTitle>
          <Text>Shorter episodes with quick thoughts from Justin</Text>
        </MainShow>
        <MainShow>
          <SerifTitle
            as="button"
            onClick={() => {
              router.push(`/podcast/interviews`);
              onClose();
            }}
          >
            Interviews
          </SerifTitle>
          <Text>Justin interviews guests on the show</Text>
        </MainShow>
      </MainTags>
      <TagNav>
        <TopicHeading as="p">View by topic</TopicHeading>
        <ul>
          {data &&
            data.map(tag => {
              return (
                <li key={tag.node.id}>
                  <LinkButton
                    as="button"
                    aria-label={`go to podcasts about ${tag.node.slug}`}
                    onClick={() => {
                      router.push(
                        `/podcast/category/[category]`,
                        `/podcast/category/${tag.node.slug}`
                      );
                      onClose();
                    }}
                  >
                    <p>{tag.node.name}</p>
                  </LinkButton>
                </li>
              );
            })}
        </ul>
      </TagNav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: ${Colors.primary};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 50;
  transition: all 0.35s ease-in-out;
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: ${props =>
    props.visible ? "translateY(0)" : "translateY(-100%)"};
  pointer-events: ${props => (props.visible ? "auto" : "none")};
`;

const MainTags = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  background-color: ${Colors.secondary};
`;

const MainShow = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  background-color: ${Colors.secondary};

  button {
    color: ${Colors.primary};
    cursor: pointer;
    transition: all 0.3s;
  }

  p {
    opacity: 0;
    color: white;
    transform: translateY(10px);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    button {
      color: white;
    }

    p {
      opacity: 1;
      transform: translateY(-10px);
    }
  }
`;

const TagNav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.background};

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  font-size: 1rem;
  padding: 1rem;
`;

const TopicHeading = styled(SerifTitle)`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: ${Colors.primary};
`;

const LinkButton = styled(Title)`
  font-size: 1rem;
  letter-spacing: 2px;
  text-align: center;
  padding: 0.5rem 0;
  color: ${Colors.text.muted};
`;

export default Tags;
