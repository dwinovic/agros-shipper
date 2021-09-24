import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CardWrapper, Line } from '..';
import { ICNextRight } from '../../../assets';
import { breakpoints } from '../../../utils';

const TicketCard = ({
  typeTicket,
  noOrder,
  totalRitase,
  namaBarang,
  beratBarang,
  titleColThree,
  footerColThree,
  titleColFour,
  footerColFour,
  theme,
  icon,
}) => {
  const titleCol3 = {
    history: 'Kota Muat',
    status: 'Kota Bongkar',
  };

  const titleCol4 = {
    history: 'Kota Bongkar',
    status: 'Status',
  };
  return (
    <StyledHistoryOrder theme={theme}>
      <CardWrapper className="content">
        <div className="no-order">
          <div className="checklist-icon">
            <img src={icon} alt="check icon" />
          </div>
          <div className="detail">
            <p className="text-md">No. Delivery Order</p>
            <p className="text-lg text-extra-bold">{noOrder}</p>
            <p className="text-md">Total {totalRitase} Ritase</p>
          </div>
        </div>
        <Line className="line" />
        <div className="nama-barang">
          <p className="text-md">Nama Barang</p>
          <p className="text-lg text-extra-bold">{namaBarang}</p>
          <p className="text-md">{beratBarang} Ton</p>
        </div>
        <Line className="line" />
        <div className="kota-masuk">
          <p className="text-md">{titleCol3[typeTicket]}</p>
          <p
            className={`text-lg text-extra-bold ${
              theme === 'blue' ? '' : 'secondary'
            }`}
          >
            {titleColThree}
          </p>
          <p className="text-md">{footerColThree}</p>
        </div>
        <Line className="line" />
        <div className="kota-bongkar">
          <div>
            <p className="text-md">{titleCol4[typeTicket]}</p>
            <p
              className={`text-lg text-extra-bold ${
                theme === 'blue' ? '' : 'primary'
              }`}
            >
              {titleColFour}
            </p>
            <p className="text-md">{footerColFour}</p>
          </div>
          <div className="button-next bg-gray hover">
            <img src={ICNextRight} alt="icon next" />
          </div>
        </div>
      </CardWrapper>
    </StyledHistoryOrder>
  );
};

TicketCard.defaultProps = {
  noOrder: '000000 0000 0000',
  totalRitase: 0,
  namaBarang: 'Nama barang',
  beratBarang: 0,
  titleColThree: 'Kota muat',
  footerColThree: '00/00/00',
  titleColFour: 'Kota Bongkar',
  footerColFour: '00/00/00',
  typeTicket: 'history',
};

TicketCard.propTypes = {
  noOrder: PropTypes.string.isRequired,
  totalRitase: PropTypes.number.isRequired,
  namaBarang: PropTypes.string.isRequired,
  beratBarang: PropTypes.number.isRequired,
  titleColThree: PropTypes.string.isRequired,
  footerColThree: PropTypes.string.isRequired,
  titleColFour: PropTypes.string.isRequired,
  footerColFour: PropTypes.string.isRequired,
  typeTicket: PropTypes.oneOf(['history', 'status']).isRequired,
  theme: PropTypes.string,
};

const StyledHistoryOrder = styled.section`
  width: 100%;
  background-color: ${({ theme }) => {
    switch (theme) {
      case 'blue':
        return '#E5F8FC';
      default:
        return 'white';
    }
  }};
  .content {
    width: 100%;
    display: flex;
    gap: 1rem;
    padding: 16px;
    background: transparent 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    ${breakpoints.lessThan('tablet')`
      flex-wrap: wrap;
    `}
    .no-order {
      display: flex;
      flex: auto;
      gap: 16px;
      ${breakpoints.lessThan('tablet')`
        width: 100%;
      `}
      .checklist-icon {
        width: 60px;
        img {
          width: 100%;
          height: 100%;
        }
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
      ${breakpoints.lessThan('tablet')`
        width: 25%;
      `}
    }
    .kota-masuk {
      flex: auto;
      ${breakpoints.lessThan('tablet')`
        width: 25%;
      `}
    }
    .kota-bongkar {
      display: flex;
      flex: auto;
      justify-content: space-between;
      ${breakpoints.lessThan('tablet')`
        width: 50%;
        justify-content: space-evenly;
      `}
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
  .line {
  }
`;
export default TicketCard;
