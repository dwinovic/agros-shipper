import React from 'react';
import styled from 'styled-components';
import { ICLogoFooter, IMGBGFooter } from '../../../assets';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="left-aside">
          <div className="logo-wrapper">
            <img src={ICLogoFooter} alt="footer" />
          </div>
          <div className="line" />
          <p>PT ANTAR GLOBAL PROSPERO © 2020. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="right-wrapper">
          <p>SYARAT & KETENTUAN</p>
          <p>KEBIJAKAN PRIVASI</p>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin-top: 50px;
  background-image: ${() => `url(${IMGBGFooter})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  height: 120px;
  .container {
    display: flex;
    justify-content: space-between;
    p {
      color: #ffffff;
      text-align: center;
      letter-spacing: 0.1px;
      text-transform: uppercase;
      opacity: 1;
      font-size: 14px;
    }
    .left-aside {
      display: flex;
      align-items: center;
      gap: 26px;
      .logo-wrapper {
        height: 20px;
        img {
          height: 100%;
        }
      }
      .line {
        border: 1px solid #ffffff;
        width: 168px;
      }
    }
    .right-wrapper {
      display: flex;
      align-items: center;
      gap: 56px;
    }
  }
`;

export default Footer;
