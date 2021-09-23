import React, { useState } from 'react';
import styled from 'styled-components';
import { HistoryOrder, Pagination } from '../..';
// import { Page } from '../../atoms/Pagination';

const HistoryPurchaseSection = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  console.log(setData);
  return (
    <StyledHistoryPurchaseSection>
      <div className="container">
        <h1 className="heading-section">Riwayat Purchase Order</h1>
        <p className="sub-heading">
          Purchase order otomatis akan tersimpan dan terkumpul dalam halaman
          riwayat.
        </p>
      </div>
      <div className="history-content">
        <div className="scrool-history">
          <div className="item-wrapper active">
            {data.map((item) => (
              <div className="item">
                <HistoryOrder />
              </div>
            ))}
          </div>
          <div className="item-wrapper">
            {data.map((item) => (
              <div className="item">
                <HistoryOrder />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container pagination">
        <p className="text-lg text-bold">Halaman</p>
        <Pagination />
      </div>
    </StyledHistoryPurchaseSection>
  );
};
HistoryPurchaseSection.defaultProps = {};

HistoryPurchaseSection.propTypes = {};

const StyledHistoryPurchaseSection = styled.section`
  .history-content {
    display: flex;
    margin-top: 50px;
    .scrool-history {
      width: max-content;
      display: flex;
      &::before {
        content: ' ';
        display: inline-block;
        width: calc((100vw - 1500px) / 2);
        height: 100%;
      }
      .item-wrapper {
        width: 1500px;
        width: 1500px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        &.active {
          margin-right: 24px;
        }
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    gap: 60px;
    margin-top: 40px;
    align-items: center;
  }
`;

export default HistoryPurchaseSection;
