import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ICNextRight } from '../../../assets';

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
    <StyledPage className={`${active && 'bg-primary'} hover ${className}`}>
      <input
        type="radio"
        value={value}
        onChange={onClick}
        name={name}
        id={id}
      />
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
  console.log('dataPage', dataPage);
  // const { totalPage, currentPage } = dataPage;

  return (
    <StyledPagination {...props}>
      <div className="pages">
        {/* {dataPage?.totalPage.map(() => (
          ))} */}
        <Page number={1} active />
        <Page number={2} />
        <Page number={3} />
        <Page number={4} />
        <Page number={5} />
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
  .pages {
    display: flex;
    gap: 1rem;
  }
  .handle-button-next {
    display: flex;
    gap: 1rem;
    .btn {
      width: 60px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
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
  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  span {
    font-weight: 700;
    height: max-content;
    color: #777777;
  }
`;

export default Pagination;
