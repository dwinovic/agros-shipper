import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { IMGDriver, IMGTransporter } from '../../../assets';
import { ServiceItem } from '../SlidePelayanan';

const CarouselPelayanan = () => {
  const settings = {
    // dots: true,
    // className: 'center',
    // centerMode: true,
    infinite: true,
    className: 'slide',
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <StyledSlidePelayanan className="">
      <Slider {...settings} className="slider">
        {/* <div className="blank">a</div> */}
        <div className="item">
          <ServiceItem
            title="AGROS DRIVER"
            description="Agros menawarkan keleluasaan untuk memilih proyek sehinga peningkatan
          pendapatan bukan lagi jadi impian"
            bgImage={IMGDriver}
          />
        </div>
        <div className="item">
          <ServiceItem
            title="AGROS TRANSPERTER"
            description="Tidak ada yang tidak mungkin. Kini, perusahaan bisa dengan cepat mendapatkan tanpa harus melakukan hal berat."
            bgImage={IMGTransporter}
          />
        </div>
        <div className="item">
          <ServiceItem
            title="AGROS DRIVER"
            description="Agros menawarkan keleluasaan untuk memilih proyek sehinga peningkatan
          pendapatan bukan lagi jadi impian"
            bgImage={IMGDriver}
          />
        </div>
      </Slider>
    </StyledSlidePelayanan>
  );
};

const StyledSlidePelayanan = styled.div`
  margin-top: 30px;
  height: 260px;
  .slick-slider,
  .slidem .slick-initialized {
    height: 100%;
  }
  .slider {
    /* background-color: cyan; */
  }
  .slick-list {
    /* background-color: cyan; */
    /* display: flex !important; */
    .slick-track {
      /* &::before,
      &::after {
        content: ' ';
        display: inline-block;
        width: calc((100vw - 1500px) / 2);
        height: 100%;
      } */
    }
    /* .blank {
      background-color: cyan;
      width: calc((100vw - 1500px) / 2) !important;
      height: 100%;
      display: block !important;
    } */
    .item {
      /* max-width: 800px; */
      height: 260px;
      padding: 0 16px;
    }
  }
`;
export default CarouselPelayanan;
