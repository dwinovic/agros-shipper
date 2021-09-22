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
  children: PropTypes.elementType,
};

const StyledMainLayout = styled.div`
  width: 100vw;
  background-color: #f8f8f8;
  /* ${breakpoints.lessThan('desktop')`
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
  `}  */

  /* START ==== Global Styling for current page and children component */
  .container {
    width: 1500px;
    margin: 0 auto;
    ${breakpoints.lessThan('desktop')`
      width: 90vw; 
    `}
    ${breakpoints.lessThan('tablet')`
      width: 95vw; 
    `}
  }
  .hover {
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
  /* Typhography */
  .heading-section {
    color: #000000;
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 31px;
  }
  .text-sm {
    font-size: 12px;
    color: #777777;
  }
  .text-md {
    font-size: 16px;
    color: #777777;
  }
  .text-bold {
    font-weight: 600;
  }
  .heading-card-sm {
    font-size: 18px;
    margin: 12px 0;
  }
  .heading-card-md {
    font-size: 28px;
    margin-bottom: 30px;
  }
  /* END ==== Global Styling for current page and children component */
`;

export default MainLayout;
