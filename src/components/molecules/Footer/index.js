import React from 'react';
import styled from 'styled-components';
import { ICLogoFooter, IMGBGFooter } from '../../../assets';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="content-footer">
        <div className="left-aside">
          <img src={ICLogoFooter} alt="footer" />
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
  height: 50px;
  .left-aside {
    height: 50px;
    img {
      height: 100%;
    }
  }
`;

export default Footer;
