import React from 'react';
import styled from 'styled-components';
import {
  DashboardMuatanDikirim,
  HeaderSection,
  LayananSection,
  ListTicketOrderSection,
} from '../../components';

const MuatanDirimPage = () => {
  return (
    <StyledMuatanDirimPage>
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
  margin-bottom: 120px;
  height: max-content;
  .header-content {
    margin-top: -250px;
    top: 0;
    width: 100%;
    /* position: absolute; */
    padding-top: 40px;
  }
`;

export default MuatanDirimPage;
