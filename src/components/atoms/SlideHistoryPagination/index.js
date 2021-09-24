import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { TicketCard } from '..';
import { ICTerkirim } from '../../../assets';
import { DB_Histories } from '../../../database';

const SlideHistoryPagination = () => {
  // const [currentPage, setCurrentPage] = useState();
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // customPaging: function (i) {
    //   return <Page number={i + 1} active={i + 1} onClick />;
    // },
  };
  console.log(DB_Histories);
  return (
    <StyledSlideHistoryPagination className="">
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
      <ul className="slick-dots">
        <li>1</li>
      </ul>
    </StyledSlideHistoryPagination>
  );
};

const StyledSlideHistoryPagination = styled.div`
  width: 100vw;
  .item-wrapper {
    width: max-content !important;
    display: flex !important;
    flex-direction: column;
    gap: 1rem;
    &.first {
      padding-left: calc((100vw - 1500px) / 2);
      /* width: 500px; */
      /* height: 600px; */
    }
    .item {
      /* width: 100vw; */
      width: 1500px;
      /* background-color: yellow; */
    }
  }
  /* .slick-slide .slick-active .slick-center .slick-current */
  .slick-slide {
    /* background-color: yellow; */
    width: max-content !important;
    /* transform: translateX(calc(((100vw - 1500px - 2rem)))); */
  }
  .slick-current {
    /* margin: 0 2rem; */
    margin-right: 2rem;
    /* background-color: cyan; */
  }
  .slick-active {
    width: max-content !important;
  }
`;
export default SlideHistoryPagination;
