import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ICNextRight } from '../../../assets';
import { breakpoints } from '../../../utils';

export const Page = ({
  active,
  number,
  className,
  value,
  onClick,
  name,
  id,
}) => {
  return (
    <StyledPage
      className={`${active && 'bg-primary'} hover ${className}`}
      onClick={onClick}
    >
      {/* <input
        type="radio"
        value={value}
        onChange={onClick}
        name={name}
        id={id}
      /> */}
      <span>{number}</span>
    </StyledPage>
  );
};

Page.defaultProps = {};

Page.propTypes = {
  active: PropTypes.bool,
  number: PropTypes.number,
};

const Pagination = ({ dataPage, ...props }) => {
  return (
    <StyledPagination {...props}>
      <div className="pages">
        {dataPage?.data.map((item, index) => (
          <Page
            key={index}
            number={item.page}
            active={item.page === 1 && true}
          />
        ))}
      </div>
      <div className="handle-button-next">
        <div className="btn prev bg-gray hover">
          <img src={ICNextRight} alt="next" />
        </div>
        <div className="btn next bg-gray hover">
          <img src={ICNextRight} alt="next" />
        </div>
      </div>
    </StyledPagination>
  );
};

Pagination.defaultProps = {};

Pagination.propTypes = {};

const StyledPagination = styled.section`
  display: flex;
  gap: 24px;
  ${breakpoints.lessThan('500px')`
    flex-direction: column;
  `}
  .pages {
    display: flex;
    gap: 1rem;
  }
  .handle-button-next {
    display: flex;
    gap: 1rem;
    ${breakpoints.lessThan('500px')` 
      justify-content: space-between;
    `}
    .btn {
      width: 60px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      ${breakpoints.lessThan('500px')`
        height: 40px; 
        width: 40px;
      `}
      &.prev {
        transform: rotate(180deg);
      }
    }
  }
`;

const StyledPage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &.bg-primary {
    span {
      color: white;
    }
  }
  /* input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
  } */
  span {
    font-weight: 700;
    height: max-content;
    color: #777777;
  }
`;

export default Pagination;
