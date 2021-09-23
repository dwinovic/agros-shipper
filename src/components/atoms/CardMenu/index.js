import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CardWrapper } from '..';
import {
  ICMessagerGreen,
  ICNavMessagerGreen,
  ICPayGreen,
  IMGKritikDanSaran,
} from '../../../assets';

const CardMenu = ({ withImage, title, onClick, description, footer, icon }) => {
  return (
    <StyledCardMenu>
      <CardWrapper className={`content ${withImage && 'withImage'}`}>
        <div className="left">
          <div className="header">
            <div className="icon-wrapper">
              <img src={icon} alt="icon" />
            </div>
            <p className="heading-card-sm">{title}</p>
          </div>
          <div className="body">
            <p className="text-md">{description}</p>
          </div>
          <div className="footer" onClick={onClick}>
            {footer}
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
        </div>
        {withImage && (
          <div className="right">
            <img alt="kritik dan saran" src={IMGKritikDanSaran} />
          </div>
        )}
      </CardWrapper>
    </StyledCardMenu>
  );
};
CardMenu.defaultProps = {};

CardMenu.propTypes = {
  withImage: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
};
const StyledCardMenu = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .content {
    .left {
      display: flex;
      flex-direction: column;
      height: 100%;
      .header {
        .icon-wrapper {
          background-color: #eff8f1;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
      }
      .body {
        flex: 1;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        .text-md {
          color: #000000;
        }
      }
      .footer {
        display: flex;
        justify-content: space-between;
        &:hover {
          cursor: pointer;
        }
      }
    }
    &.withImage {
      flex-direction: row;
      flex: 1;
      position: relative;
      .left {
        width: 50%;
        height: 100%;
      }
      .right {
        width: 60%;
        text-align: right;
        position: absolute;
        right: 30px;
        bottom: 0;
      }
    }
    &:hover {
      .footer {
        color: #4c9f70;
        svg path {
          fill: #4c9f70;
        }
      }
    }
  }
`;
export default CardMenu;
