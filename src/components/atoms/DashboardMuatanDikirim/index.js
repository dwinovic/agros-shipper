import React from 'react';
import { CardMenu, CardOrderDetail, CardStatusPO } from '..';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ICBoxMessager,
  ICBoxPay,
  ICCarActive,
  ICCarOrange,
  ICDikirim,
  ICTerkirim,
  ICTertunda,
} from '../../../assets';

const DashboardMuatanDikirim = () => {
  return (
    <StyledDashboardMuatanDikirim className="container">
      <CardOrderDetail
        idPurchase="AGR001/02/2020#096"
        itemName="Batubara"
        ton={200000}
        percent={20}
      >
        <div className="detail-status">
          <CardStatusPO
            className="item"
            status={<span className="text-bold">Terkirim</span>}
            description="Muatan Anda sedang dalam perjalanan."
            theme="gray"
            totalItem={396}
            icon={ICTerkirim}
          />
          <CardStatusPO
            className="item"
            status={<span className="text-bold">Dikirim</span>}
            description="Muatan Anda telah terbongkar di tujuan."
            theme="blue"
            totalItem={200}
            icon={ICDikirim}
          />
          <CardStatusPO
            className="item"
            description="Muatan Anda mengalami keterlambatan."
            status={<span className="text-bold">Tertunda</span>}
            theme="purple"
            totalItem={4}
            icon={ICTertunda}
          />
        </div>
      </CardOrderDetail>
      <div className="do-and-service">
        <div className="item-service">
          <CardStatusPO
            icon={ICCarOrange}
            titleColor="orange"
            status={
              <>
                <span className="text-bold">DO</span> Sisa
              </>
            }
            description="Muatan Anda sedang dalam perjalanan."
            totalItem={200}
          />
        </div>
        <div className="item-service">
          <CardStatusPO
            status={
              <>
                <span className="text-bold">DO</span> Aktif
              </>
            }
            description="Delivery order yang sedang kami proses dalam pengiriman."
            totalItem={400}
            icon={ICCarActive}
          />
        </div>
        <div className="item-service">
          <CardMenu
            icon={ICBoxMessager}
            title={
              <>
                <span className="text-bold">Agros</span> Messager
              </>
            }
            description={
              <>
                Interaksi eksklusif <span className="text-bold">1-ON-1</span>{' '}
                bersama Agros Sales / Admin sesuai dengan Office Hours.
              </>
            }
            onClick={() => {}}
            footer={
              <span>
                <span className="text-bold">MON - FRI</span> 09.00 - 17.00
              </span>
            }
          />
        </div>
        <div className="item-service">
          <CardMenu
            icon={ICBoxPay}
            title={
              <>
                <span className="text-bold">Agros</span> Pay
              </>
            }
            description="Halaman pembayaran eksklusif yang menawarkan kemudahan untuk muatan Anda."
            onClick={() => {}}
            footer="Lihat Tagihan Anda"
          />
        </div>
      </div>
    </StyledDashboardMuatanDikirim>
  );
};
DashboardMuatanDikirim.defaultProps = {};

DashboardMuatanDikirim.propTypes = {};

const StyledDashboardMuatanDikirim = styled.div`
  .detail-status {
    display: flex;
    gap: 1rem;
    .item {
      width: 250px;
    }
  }
  .do-and-service {
    display: flex;
    width: 100%;
    gap: 32px;
    margin-top: 32px;
    .item-service {
      width: 0;
      flex: auto;
    }
  }
`;

export default DashboardMuatanDikirim;
