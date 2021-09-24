import React from 'react';
import styled from 'styled-components';
import {
  DashboardSection,
  HistoryPurchaseSection,
  LayananSection,
  PurchaseOrderSection,
} from '../../components';
import { breakpoints } from '../../utils';

const DashboardKerabatPage = () => {
  return (
    <StyledDashboardKerabatPage>
      <DashboardSection />
      <PurchaseOrderSection />
      <LayananSection />
      <HistoryPurchaseSection />
    </StyledDashboardKerabatPage>
  );
};

const StyledDashboardKerabatPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-bottom: 100px;
  ${breakpoints.lessThan('laptop')`
    gap: 30px;
  `}
  ${breakpoints.lessThan('mobile')`
    margin-bottom: 0;
  `}
`;

export default DashboardKerabatPage;
