import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Footer, Navbar } from '../../components';
import { breakpoints } from '../../utils';
const MainLayout = ({ children }) => {
  return (
    <StyledMainLayout>
      <Navbar className="container" />
      {children}
      <Footer />
    </StyledMainLayout>
  );
};

MainLayout.propTypes = {
  optionalElementType: PropTypes.elementType,
};

const StyledMainLayout = styled.div`
  background-color: purple;
  width: 100vw;
  ${breakpoints.lessThan('desktop')`
    background-color: yellow;
  `}
  ${breakpoints.lessThan('laptop')`
    background-color: cyan;
  `}
  ${breakpoints.lessThan('tablet')`
    background-color: blue;
  `}
  ${breakpoints.lessThan('mobile')`
    background-color: pink;
  `}
  ${breakpoints.lessThan('minimobile')`
    background-color: green;
  `} 
  .container {
    width: 1500px;
    margin: 0 auto;
    /* background-color: yellow; */
    ${breakpoints.lessThan('desktop')`
      width: 90vw; 
    `}
    ${breakpoints.lessThan('tablet')`
      width: 95vw; 
    `}
  }
`;

export default MainLayout;
