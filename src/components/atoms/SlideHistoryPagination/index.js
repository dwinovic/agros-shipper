import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { TicketCard } from '..';
import { ICTerkirim } from '../../../assets';
import { DB_Histories } from '../../../database';
import { breakpoints } from '../../../utils';

const SlideHistoryPagination = () => {
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledSlideHistoryPagination>
      <Slider {...settings}>
        {DB_Histories.data.map((page) => (
          <div
            className={`item-wrapper ${page.page === 1 && 'first'}`}
            key={page.page}
          >
            {page.data.map((item, index) => (
              <div className={`item`}>
                <TicketCard
                  key={index}
                  icon={ICTerkirim}
                  noOrder={item.no_delivery_order}
                  totalRitase={item.total_ritase}
                  namaBarang={item.nama_barang}
                  beratBarang={item.berat_barang}
                  titleColThree={item.kota_muat}
                  footerColThree={item.tangal_bongkar}
                  titleColFour={item.kota_bongkar}
                  footerColFour={item.tangal_bongkar}
                />
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </StyledSlideHistoryPagination>
  );
};

const StyledSlideHistoryPagination = styled.div`
  width: 100vw;
  margin: 32px 0;
  .item-wrapper {
    width: max-content !important;
    display: flex !important;
    flex-direction: column;
    gap: 1rem;
    width: 100vw;
    /* &.first {
      padding-left: calc((100vw - 1500px) / 2);
    } */
    .item {
      width: 1500px;
      ${breakpoints.lessThan('desktop')` 
          width: 90vw; 
      `}
    }
  }
  /* .slick-slide .slick-active .slick-center .slick-current */
  .slick-slide {
    /* width: max-content !important; */
    display: flex !important;
  }
  .slick-current {
    margin-right: 2rem;
    margin-left: calc((100vw - 1500px) / 2);
    ${breakpoints.lessThan('desktop')` 
      margin-left: calc((100vw - 90vw) / 2);
      margin-right: 10px; 
    `}
  }
  .slick-active {
    width: max-content !important;
  }
`;
export default SlideHistoryPagination;
