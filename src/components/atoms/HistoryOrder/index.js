import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { CardWrapper, Line } from '..';
import {
  ICCheclistWhite,
  ICNextRight,
  IMGBgIconChecklist,
} from '../../../assets';

const HistoryOrder = () => {
  return (
    <StyledHistoryOrder>
      <CardWrapper className="content">
        <div className="no-order">
          <div className="checklist-icon">
            <img src={ICCheclistWhite} alt="check icon" />
          </div>
          <div className="detail">
            <p className="text-md">No. Delivery Order</p>
            <p className="text-lg text-extra-bold">DO-AGRS-240521.1228</p>
            <p className="text-md">Total 1 Ritase</p>
          </div>
        </div>
        <Line />
        <div className="nama-barang">
          <p className="text-md">No. Delivery Order</p>
          <p className="text-lg text-extra-bold">DO-AGRS-240521.1228</p>
          <p className="text-md">Total 1 Ritase</p>
        </div>
        <Line />
        <div className="kota-masuk">
          <p className="text-md">No. Delivery Order</p>
          <p className="text-lg text-extra-bold secondary">
            DO-AGRS-240521.1228
          </p>
          <p className="text-md">Total 1 Ritase</p>
        </div>
        <Line />
        <div className="kota-bongkar">
          <div>
            <p className="text-md">No. Delivery Order</p>
            <p className="text-lg text-extra-bold primary">
              DO-AGRS-240521.1228
            </p>
            <p className="text-md">Total 1 Ritase</p>
          </div>
          <div className="button-next bg-gray hover">
            <img src={ICNextRight} alt="icon next" />
          </div>
        </div>
      </CardWrapper>
    </StyledHistoryOrder>
  );
};
HistoryOrder.defaultProps = {};

HistoryOrder.propTypes = {};

const StyledHistoryOrder = styled.section`
  width: 100%;
  .content {
    width: 100%;
    display: flex;
    gap: 1rem;
    padding: 16px;
    background: transparent 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    /* justify-content: space-between; */
    .no-order {
      display: flex;
      flex: auto;
      gap: 16px;
      .checklist-icon {
        background-image: ${() => `url(${IMGBgIconChecklist})`};
        background-position: center;
        background-size: cover;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .detail {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
    }
    .nama-barang {
      flex: auto;

      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .kota-masuk {
      flex: auto;
    }
    .kota-bongkar {
      display: flex;
      flex: auto;
      justify-content: space-between;
      .button-next {
        border-radius: 7px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 18px;
        }
      }
    }
  }
`;
export default HistoryOrder;
