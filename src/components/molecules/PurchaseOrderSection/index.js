import React from 'react';
import styled from 'styled-components';
import { CardOrderDetail, CardStatusMuatan, CardStatusPO } from '../..';

const PurchaseOrderSection = () => {
  return (
    <StyledPurchaseOrderSection className="container">
      <h1 className="heading-section">Purchase order Anda</h1>
      <div className="body-order-section">
        <div className="order-detail">
          <CardOrderDetail
            idPurchase="AGR001/02/2020#096"
            itemName="Batubara"
            ton={200000}
            percent={45}
          >
            <CardStatusPO
              status="Aktif"
              theme="green"
              totalItem={400}
              icon="car aktif"
            />
            <CardStatusPO
              status="Sisa"
              theme="orange"
              totalItem={200}
              icon="car sisa"
            />
          </CardOrderDetail>
        </div>
        <div className="order-muatan">
          <CardStatusMuatan status="terkirim"></CardStatusMuatan>
        </div>
      </div>
    </StyledPurchaseOrderSection>
  );
};

PurchaseOrderSection.defaultProps = {};

PurchaseOrderSection.propTypes = {};

const StyledPurchaseOrderSection = styled.section`
  margin-top: 100px;
  .body-order-section {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;

export default PurchaseOrderSection;
