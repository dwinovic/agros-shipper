import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CardWrapper } from '..';
import { numberFormater } from '../../../utils';

const CardOrderDetail = ({ children, idPurchase, percent, itemName, ton }) => {
  return (
    <StyledCardOrderDetail percent={percent}>
      <CardWrapper className="content" hoverDisabled>
        <div className="detail-info">
          <p className="text-md">Nomor Purchase Order</p>
          <h3 className="heading-card-md">{idPurchase}</h3>
          <div className="progress-wrapper">
            <div className="line-wrapper">
              <div className="main-line" />
              <div className="loading" />
            </div>
            <p className="percent">{percent}%</p>
          </div>
          <p className="text-md">Presentase Muatan Kerabat</p>
          <div className="footer">
            <div className="left">
              <h3 className="heading-card-md">{itemName}</h3>
              <p className="text-md">Nama barang</p>
            </div>
            <div className="right">
              <h3 className="heading-card-md">
                {numberFormater.format(ton)} Ton
              </h3>
              <p className="text-md">Tonase / Kubikasi</p>
            </div>
          </div>
        </div>
        <div className="more-info">{children}</div>
      </CardWrapper>
    </StyledCardOrderDetail>
  );
};
CardOrderDetail.defaultProps = {
  idPurchase: 'AGR000/00/000#00',
  percent: 0,
  itemName: 'Nama barang',
  ton: 0,
};

CardOrderDetail.propTypes = {
  idPurchase: PropTypes.string,
  percent: PropTypes.number,
  itemName: PropTypes.string,
  ton: PropTypes.number,
};
const StyledCardOrderDetail = styled.div`
  width: 100%;
  .content {
    display: flex;
    gap: 32px;
    width: 100%;
    align-items: center;
    justify-content: center;
    .detail-info {
      width: 70%;
      .heading-card-md {
        margin: 10px 0;
      }
      .progress-wrapper {
        display: flex;
        gap: 16px;
        margin-bottom: 10px;
        .line-wrapper {
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          .main-line {
            height: 5px;
            width: 100%;
            background-color: #a8a8a8a7;
            border-radius: 5px;
          }
          .loading {
            height: 8px;
            border-radius: 8px;
            width: ${({ percent }) => `${percent}%`};
            background-color: #4c9f70;
            position: absolute;
          }
        }
        .percent {
          color: #4c9f70;
          font-weight: 700;
          font-size: 18px;
        }
      }
      .footer {
        display: flex;
        justify-content: space-between;
        .heading-card-md {
          margin-bottom: 5px;
        }
      }
    }
    .more-info {
      /* width: 40%; */
      display: flex;
      gap: 16px;
    }
  }
`;
export default CardOrderDetail;
