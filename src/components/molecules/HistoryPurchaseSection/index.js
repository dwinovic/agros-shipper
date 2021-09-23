import React, { useState } from 'react';
import styled from 'styled-components';
import { HistoryOrder } from '../..';

const HistoryPurchaseSection = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
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
          <div className="item-wrapper">
            {data.map((item) => (
              <div className="item">
                <HistoryOrder />
              </div>
            ))}
          </div>
          {/* <div className="item-wrapper">
            {data.map((item) => (
              <div className="item">
                <HistoryOrder />
              </div>
            ))}
          </div> */}
        </div>
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
      width: 100vw;
      background-color: green;
      display: flex;
      &::before {
        content: ' ';
        display: inline-block;
        width: calc((100vw - 1500px) / 2);
        height: 100%;
      }
      .item-wrapper {
        width: 1500px;
        background-color: pink;
        width: 1500px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        &.active {
          .item {
          }
        }
      }
    }
  }
`;

export default HistoryPurchaseSection;
