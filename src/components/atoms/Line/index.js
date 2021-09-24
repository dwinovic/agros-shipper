import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Line = ({ className }) => {
  return <StyledLine className={className} />;
};
Line.defaultProps = {};

Line.propTypes = {
  className: PropTypes.string,
};

const StyledLine = styled.section`
  border: 1px solid #777777b7;
`;
export default Line;
