import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardWrapper } from '..';
import { IMGDriver, IMGTransporter } from '../../../assets';

const ServiceItem = ({ title, description, link, bgImage }) => {
  return (
    <StyledServiceItem className="service" bgImage={bgImage}>
      <div className="header-service">
        <h3 className="heading-card-md">{title}</h3>
        <p className="text-md">{description}</p>
      </div>
      <Link className="anchor" to={`#`}>
        Kunjungi laman
      </Link>
    </StyledServiceItem>
  );
};

const SlidePelayanan = () => {
  return (
    <StyledSlidePelayanan>
      <div className="content-pelayanan">
        <ServiceItem
          title="AGROS DRIVER"
          description="Agros menawarkan keleluasaan untuk memilih proyek sehinga peningkatan
          pendapatan bukan lagi jadi impian"
          bgImage={IMGDriver}
        />
        <ServiceItem
          title="AGROS TRANSPERTER"
          description="Tidak ada yang tidak mungkin. Kini, perusahaan bisa dengan cepat mendapatkan tanpa harus melakukan hal berat."
          bgImage={IMGTransporter}
        />
        <ServiceItem
          title="AGROS DRIVER"
          description="Agros menawarkan keleluasaan untuk memilih proyek sehinga peningkatan
          pendapatan bukan lagi jadi impian"
          bgImage={IMGDriver}
        />
      </div>
    </StyledSlidePelayanan>
  );
};

const StyledSlidePelayanan = styled.div`
  margin-top: 30px;
  width: 100vw;
  overflow-x: scroll;
  .content-pelayanan {
    width: max-content;
    height: 260px;
    display: flex;
    &::before,
    &::after {
      content: ' ';
      display: inline-block;
      width: calc((100vw - 1500px) / 2);
      height: 100%;
    }
  }
`;

const StyledServiceItem = styled(CardWrapper)`
  background-color: pink;
  width: 700px;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.274);
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  .header-service {
    color: white;
    flex: 1;
    .text-md {
      max-width: 60%;
      margin-top: 16px;
      color: white;
    }
  }
  .anchor {
    color: white;
    font-size: 20px;
  }
`;
export default SlidePelayanan;
