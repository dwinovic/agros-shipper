import React from 'react';
import styled from 'styled-components';
import { HistoryOrder, Pagination } from '../..';
// import { Page } from '../../atoms/Pagination';

const HistoryPurchaseSection = () => {
  // console.log(setData);
  const dataHistory = [
    {
      no_delivery_order: 'DO-AGRS-240521.1228',
      total_ritase: 1,
      nama_barang: 'Pasir Cuci Lumajang',
      berat_barang: 35,
      kota_muat: 'Gresik',
      tanggal_muat: '23/12/2020',
      kota_bongkar: 'Lumajang',
      tangal_bongkar: '26/12/2020',
    },
    {
      no_delivery_order: 'DO-AGRS-240521.1228',
      total_ritase: 1,
      nama_barang: 'Pasir Cuci Lumajang',
      berat_barang: 35,
      kota_muat: 'Gresik',
      tanggal_muat: '23/12/2020',
      kota_bongkar: 'Lumajang',
      tangal_bongkar: '26/12/2020',
    },
    {
      no_delivery_order: 'DO-AGRS-240521.1228',
      total_ritase: 1,
      nama_barang: 'Pasir Cuci Lumajang',
      berat_barang: 35,
      kota_muat: 'Gresik',
      tanggal_muat: '23/12/2020',
      kota_bongkar: 'Lumajang',
      tangal_bongkar: '26/12/2020',
    },
    {
      no_delivery_order: 'DO-AGRS-240521.1228',
      total_ritase: 1,
      nama_barang: 'Pasir Cuci Lumajang',
      berat_barang: 35,
      kota_muat: 'Gresik',
      tanggal_muat: '23/12/2020',
      kota_bongkar: 'Lumajang',
      tangal_bongkar: '26/12/2020',
    },
    {
      no_delivery_order: 'DO-AGRS-240521.1228',
      total_ritase: 1,
      nama_barang: 'Pasir Cuci Lumajang',
      berat_barang: 35,
      kota_muat: 'Gresik',
      tanggal_muat: '23/12/2020',
      kota_bongkar: 'Lumajang',
      tangal_bongkar: '26/12/2020',
    },
    {
      no_delivery_order: 'DO-AGRS-240521.1228',
      total_ritase: 1,
      nama_barang: 'Pasir Cuci Lumajang',
      berat_barang: 35,
      kota_muat: 'Gresik',
      tanggal_muat: '23/12/2020',
      kota_bongkar: 'Lumajang',
      tangal_bongkar: '26/12/2020',
    },
  ];
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
            {dataHistory.map((item) => (
              <div className="item">
                <HistoryOrder
                  noOrder={item.no_delivery_order}
                  totalRitase={item.total_ritase}
                  namaBarang={item.nama_barang}
                  beratBarang={item.berat_barang}
                  kotaMuat={item.kota_muat}
                  kotaBongkar={item.kota_bongkar}
                  tanggalBongkar={item.tangal_bongkar}
                />
              </div>
            ))}
          </div>
          <div className="item-wrapper">
            {dataHistory.map((item) => (
              <div className="item">
                <HistoryOrder
                  noOrder={item.no_delivery_order}
                  totalRitase={item.total_ritase}
                  namaBarang={item.nama_barang}
                  beratBarang={item.berat_barang}
                  kotaMuat={item.kota_muat}
                  kotaBongkar={item.kota_bongkar}
                  tanggalBongkar={item.tangal_bongkar}
                />
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
    width: 100vw;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      /* width: 0; */
      /* background: transparent; */
    }
    .scrool-history {
      width: max-content;
      display: flex;
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
