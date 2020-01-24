import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

// data
import { withApollo } from "../../lib/apollo";
import { GET_ALL_TAGS } from "../../graphql/queries";

// components
import Tags from "./tags";

// style
import { Colors } from "../../theme";
import { Title, Text } from "../../theme/fonts";

const Nav = () => {
  const [tagsVisible, setTagsVisible] = useState(false);
  const { loading, data } = useQuery(GET_ALL_TAGS);

  return (
    <NavWrapper id="site-header">
      <Logo>
        <Link href="/about">
          <TitleLink
            size="1rem"
            as="a"
            css={`
              font-family: Config-SemiBold, sans-serif;
              letter-spacing: 3px;
              color: ${Colors.text.muted};
            `}
          >
            Fight for Brilliance
          </TitleLink>
        </Link>
      </Logo>
      <MenuList>
        <LinkItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </LinkItem>

        <LinkItem>
          <button onClick={() => setTagsVisible(true)}>
            <p>Episodes</p>
          </button>
        </LinkItem>

        <LinkItem>
          <Link href="/books">
            <a>Books</a>
          </Link>
        </LinkItem>

        <LinkItem>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </LinkItem>
      </MenuList>
      <Tags
        visible={tagsVisible}
        onClose={() => setTagsVisible(false)}
        data={data && data.tags ? data.tags.edges : null}
      />
    </NavWrapper>
  );
};

const Logo = styled.div`
  background-color: ${Colors.secondary};
  padding: 1rem;
`;

const TitleLink = styled(Title)`
  text-decoration: none;
`;

const MenuList = styled.ul`
  display: flex;
  flex: 1;
  padding-right: 3rem;
  justify-content: flex-end;
  align-items: space-around;
  list-style-type: none;

  li {
    margin-top: 1rem;
  }
`;

const LinkItem = styled.li`
  a,
  p {
    font-family: Config-Medium, Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 0.8rem;
    letter-spacing: 3px;
    color: ${Colors.primary};
    padding: 0 1rem;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: ${Colors.secondary};
      text-shadow: -1px -6px #eaeaea;
    }
  }
`;

const NavWrapper = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  background-color: white;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 2px solid ${Colors.primary};
`;

export default withApollo(Nav);
