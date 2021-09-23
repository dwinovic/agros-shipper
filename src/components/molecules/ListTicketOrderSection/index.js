import React, { useState } from 'react';
import styled from 'styled-components';
import { HistoryOrder, Pagination } from '../..';
import { Page } from '../../atoms/Pagination';

const ListTicketOrderSection = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [pagination] = useState([
    {
      totalPage: 7,
      currentPage: 2,
    },
  ]);
  console.log(setData);

  return (
    <StyledListTicketOrderSection className="container">
      {data.map((item) => (
        <HistoryOrder />
      ))}
      <div className="pagination-wrapper">
        <div className="option-show">
          <p className="text-lg text-bold">Jumlah per halaman</p>
          <Page number={5} active className="page5" />
          <Page number={10} className="page10" />
        </div>
        <Pagination dataPage={pagination} />
      </div>
    </StyledListTicketOrderSection>
  );
};
ListTicketOrderSection.defaultProps = {};

ListTicketOrderSection.propTypes = {};
const StyledListTicketOrderSection = styled.section`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .pagination-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 60px;
    .option-show {
      display: flex;
      align-items: center;
      p {
        margin-right: 26px;
      }
      .page5 {
        margin-right: 16px;
      }
      .page10 {
        background-color: #e8e8e8;
      }
    }
  }
`;

export default ListTicketOrderSection;
