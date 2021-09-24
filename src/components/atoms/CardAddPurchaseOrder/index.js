import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardWrapper } from '..';
import { ICAnchor, ICPlus, IMGBgCard } from '../../../assets';

const CardAddPurchaseOrder = () => {
  return (
    <StyledCardAddPurchaseOrder>
      <CardWrapper className="content">
        <div className="header">
          <img className="btn-plus hover" src={ICPlus} alt="profile icon" />
          <div className="hover">
            <img src={ICAnchor} alt="anchor icon" />
          </div>
        </div>
        <div className="body">
          <h4 className="heading-card-md">TAMBAH PURCHASE ORDER</h4>
        </div>
        <div className="footer">
          <p className="text-md">
            Purchase order dapat dilakukan dalam Agros Shipper
          </p>
        </div>
      </CardWrapper>
    </StyledCardAddPurchaseOrder>
  );
};

CardAddPurchaseOrder.defaultProps = {};

CardAddPurchaseOrder.propTypes = {};

const StyledCardAddPurchaseOrder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-image: ${() => `url(${IMGBgCard})`};
    background-position: center;
    background-size: cover;
    .header {
      display: flex;
      justify-content: space-between;
    }
    .body {
      flex: 1;
      display: flex;
      align-items: center;
      .heading-card-md {
        color: #ffffff;
        font-size: 35px;
      }
    }
    .text-md {
      color: #ffffff;
    }
  }
`;

export default CardAddPurchaseOrder;
