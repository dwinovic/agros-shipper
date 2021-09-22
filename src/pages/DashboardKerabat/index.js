import React from 'react';
import styled from 'styled-components';
import { DashboardSection, PurchaseOrderSection } from '../../components';

const DashboardKerabat = () => {
  return (
    <StyledDashboardKerabat>
      <DashboardSection />
      <PurchaseOrderSection />
    </StyledDashboardKerabat>
  );
};

const StyledDashboardKerabat = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export default DashboardKerabat;
