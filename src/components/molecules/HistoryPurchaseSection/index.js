import React from 'react';
import styled from 'styled-components';
import { Pagination, SlideHistoryPagination } from '../..';
import { DB_Histories } from '../../../database';
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
      <div className="history-content">
        <div className="scrool-history">
          {/* {DB_Histories.data.map((page) => (
            <div className="item-wrapper" key={page.page}>
              {page.data.map((item, index) => (
                <div className="item">
                  <TicketCard
                    key={index}
                    noOrder={item.no_delivery_order}
                    totalRitase={item.total_ritase}
                    namaBarang={item.nama_barang}
                    beratBarang={item.berat_barang}
                    titleColThree={item.kota_muat}
                    footerColThree={item.tangal_bongkar}
                    titleColFour={item.kota_bongkar}
                    footerColFour={item.tangal_bongkar}
                  />
                </div>
              ))}
            </div>
          ))} */}
        </div>
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
  .history-content {
    display: flex;
    margin-top: 50px;
    width: 100vw;
    overflow-x: scroll;
    margin-bottom: 8px;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
      /* visibility: hidden; */
    }
    .scrool-history {
      width: max-content;
      display: flex;
      /* gap: 32px; */
      &::before,
      &::after {
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
        margin-right: 24px;
        &.active {
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
