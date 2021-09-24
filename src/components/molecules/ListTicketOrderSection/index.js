import React, { useState } from 'react';
import styled from 'styled-components';
import { TicketCard, Pagination } from '../..';
import { ICDikirim } from '../../../assets';
import { DB_Histories, DB_StatusOrder } from '../../../database';
import { Page } from '../../atoms/Pagination';

const ListTicketOrderSection = () => {
  const route = {
    '/status-order&page=1': DB_StatusOrder.data[0],
    '/status-order&page=2': DB_StatusOrder.data[1],
    '/status-order&page=3': DB_StatusOrder.data[2],
  };

  const [currentPage] = useState(route['/status-order&page=1']);

  return (
    <StyledListTicketOrderSection className="container">
      {currentPage.data.map((item, index) => (
        <TicketCard
          key={index}
          icon={ICDikirim}
          typeTicket="status"
          theme="blue"
          noOrder={item.no_delivery_order}
          totalRitase={item.total_ritase}
          namaBarang={item.nama_barang}
          beratBarang={item.berat_barang}
          titleColThree={item.kota_bongkar}
          footerColThree={item.tangal_bongkar}
          titleColFour={item.status}
          footerColFour={item.tanggal_dikirim}
        />
      ))}
      <div className="pagination-wrapper">
        <div className="option-show">
          <p className="text-lg text-bold">Jumlah per halaman</p>
          <Page number={5} active className="page5" />
          <Page number={10} className="page10" />
        </div>
        <Pagination dataPage={DB_Histories} />
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
