import React from 'react';
import styled from 'styled-components';
import { SlidePelayanan } from '../..';

const LayananSection = () => {
  return (
    <StyledLayananSection>
      <div className="container">
        <h1 className="heading-section">Layanan Agros</h1>
        <p className="sub-heading">
          Your Truly Logistics Solutions, Agros selalu memberi kemudahan dan
          kenyamanan untuk Anda.
        </p>
        <div className="navigation">
          <p>Lihat lebih lanjut</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0H5C2.23858 0 0 2.23858 0 5V11C0 13.7614 2.23858 16 5 16H11C13.7614 16 16 13.7614 16 11V5C16 2.23858 13.7614 0 11 0Z"
              fill="#4C9F70"
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
      <SlidePelayanan />
    </StyledLayananSection>
  );
};

LayananSection.defaultProps = {};

LayananSection.propTypes = {};

const StyledLayananSection = styled.section`
  .container {
    .navigation {
      display: flex;
      color: #4c9f70;
      gap: 24px;
      align-items: center;
      /* margin: 20px 30px; */
      margin-top: 20px;
      margin-bottom: 3px;
    }
  }
`;

export default LayananSection;
