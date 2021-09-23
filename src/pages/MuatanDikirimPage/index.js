import React from 'react';
import styled from 'styled-components';
import { IMGBgHeader } from '../../assets';
import {
  CardOrderDetail,
  CardStatusPO,
  DashboardMuatanDikirim,
  Footer,
  HeaderSection,
} from '../../components';

const MuatanDirimPage = () => {
  return (
    <StyledMuatanDirimPage>
      <div className="background-header" />
      <div className="header-content">
        <HeaderSection />
        <DashboardMuatanDikirim />
      </div>
    </StyledMuatanDirimPage>
  );
};

const StyledMuatanDirimPage = styled.main`
  position: relative;
  /* background-color: yellow; */
  height: 1000px;
  .background-header {
    background-image: ${() => `url(${IMGBgHeader})`};
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 300px;
    margin-top: -50px;
  }
  .header-content {
    margin-top: -300px;
    top: 0;
    width: 100%;
    /* position: absolute; */
    padding-top: 40px;
  }
`;

export default MuatanDirimPage;
