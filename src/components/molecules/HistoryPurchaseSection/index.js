import React from 'react';
import styled from 'styled-components';
import { Pagination, SlideHistoryPagination } from '../..';
import { DB_Histories } from '../../../database';
import { breakpoints } from '../../../utils';
// import { Page } from '../../atoms/Pagination';

const HistoryPurchaseSection = () => {
  return (
    <StyledHistoryPurchaseSection>
      <div className="container">
        <h1 className="heading-section">Riwayat Purchase Order</h1>
        <p className="sub-heading">
          Purchase order otomatis akan tersimpan dan terkumpul dalam halaman
          riwayat.
        </p>
      </div>
      <SlideHistoryPagination />
      <div className="container pagination">
        <p className="text-lg text-bold">Halaman</p>
        <Pagination dataPage={DB_Histories} />
      </div>
    </StyledHistoryPurchaseSection>
  );
};
HistoryPurchaseSection.defaultProps = {};

HistoryPurchaseSection.propTypes = {};

const StyledHistoryPurchaseSection = styled.section`
  .pagination {
    display: flex;
    justify-content: flex-end;
    gap: 60px;
    padding-top: 40px;
    align-items: center;
    ${breakpoints.lessThan('500px')`
      flex-direction: column;
      gap: 16px;
    `}
  }
`;

export default HistoryPurchaseSection;
