import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ICProfile, ICSetting } from '../../../assets';
import { CardWrapper } from '../../atoms';

const CardProfileCompany = (props) => {
  const { companyName, phone, email } = props;
  return (
    <StyledCardProfileCompany>
      <CardWrapper className="content">
        <div className="header">
          <img src={ICProfile} alt="profile icon" />
          <div className="setting">
            Pengaturan
            <img src={ICSetting} alt="profile icon" />
          </div>
        </div>
        <div className="body">
          <h4 className="heading-card-md">{companyName}</h4>
        </div>
        <div className="footer">
          <p className="text-md">+62 {phone}</p>
          <p className="text-md">{email}</p>
        </div>
      </CardWrapper>
    </StyledCardProfileCompany>
  );
};

CardProfileCompany.defaultProps = {
  companyName: 'Company Name',
  email: 'company@email.com',
};

CardProfileCompany.propTypes = {
  companyName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const StyledCardProfileCompany = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 21px;
      .setting {
        display: flex;
        gap: 10px;
        font-size: 15spx;
        img {
          height: 17px;
        }
      }
      .btn-plus {
        box-shadow: 0px 0px 10px #0000001b;
        border-radius: 10px;
      }
    }
    .body {
      flex: 1;
      width: 100%;
      .heading-card-md {
        font-size: 35px;
      }
    }
  }
`;
export default CardProfileCompany;
