import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ path, theme }) => {
  return (
    <StyledBreadcrumbs>
      <p className={`text-sm text-bold ${theme}`}>NAVIGATION :</p>
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
`;
export default Breadcrumbs;
