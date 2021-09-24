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
import { breakpoints } from '../../../utils';

const DashboardSection = () => {
  const pathNavigation = [
    {
      name: 'DASHBOARD',
      path: '/',
      active: true,
    },
  ];

  return (
    <StyledDashboardSection className="container">
      <h1 className="heading-section">Dashboard Kerabat</h1>
      <Breadcrumbs path={pathNavigation} />
      <div className="menu-dashboard">
        <div className="row">
          <div className="medium-lg-card">
            <CardProfileCompany
              companyName="PT. ANTAR GLOBAL PROSPERO"
              phone="(31) 3974550"
              email="Antarglobalprospero@gmail.com"
            />
          </div>
          <div className="medium-lg-card">
            <CardAddPurchaseOrder />
          </div>
          <div className="small-card">
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
          <div className="small-card">
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
          <div className="medium-md-card">
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
          <div className="medium-md-card">
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
      ${breakpoints.lessThan('laptop')` 
        flex-wrap: wrap;
      `}
      .small-card {
        width: 15%;
        ${breakpoints.lessThan('laptop')`
          flex: auto; 
        `}
        ${breakpoints.lessThan('minimobile')`
          flex: 1; 
          width: 100%;
        `}
      }
      .medium-md-card {
        width: 25%;
        ${breakpoints.lessThan('laptop')`
          flex: auto;  
        `}
        ${breakpoints.lessThan('minimobile')`
          width: 100%; 
        `}
      }
      .medium-lg-card {
        width: 30%;
        flex: 1;
        ${breakpoints.lessThan('laptop')`
          width: 50%; 
        `}
        ${breakpoints.lessThan('tablet')`
          width: 100%; 
        `}
      }
      .large {
        flex: 1;
        width: 0;
        ${breakpoints.lessThan('laptop')`
          width: 100%; 
        `}
      }
    }
  }
`;

export default DashboardSection;
