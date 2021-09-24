import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { IMGDriver, IMGTransporter } from '../../../assets';
import { breakpoints } from '../../../utils';
import { ServiceItem } from '../SlidePelayanan';

const CarouselPelayanan = () => {
  const settings = {
    infinite: true,
    className: 'slide',
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledSlidePelayanan className="">
      <Slider {...settings} className="slider">
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
  /* .slick-slider,
  .slidem .slick-initialized {
    height: 100%;
  } */
  /* .slick-track {
  } */
  .slick-active {
    margin: 0 16px;
  }
  .slick-current {
    margin-left: calc((100vw - 1500px) / 2);
    ${breakpoints.lessThan('tablet')`
      margin-left: 0;
      padding: 0 16px;
    `}
  }
  .item {
    height: 260px;
    /* margin-right: 16px !important; */
  }
`;

export default CarouselPelayanan;
