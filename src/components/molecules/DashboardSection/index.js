import React from 'react';
import styled from 'styled-components';
import {
  Breadcrumbs,
  CardAddPurchaseOrder,
  CardMenu,
  CardProfileCompany,
  CardStatusPO,
} from '../..';
import {
  ICBoxPay,
  ICKritik,
  ICMessagerGreen,
  ICPaperCheck,
  ICPaperOrange,
} from '../../../assets';

const DashboardSection = () => {
  const pathNavigation = [
    {
      name: 'DASHBOARD',
      path: '/dashboard',
      active: true,
    },
  ];

  return (
    <StyledDashboardSection className="container">
      <h1 className="heading-section">Dashboard Kerabat</h1>
      <Breadcrumbs path={pathNavigation} />
      <div className="menu-dashboard">
        <div className="row">
          <div className="medium35">
            <CardProfileCompany
              companyName="PT. ANTAR GLOBAL PROSPERO"
              phone="(31) 3974550"
              email="Antarglobalprospero@gmail.com"
            />
          </div>
          <div className="medium35">
            <CardAddPurchaseOrder />
          </div>
          <div className="small">
            <CardStatusPO
              icon={ICPaperCheck}
              status={
                <>
                  <span className="text-bold">PO</span> Aktif
                </>
              }
              description={
                <>
                  Purchase order yang{' '}
                  <span className="text-bold">sedang berjalan.</span>
                </>
              }
              theme="green"
              totalItem={100}
            />
          </div>
          <div className="small">
            <CardStatusPO
              icon={ICPaperOrange}
              status={
                <>
                  <span className="text-bold">PO</span> Aktif
                </>
              }
              description={
                <>
                  Purchase order yang{' '}
                  <span className="text-bold">belum berjalan.</span>
                </>
              }
              theme="orange"
              totalItem={10}
            />
          </div>
        </div>
        <div className="row">
          <div className="medium25">
            <CardMenu
              icon={ICMessagerGreen}
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
          <div className="medium25">
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
          <div className="large">
            <CardMenu
              withImage
              icon={ICKritik}
              title="Kritik dan Saran"
              description="Agros team sangat terbuka dengan kritik dan saran Anda demi kenyamanan Anda."
              onClick={() => {}}
              footer="Masukan Kritik dan Saran"
            />
          </div>
        </div>
      </div>
    </StyledDashboardSection>
  );
};

DashboardSection.defaultProps = {};

DashboardSection.propTypes = {};

const StyledDashboardSection = styled.section`
  .menu-dashboard {
    width: 100%;
    .row {
      display: flex;
      gap: 1rem;
      align-items: stretch;
      margin-bottom: 20px;
      width: 100%;
      .small {
        width: 15%;
      }
      .medium25 {
        width: 25%;
      }
      .medium35 {
        width: 30%;
        flex: 1;
      }
      .large {
        flex: 1;
        width: 0;
      }
    }
  }
`;

export default DashboardSection;
