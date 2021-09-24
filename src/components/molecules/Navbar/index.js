import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ICHumberger,
  ICLogoAgros,
  ICLogout,
  ICNavHistory,
  ICNavHome,
  ICNavMessage,
  ICNavNotification,
} from '../../../assets';
import { breakpoints } from '../../../utils';
import { Line } from '../../index';

const Navbar = ({ className }) => {
  const [login, setLogin] = useState(true);

  return (
    <StyledNavbar>
      <div className={`content ${className}`}>
        <div className="logo-brand hover">
          <img src={ICLogoAgros} alt="Agros Shipper Company" />
          <p className="sub-name">SHIPPER</p>
        </div>
        <div className="navigation-wrapper">
          <div className="button-icons">
            <div className="icon hover">
              <img src={ICNavHome} alt="Home" />
            </div>
            <Line className="line" />
            <div className="icon hover">
              <img src={ICNavHistory} alt="History" />
            </div>
            <Line className="line" />
            <div className="icon hover">
              <img src={ICNavMessage} alt="Message" />
            </div>
            <Line className="line" />
            <div className="icon hover">
              <img src={ICNavNotification} alt="Notification" />
            </div>
          </div>
          {login && (
            <button
              className="button-username hover"
              onClick={() => setLogin(false)}
            >
              Admin 1: Pramono
            </button>
          )}
          {!login && (
            <button className="button-logout" onClick={() => setLogin(true)}>
              LOGOUT
              <img src={ICLogout} alt="icon logout" />
            </button>
          )}
        </div>
        <div className="humberger-icon">
          <img src={ICHumberger} alt="Icon humberger" />
        </div>
      </div>
      <div className="responsive-menu"></div>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

const StyledNavbar = styled.nav`
  padding: 40px 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-bottom: 1px solid #8b8b8bae;
  margin-bottom: 35px;
  position: fixed;
  z-index: 9 !important;
  width: 100%;
  top: 0;
  .content {
    display: flex;
    justify-content: space-between;
    .logo-brand {
      display: flex;
      gap: 10px;
      img {
        height: 40px;
      }
      .sub-name {
        display: flex;
        align-items: flex-end;
        padding-bottom: 8px;
      }
    }
    .navigation-wrapper {
      display: flex;
      gap: 30px;
      ${breakpoints.lessThan('tablet')`
        display: none;
      `}
      .button-icons {
        display: flex;
        /* .icon {
          border-right: 1px solid gray;
          margin-right: 4px;
        } */
      }
      .button-username {
        background-color: transparent;
        border-radius: 10px;
        font: inherit;
        padding: 0 16px;
        border: 2px solid grey;
        font-weight: 600;
        color: #4c9f70;
      }
      .button-logout {
        background-color: #4c9f70;
        border-radius: 10px;
        font: inherit;
        font-weight: 600;
        color: white;
        border: 0;
        display: flex;
        align-items: center;
        gap: 62px;
        padding: 0 16px;
        img {
          width: 18px;
        }
      }
      button:hover {
        cursor: pointer;
        opacity: 0.9;
      }
      .line {
        height: 70%;
        margin-top: 5px;
      }
    }
    .humberger-icon {
      display: none;
      height: 40px;
      ${breakpoints.lessThan('tablet')`
        display: inline-block;
      `}
      img {
        height: 100%;
      }
    }
  }
`;

export default Navbar;
