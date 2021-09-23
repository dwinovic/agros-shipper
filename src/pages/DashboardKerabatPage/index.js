import React from 'react';
import styled from 'styled-components';
import {
  DashboardSection,
  Footer,
  HistoryPurchaseSection,
  LayananSection,
  PurchaseOrderSection,
} from '../../components';

const DashboardKerabatPage = () => {
  return (
    <StyledDashboardKerabatPage>
      <DashboardSection />
      <PurchaseOrderSection />
      <LayananSection />
      {/* <CarouselPelayanan /> */}
      <HistoryPurchaseSection />
    </StyledDashboardKerabatPage>
  );
};

const StyledDashboardKerabatPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export default DashboardKerabatPage;
