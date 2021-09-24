import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CardWrapper } from '..';

const CardStatusPO = ({
  status,
  theme,
  totalItem,
  icon,
  className,
  description,
  titleColor,
}) => {
  return (
    <StyledCardStatusPO
      theme={theme}
      titleColor={titleColor}
      status={status}
      className={className}
    >
      <CardWrapper className="content-card-status">
        <div className="header">
          <div className="icon">
            <img src={icon} alt="po active" />
          </div>
        </div>
        <div className="body">
          <p className="heading-card-sm">{status}</p>
          <p className="text-md">{description}</p>
          <p className="total">{totalItem}</p>
        </div>
        <div className="footer hover">
          <p>Lihat lebih lanjut</p>
          {/* <img src={ICBtnNext} alt="next" /> */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0H5C2.23858 0 0 2.23858 0 5V11C0 13.7614 2.23858 16 5 16H11C13.7614 16 16 13.7614 16 11V5C16 2.23858 13.7614 0 11 0Z"
              fill="black"
            />
            <path
              d="M5.13799 8.22406H10.006L8.08399 10.1451L8.39999 10.4611L10.861 8.00006L8.39999 5.53906L8.08399 5.85506L10.006 7.77706L5.13799 7.77706V8.22406Z"
              fill="white"
              stroke="white"
              strokeWidth="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </CardWrapper>
    </StyledCardStatusPO>
  );
};

CardStatusPO.defaultProps = {};

CardStatusPO.propTypes = {
  status: PropTypes.object.isRequired,
  theme: PropTypes.string,
  icon: PropTypes.string,
  totalItem: PropTypes.number.isRequired,
};

const StyledCardStatusPO = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .content-card-status {
    flex: 1;
    background-color: ${({ theme }) => {
      if (theme === 'green') return '#eff8f1';
      if (theme === 'orange') return '#fff3d9';
      if (theme === 'blue') return '#E5F8FC';
      if (theme === 'gray') return '#F8F8F8';
      if (theme === 'purple') return '#F8F8F8';
      return 'white';
    }};
    .header {
      .icon {
        width: 44px;
        height: 44px;
        box-shadow: 0px 0px 10px #0000001b;
        background-color: white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .body {
      flex: 1;
      .heading-card-sm {
        color: #4c9f70;
        color: ${({ theme, titleColor }) => {
          if (theme === 'orange' || titleColor === 'orange') return '#ffbb00';
          if (theme === 'green' || titleColor === 'green') return '#4C9F70';
          if (theme === 'blue' || titleColor === 'blue') return '#517CA7';
          if (theme === 'purple' || titleColor === 'purple') return '#806DB2';
        }};
      }
      .text-md {
        color: #000000;
      }
      .total {
        font-size: 32px;
        font-weight: 600;
        margin-top: 16px;
        margin-bottom: 10px;
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
    }
    &:hover {
      .footer {
        color: ${({ theme }) => {
          if (theme === 'green') return '#4c9f70';
          if (theme === 'orange') return '#ffbb00';
        }};
        svg path {
          fill: ${({ theme }) => {
            if (theme === 'green') return '#4c9f70';
            if (theme === 'orange') return '#ffbb00';
          }};
        }
      }
    }
  }
`;
export default CardStatusPO;
