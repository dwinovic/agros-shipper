import React from 'react';
import styled from 'styled-components';
import { Breadcrumbs, CardWrapper } from '../..';
import { ICSearch } from '../../../assets';

const HeaderSection = () => {
  const pathNavigation = [
    {
      name: 'DASHBOARD',
      path: '/dashboard',
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
      path: '/deliver-order-aktif',
      active: true,
    },
  ];

  return (
    <StyledHeaderSection>
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

HeaderSection.propTypes = {};

const StyledHeaderSection = styled.section`
  header.container {
    display: flex;
    justify-content: space-between;
    .header-left {
      flex: auto;
    }
    .header-right {
      flex: auto;
      .search-wrapper {
        width: 100%;
        padding: 17px 20px;
        display: flex;
        gap: 1rem;
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
