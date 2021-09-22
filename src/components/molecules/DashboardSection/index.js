import React from 'react';
import styled from 'styled-components';
import { CardAddPurchaseOrder, CardProfileCompany, CardStatusPO } from '../..';

const DashboardSection = () => {
  return (
    <StyledDashboardSection className="container">
      <h1 className="heading-section">Dashboard Kerabat</h1>
      <div className="navigation">
        <p className="text-sm text-bold">NAVIGATION :</p>
        <div className="current-page">DASHBOARD</div>
      </div>
      <div className="menu-dashboard">
        <div className="row">
          <div className="medium">
            <CardProfileCompany
              companyName="PT. ANTAR GLOBAL PROSPERO"
              phone="(31) 3974550"
              email="Antarglobalprospero@gmail.com"
            />
          </div>
          <div className="medium">
            <CardAddPurchaseOrder />
          </div>
          <div className="small">
            <CardStatusPO status="Aktif" theme="green" totalItem={100} />
          </div>
          <div className="small">
            <CardStatusPO status="Sisa" theme="orange" totalItem={10} />
          </div>
        </div>
      </div>
    </StyledDashboardSection>
  );
};

DashboardSection.defaultProps = {};

DashboardSection.propTypes = {};

const StyledDashboardSection = styled.section`
  .navigation {
    display: flex;
    gap: 33px;
    align-items: center;
    margin-bottom: 26px;
    .current-page {
      background-color: #4c9f70;
      border-radius: 5px;
      color: #ffffff;
      padding: 8px 11px;
      font-weight: 600;
      font-size: 12px;
    }
  }
  .menu-dashboard {
    .row {
      display: flex;
      gap: 1rem;
      align-items: stretch;
      .medium {
        width: 35%;
      }
      .small {
        width: 15%;
      }
    }
  }
`;
export default DashboardSection;
