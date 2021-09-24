import React from 'react';
import styled from 'styled-components';
import { IMGBgHeader } from '../../assets';
import {
  DashboardMuatanDikirim,
  HeaderSection,
  LayananSection,
  ListTicketOrderSection,
} from '../../components';

const MuatanDirimPage = () => {
  return (
    <StyledMuatanDirimPage>
      <div className="background-header" />
      <HeaderSection className="header-content" />
      <DashboardMuatanDikirim />
      <ListTicketOrderSection />
      <LayananSection />
    </StyledMuatanDirimPage>
  );
};

const StyledMuatanDirimPage = styled.main`
  position: relative;
  /* background-color: yellow; */
  height: max-content;
  .background-header {
    background-image: ${() => `url(${IMGBgHeader})`};
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 300px;
    margin-top: -50px;
  }
  .header-content {
    margin-top: -250px;
    top: 0;
    width: 100%;
    /* position: absolute; */
    padding-top: 40px;
  }
`;

export default MuatanDirimPage;
