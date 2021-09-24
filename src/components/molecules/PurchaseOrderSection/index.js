import React from 'react';
import styled from 'styled-components';
import { CardOrderDetail, CardStatusMuatan, CardStatusPO } from '../..';
import { ICCarActive, ICCarOrange } from '../../../assets';
import Fade from 'react-reveal/Fade';

const PurchaseOrderSection = () => {
  return (
    <StyledPurchaseOrderSection className="container">
      <h1 className="heading-section">Purchase order Anda</h1>
      <Fade left cascade>
        <div className="body-order-section">
          <div className="order-detail">
            <CardOrderDetail
              idPurchase="AGR001/02/2020#096"
              itemName="Batubara"
              ton={200000}
              percent={45}
            >
              <div className="item-status">
                <CardStatusPO
                  icon={ICCarActive}
                  status={
                    <>
                      <span className="text-bold">PO</span> Aktif
                    </>
                  }
                  description={
                    <>
                      Purchase order yang <br />
                      <span className="text-bold">sedang berjalan.</span>
                    </>
                  }
                  theme="green"
                  totalItem={400}
                />
              </div>
              <div className="item-status">
                <CardStatusPO
                  icon={ICCarOrange}
                  status={
                    <>
                      <span className="text-bold">PO</span> Sisa
                    </>
                  }
                  description={
                    <>
                      Purchase order yang <br />
                      <span className="text-bold">belum berjalan.</span>
                    </>
                  }
                  theme="orange"
                  totalItem={200}
                />
              </div>
            </CardOrderDetail>
          </div>
          <div className="order-muatan">
            <CardStatusMuatan status="terkirim"></CardStatusMuatan>
          </div>
        </div>
      </Fade>
    </StyledPurchaseOrderSection>
  );
};

PurchaseOrderSection.defaultProps = {};

PurchaseOrderSection.propTypes = {};

const StyledPurchaseOrderSection = styled.section`
  .body-order-section {
    display: flex;
    flex-direction: column;
    gap: 18px;
    .order-detail {
      .item-status {
        flex: auto;
        width: 100%;
      }
    }
  }
`;

export default PurchaseOrderSection;
