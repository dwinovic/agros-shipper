import React from 'react';
import styled from 'styled-components';
import { Breadcrumbs, CardWrapper } from '../..';
import { ICSearch, IMGBgHeader } from '../../../assets';
import PropTypes from 'prop-types';
import { breakpoints } from '../../../utils';

const HeaderSection = ({ className }) => {
  const pathNavigation = [
    {
      name: 'DASHBOARD',
      path: '/',
      active: false,
    },
    {
      name: 'PO AKTIF',
      path: '/po-aktif',
      active: false,
    },
    {
      name: 'RINGKASAN',
      path: '/ringkasan',
      active: false,
    },
    {
      name: 'DELIVERY ORDER AKTIF',
      path: '/history',
      active: true,
    },
  ];

  return (
    <StyledHeaderSection className={className}>
      <header className="container">
        <div className="header-left">
          <h1 className="heading-section white">Muatan Dikirim</h1>
          <Breadcrumbs path={pathNavigation} theme="white" />
        </div>
        <div className="header-right">
          <CardWrapper className="search-wrapper">
            <img src={ICSearch} alt="search" />
            <input
              type="text"
              placeholder="Ketik Nomor Purchase Order / Delivery Order ..."
            />
          </CardWrapper>
        </div>
      </header>
    </StyledHeaderSection>
  );
};
HeaderSection.defaultProps = {};

HeaderSection.propTypes = {
  className: PropTypes.string,
};

const StyledHeaderSection = styled.section`
  background-image: ${() => `url(${IMGBgHeader})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: max-content;
  padding-bottom: 120px;
  header.container {
    padding-top: 250px;
    display: flex;
    justify-content: space-between;
    position: relative;
    ${breakpoints.lessThan('680px')`
      flex-direction: column;
      margin-bottom: 32px;
    `}
    .header-left {
      flex: auto;
    }
    .header-right {
      flex: auto;
      /* position: absolute; */
      height: max-content;
      right: 0;
      ${breakpoints.lessThan('tablet')`
        right: 16px;
      `}
      ${breakpoints.lessThan('680px')`
        position: static;
      `}
      .search-wrapper {
        width: 100%;
        padding: 17px 20px;
        display: flex;
        gap: 1rem;
        ${breakpoints.lessThan('laptop')`
          min-width: 400px;
        `}
        ${breakpoints.lessThan('840px')`
          min-width: 300px;
        `}
        input {
          width: 100%;
          background-color: transparent;
          border: 0;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
`;
export default HeaderSection;
