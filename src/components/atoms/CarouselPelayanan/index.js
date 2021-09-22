import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';

const CarouselPelayanan = () => {
  const settings = {
    // dots: true,
    infinite: true,
    className: 'slide',
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <StyledSlidePelayanan>
      <Slider {...settings}>
        <div className="blank">
          <h3>1</h3>
        </div>
        <div className="item">
          <h3>2</h3>
        </div>
        <div className="item">
          <h3>3</h3>
        </div>
        <div className="item">
          <h3>4</h3>
        </div>
        <div className="item">
          <h3>5</h3>
        </div>
        <div className="item">
          <h3>6</h3>
        </div>
      </Slider>
    </StyledSlidePelayanan>
  );
};

const StyledSlidePelayanan = styled.div`
  margin-top: 30px;
  .item {
    background-color: cyan;
  }
  .blank {
    background-color: yellow;
    /* width: calc(100vw - 1500px); */
    width: 10px;
  }
  .slide {
  }
`;
export default CarouselPelayanan;
