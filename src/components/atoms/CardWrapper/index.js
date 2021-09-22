import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = ({ children, className, hoverDisabled }) => {
  return (
    <StyledCardWrapper className={className} hoverDisabled={hoverDisabled}>
      {children}
    </StyledCardWrapper>
  );
};
CardWrapper.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  hoverDisabled: PropTypes.bool,
};
const StyledCardWrapper = styled.div`
  background: var(--global-charcoal-0) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 30px;
  width: max-content;
  /* height: max-content; */
  &:hover {
    box-shadow: ${({ hoverDisabled }) =>
      hoverDisabled ? 'none' : '0px 0px 20px #00000029'};
    /* cursor: pointer; */
  }
`;
export default CardWrapper;
