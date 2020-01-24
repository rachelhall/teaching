import React from 'react';
import styled from 'styled-components';

import Nav from './nav';
import Footer from './footer';

const Layout = props => {
  return (
    <React.Fragment>
      <Nav />
      <Main>{props.children}</Main>
      <Footer />
    </React.Fragment>
  );
};

const Main = styled.main`
  margin-top: 53px;

 
`;

export default Layout;
