import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Line = () => {
  return <StyledLine />;
};
Line.defaultProps = {};

Line.propTypes = {};

const StyledLine = styled.section`
  border: 1px solid #777777b7;
`;
export default Line;
