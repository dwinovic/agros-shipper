import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { breakpoints } from '../../../utils';

const Breadcrumbs = ({ path, theme }) => {
  return (
    <StyledBreadcrumbs>
      <p className={`text-sm text-bold ${theme}`}>NAVIGATION :</p>
      <div className="breadcrumb-wrapper">
        {path.map((item) => (
          <Link
            className={`button ${path.length > 1 && 'with-next-icon'} ${
              item.active && 'current-page'
            }`}
            to={item.path}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </StyledBreadcrumbs>
  );
};
Breadcrumbs.defaultProps = {};

Breadcrumbs.propTypes = {
  path: PropTypes.array.isRequired,
  theme: PropTypes.oneOf(['white', 'gray']),
};

const StyledBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  height: max-content;
  gap: 32px;
  /* overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  } */
  ${breakpoints.lessThan('tablet')`
     gap: 16px;
     flex-direction: column;
     align-items: flex-start;
  `}
  .breadcrumb-wrapper {
    /* &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    overflow-x: scroll; */
    height: 100%;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    p {
      margin-right: 30px;
    }
    .button {
      text-decoration: none;
      padding: 8px 11px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: 600;
      background-color: #e8e8e8;
      color: #777777;
      ${breakpoints.lessThan('680px')`
        min-width: max-content;
      `}
      &.current-page {
        color: #ffffff;
        background-color: #4c9f70;
      }
      &.with-next-icon {
        margin-right: 24px;
        position: relative;
        &:after {
          content: '>';
          color: white;
          position: absolute;
          right: -16px;
        }
        &:last-child {
          &:after {
            display: none;
          }
        }
      }
    }
  }
`;
export default Breadcrumbs;
