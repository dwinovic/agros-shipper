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
  children: PropTypes.object,
};

const StyledMainLayout = styled.div`
  background-color: #f8f8f8;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
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
      width: 100vw; 
      padding: 0 16px;
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
  .text-lg {
    font-size: 18px;
    color: #777777;
  }
  .text-bold {
    font-weight: 600;
  }
  .text-extra-bold {
    font-weight: 700;
    color: #000000;
  }
  .heading-card-sm {
    font-size: 18px;
    margin: 12px 0;
  }
  .sub-heading {
    font-size: 18px;
    color: #000000;
  }
  .heading-card-md {
    font-size: 28px;
  }
  /* Color */
  .primary {
    color: #4c9f70;
  }
  .bg-primary {
    background-color: #4c9f70;
  }
  .secondary {
    color: #ffbb00;
  }
  .gray {
    color: #e8e8e8;
  }
  .bg-gray {
    background-color: #e8e8e8;
  }
  .white {
    color: white;
  }
  .bg-white {
    background-color: white;
  }
  /* END ==== Global Styling for current page and children component */
`;

export default MainLayout;
