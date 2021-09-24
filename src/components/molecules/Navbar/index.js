import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ICHumberger, ICLogoAgros, ICLogout } from '../../../assets';
import { breakpoints } from '../../../utils';
import { Line } from '../../index';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ className }) => {
  const [collapse, setCollapse] = useState(false);
  const location = useLocation();
  const pathname = location.pathname.split('/');

  const handleCollapse = () => {
    collapse ? setCollapse(false) : setCollapse(true);
  };

  const handleLogout = () => {
    console.log('Yeeyy Logoutt!!!');
  };
  return (
    <StyledNavbar collapse={collapse}>
      <div className={`content ${className}`}>
        <div className="logo-brand hover">
          <img src={ICLogoAgros} alt="Agros Shipper Company" />
          <p className="sub-name">SHIPPER</p>
        </div>
        <div className="navigation-wrapper">
          <div className="button-icons">
            <Home redirect="/" active={pathname[1] === '' && true} />
            <Line className="line" />
            <History
              redirect="/history"
              active={pathname[1] === 'history' && true}
            />
            <Line className="line" />
            <Messenger
              redirect="messanger"
              active={pathname[1] === 'messanger' && true}
            />
            <Line className="line" />
            <Notification
              redirect="/notification"
              active={pathname[1] === 'notification' && true}
            />
          </div>
          <div className="button-user">
            <ButtonUser userName="Nopik" />
            <ButtonLogout onClick={handleLogout} />
          </div>
        </div>
        <div className="humberger-icon" onClick={handleCollapse}>
          <img src={ICHumberger} alt="Icon humberger" />
        </div>
      </div>
      <div className="responsive-menu">
        <div className="layer" onClick={handleCollapse} />
        <div className="top">
          <Home
            redirect="/"
            active={pathname[1] === '' && true}
            onClick={handleCollapse}
          />
          <Line className="line" />
          <History
            redirect="/history"
            active={pathname[1] === 'history' && true}
            onClick={handleCollapse}
          />
          <Line className="line" />
          <Messenger
            redirect="messanger"
            active={pathname[1] === 'messanger' && true}
            onClick={handleCollapse}
          />
          <Line className="line" />
          <Notification
            redirect="/notification"
            active={pathname[1] === 'notification' && true}
            onClick={handleCollapse}
          />
        </div>
        <div className="bottom">
          <ButtonUser userName="Nopik" />
          <ButtonLogout onClick={handleLogout} />
        </div>
      </div>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

// STYLING
const StyledNavbar = styled.nav`
  padding: 40px 0;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #8b8b8bae;
  margin-bottom: 35px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9 !important;
  .content {
    display: flex;
    justify-content: space-between;
    .logo-brand {
      display: flex;
      gap: 10px;
      img {
        height: 40px;
      }
      .sub-name {
        display: flex;
        align-items: flex-end;
        padding-bottom: 8px;
      }
    }
    .navigation-wrapper {
      display: flex;
      gap: 30px;
      ${breakpoints.lessThan('tablet')`
        display: none;
      `}
      .button-icons {
        display: flex;
      }
      .button-user {
        height: 50px;
        width: 200px;
        position: relative;
        &:hover .button-logout {
          z-index: 999;
        }
        &:hover .button-username {
          opacity: 0;
        }
        button {
          width: 100%;
          height: 100%;
          position: absolute;
        }
        .button-username {
          z-index: 9;
          background-color: white;
        }
      }
      .line {
        height: 70%;
        margin-top: 5px;
      }
    }
    .humberger-icon {
      display: none;
      height: 40px;
      ${breakpoints.lessThan('tablet')`
        display: inline-block;
      `}
      img {
        height: 100%;
      }
    }
  }
  .responsive-menu {
    background-color: white;
    position: absolute;
    width: 100%;
    border-top: 1px solid #8b8b8bae;
    padding: 20px 0 30px 0;
    top: 100px;
    height: max-content;
    /* z-index: -11 !important; */
    /* display: none;  */
    display: ${({ collapse }) => (collapse ? 'block' : 'none')};
    .top {
      display: flex;
      justify-content: space-around;
      /* background-color: yellow; */
    }
    .bottom {
      display: flex;
      /* background-color: red; */
      justify-content: space-around;
      height: 40px;
      margin-top: 10px;
    }
    .layer {
      background-color: black;
      opacity: 0.2;
      position: absolute;
      height: 100vh;
      display: block;
      width: 100%;
      z-index: -99;
    }
  }
  /* START GLOBAL STYLING ONLY CURRENT PAGE */
  .icon {
    &.active {
      svg path {
        fill: #4c9f70;
      }
    }
    &:hover {
      cursor: pointer;
      svg path {
        fill: #4c9f70;
      }
    }
  }
  .button-username {
    background-color: transparent;
    border-radius: 10px;
    font: inherit;
    padding: 0 16px;
    border: 2px solid #ececec;
    font-weight: 600;
    color: #4c9f70;
  }
  .button-logout {
    background-color: #4c9f70;
    border-radius: 10px;
    font: inherit;
    font-weight: 600;
    color: white;
    border: 0;
    display: flex;
    align-items: center;
    gap: 62px;
    padding: 0 16px;
    img {
      width: 18px;
    }
  }
  button:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
// START = NAVIGATION BUTTON USER

const ButtonUser = ({ userName }) => {
  return <button className="button-username">Admin 1: {userName}</button>;
};
const ButtonLogout = ({ onClick }) => {
  return (
    <button className="button-logout" onClick={onClick}>
      LOGOUT
      <img src={ICLogout} alt="icon logout" />
    </button>
  );
};
// END = NAVIGATION BUTTON USER
// START = NAVIGATION ICONS
const Home = ({ active, redirect, onClick }) => {
  return (
    <Link
      className={`icon ${active && 'active'}`}
      to={`${redirect}`}
      onClick={onClick}
    >
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.207 9.035H13.489C12.5278 9.035 11.6061 9.41681 10.9264 10.0964C10.2468 10.7761 9.86499 11.6979 9.86499 12.659V15.377C9.86499 16.3381 10.2468 17.2599 10.9264 17.9396C11.6061 18.6192 12.5278 19.001 13.489 19.001H16.207C17.1681 19.001 18.0899 18.6192 18.7695 17.9396C19.4492 17.2599 19.831 16.3381 19.831 15.377V12.659C19.831 11.6979 19.4492 10.7761 18.7695 10.0964C18.0899 9.41681 17.1681 9.035 16.207 9.035V9.035ZM18.019 15.377C18.019 15.8576 17.8281 16.3185 17.4883 16.6583C17.1485 16.9981 16.6876 17.189 16.207 17.189H13.489C13.0084 17.189 12.5475 16.9981 12.2077 16.6583C11.8679 16.3185 11.677 15.8576 11.677 15.377V12.659C11.677 12.1784 11.8679 11.7175 12.2077 11.3777C12.5475 11.0379 13.0084 10.847 13.489 10.847H16.207C16.6876 10.847 17.1485 11.0379 17.4883 11.3777C17.8281 11.7175 18.019 12.1784 18.019 12.659V15.377Z"
          fill="black"
        />
        <path
          d="M27.985 9.035H25.267C24.3059 9.035 23.3841 9.41681 22.7045 10.0964C22.0248 10.7761 21.643 11.6979 21.643 12.659V15.377C21.643 16.3381 22.0248 17.2599 22.7045 17.9396C23.3841 18.6192 24.3059 19.001 25.267 19.001H27.985C28.9461 19.001 29.8679 18.6192 30.5476 17.9396C31.2272 17.2599 31.609 16.3381 31.609 15.377V12.659C31.609 11.6979 31.2272 10.7761 30.5476 10.0964C29.8679 9.41681 28.9461 9.035 27.985 9.035V9.035ZM29.797 15.377C29.797 15.8576 29.6061 16.3185 29.2663 16.6583C28.9265 16.9981 28.4656 17.189 27.985 17.189H25.267C24.7864 17.189 24.3255 16.9981 23.9857 16.6583C23.6459 16.3185 23.455 15.8576 23.455 15.377V12.659C23.455 12.1784 23.6459 11.7175 23.9857 11.3777C24.3255 11.0379 24.7864 10.847 25.267 10.847H27.985C28.4656 10.847 28.9265 11.0379 29.2663 11.3777C29.6061 11.7175 29.797 12.1784 29.797 12.659V15.377Z"
          fill="black"
        />
        <path
          d="M16.207 20.813H13.489C12.5278 20.813 11.6061 21.1948 10.9264 21.8744C10.2468 22.5541 9.86499 23.4759 9.86499 24.437V27.155C9.86499 28.1161 10.2468 29.0379 10.9264 29.7176C11.6061 30.3972 12.5278 30.779 13.489 30.779H16.207C17.1681 30.779 18.0899 30.3972 18.7695 29.7176C19.4492 29.0379 19.831 28.1161 19.831 27.155V24.437C19.831 23.4759 19.4492 22.5541 18.7695 21.8744C18.0899 21.1948 17.1681 20.813 16.207 20.813V20.813ZM18.019 27.155C18.019 27.6356 17.8281 28.0965 17.4883 28.4363C17.1485 28.7761 16.6876 28.967 16.207 28.967H13.489C13.0084 28.967 12.5475 28.7761 12.2077 28.4363C11.8679 28.0965 11.677 27.6356 11.677 27.155V24.437C11.677 23.9564 11.8679 23.4955 12.2077 23.1557C12.5475 22.8159 13.0084 22.625 13.489 22.625H16.207C16.6876 22.625 17.1485 22.8159 17.4883 23.1557C17.8281 23.4955 18.019 23.9564 18.019 24.437V27.155Z"
          fill="black"
        />
        <path
          d="M27.985 20.813H25.267C24.3059 20.813 23.3841 21.1948 22.7045 21.8744C22.0248 22.5541 21.643 23.4759 21.643 24.437V27.155C21.643 28.1161 22.0248 29.0379 22.7045 29.7176C23.3841 30.3972 24.3059 30.779 25.267 30.779H27.985C28.9461 30.779 29.8679 30.3972 30.5476 29.7176C31.2272 29.0379 31.609 28.1161 31.609 27.155V24.437C31.609 23.4759 31.2272 22.5541 30.5476 21.8744C29.8679 21.1948 28.9461 20.813 27.985 20.813V20.813ZM29.797 27.155C29.797 27.6356 29.6061 28.0965 29.2663 28.4363C28.9265 28.7761 28.4656 28.967 27.985 28.967H25.267C24.7864 28.967 24.3255 28.7761 23.9857 28.4363C23.6459 28.0965 23.455 27.6356 23.455 27.155V24.437C23.455 23.9564 23.6459 23.4955 23.9857 23.1557C24.3255 22.8159 24.7864 22.625 25.267 22.625H27.985C28.4656 22.625 28.9265 22.8159 29.2663 23.1557C29.6061 23.4955 29.797 23.9564 29.797 24.437V27.155Z"
          fill="black"
        />
      </svg>
    </Link>
  );
};
const Notification = ({ active, redirect, onClick }) => {
  return (
    <Link
      className={`icon ${active && 'active'}`}
      to={`${redirect}`}
      onClick={onClick}
    >
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.422 21.918L27.795 16.065C27.318 14.3495 26.2813 12.8426 24.8496 11.784C23.4179 10.7253 21.6735 10.1756 19.8935 10.2223C18.1135 10.269 16.4002 10.9093 15.026 12.0415C13.6517 13.1737 12.6954 14.7328 12.309 16.471L11.049 22.137C10.9099 22.7631 10.9131 23.4124 11.0586 24.0371C11.204 24.6617 11.4878 25.2457 11.8891 25.746C12.2904 26.2463 12.799 26.6501 13.3772 26.9275C13.9555 27.205 14.5886 27.349 15.23 27.349H16.184C16.3809 28.3168 16.9063 29.1869 17.6711 29.8118C18.436 30.4367 19.3933 30.778 20.381 30.778C21.3687 30.778 22.326 30.4367 23.0908 29.8118C23.8557 29.1869 24.3811 28.3168 24.578 27.349H25.296C25.9565 27.3491 26.608 27.1965 27.1997 26.903C27.7914 26.6096 28.3072 26.1832 28.7068 25.6573C29.1064 25.1315 29.379 24.5203 29.5033 23.8716C29.6275 23.2229 29.6 22.5543 29.423 21.918H29.422ZM20.381 29.063C19.8514 29.0608 19.3355 28.895 18.9038 28.5884C18.472 28.2817 18.1456 27.8492 17.969 27.35H22.793C22.6164 27.8492 22.2899 28.2817 21.8582 28.5884C21.4264 28.895 20.9105 29.0608 20.381 29.063V29.063ZM27.341 24.618C27.1023 24.9346 26.7931 25.1912 26.438 25.3674C26.0828 25.5436 25.6915 25.6345 25.295 25.633H15.23C14.8453 25.6329 14.4655 25.5464 14.1186 25.3798C13.7718 25.2133 13.4668 24.9711 13.2261 24.671C12.9854 24.3708 12.8151 24.0205 12.7279 23.6458C12.6406 23.2711 12.6386 22.8816 12.722 22.506L13.981 16.842C14.2846 15.477 15.0358 14.2526 16.1151 13.3634C17.1945 12.4743 18.54 11.9714 19.938 11.9348C21.3359 11.8981 22.706 12.3297 23.8304 13.1611C24.9549 13.9924 25.7692 15.1757 26.144 16.523L27.771 22.378C27.8784 22.7594 27.8955 23.1606 27.8209 23.5498C27.7462 23.939 27.5819 24.3054 27.341 24.62V24.618Z"
          fill="black"
        />
      </svg>
    </Link>
  );
};
const History = ({ active, redirect, onClick }) => {
  return (
    <Link
      className={`icon ${active && 'active'}`}
      to={`${redirect}`}
      onClick={onClick}
    >
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.816 27.353H14.249C13.1135 27.3517 12.0249 26.9 11.2219 26.0971C10.419 25.2941 9.96733 24.2055 9.966 23.07V14.503C9.96733 13.3675 10.419 12.2789 11.2219 11.4759C12.0249 10.673 13.1135 10.2213 14.249 10.22H22.816C23.9515 10.2213 25.0401 10.673 25.8431 11.4759C26.646 12.2789 27.0977 13.3675 27.099 14.503V23.07C27.0977 24.2055 26.646 25.2941 25.8431 26.0971C25.0401 26.9 23.9515 27.3517 22.816 27.353V27.353ZM14.249 11.933C13.5674 11.933 12.9137 12.2038 12.4317 12.6857C11.9498 13.1677 11.679 13.8214 11.679 14.503V23.07C11.679 23.7516 11.9498 24.4053 12.4317 24.8873C12.9137 25.3692 13.5674 25.64 14.249 25.64H22.816C23.4976 25.64 24.1513 25.3692 24.6333 24.8873C25.1152 24.4053 25.386 23.7516 25.386 23.07V14.503C25.386 13.8214 25.1152 13.1677 24.6333 12.6857C24.1513 12.2038 23.4976 11.933 22.816 11.933H14.249ZM30.526 26.496V15.36C30.5299 15.2451 30.5107 15.1305 30.4694 15.0232C30.4281 14.9158 30.3657 14.8179 30.2858 14.7352C30.2058 14.6525 30.1101 14.5867 30.0042 14.5418C29.8983 14.4969 29.7845 14.4737 29.6695 14.4737C29.5545 14.4737 29.4407 14.4969 29.3348 14.5418C29.2289 14.5867 29.1332 14.6525 29.0533 14.7352C28.9733 14.8179 28.9109 14.9158 28.8696 15.0232C28.8283 15.1305 28.8091 15.2451 28.813 15.36V26.496C28.813 27.1776 28.5422 27.8313 28.0603 28.3133C27.5783 28.7952 26.9246 29.066 26.243 29.066H15.106C14.9911 29.0621 14.8765 29.0813 14.7692 29.1226C14.6618 29.1639 14.5639 29.2263 14.4812 29.3062C14.3985 29.3862 14.3327 29.4819 14.2878 29.5878C14.2429 29.6937 14.2197 29.8075 14.2197 29.9225C14.2197 30.0375 14.2429 30.1513 14.2878 30.2572C14.3327 30.3631 14.3985 30.4588 14.4812 30.5388C14.5639 30.6187 14.6618 30.6811 14.7692 30.7224C14.8765 30.7637 14.9911 30.7829 15.106 30.779H26.242C27.3777 30.7779 28.4666 30.3264 29.2697 29.5234C30.0729 28.7205 30.5247 27.6317 30.526 26.496V26.496Z"
          fill="black"
        />
        <path d="M14.178 22.194H14.678" stroke="black" />
        <path d="M14.178 19.194H14.678" stroke="black" />
        <path d="M14.178 16.194H14.678" stroke="black" />
      </svg>
    </Link>
  );
};
const Messenger = ({ active, redirect, onClick }) => {
  return (
    <Link
      className={`icon ${active && 'active'}`}
      to={`${redirect}`}
      onClick={onClick}
    >
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.397 9.035H13.111C12.0973 9.035 11.1252 9.43767 10.4084 10.1544C9.69168 10.8712 9.289 11.8433 9.289 12.857V24.322C9.289 24.8239 9.38786 25.3209 9.57993 25.7846C9.77201 26.2483 10.0535 26.6697 10.4084 27.0246C10.7633 27.3795 11.1847 27.661 11.6484 27.8531C12.1121 28.0451 12.6091 28.144 13.111 28.144H15.881L20.134 31.744C20.3065 31.89 20.5251 31.9701 20.751 31.9701C20.9769 31.9701 21.1956 31.89 21.368 31.744L25.626 28.144H28.397C29.4107 28.144 30.3828 27.7413 31.0996 27.0246C31.8163 26.3078 32.219 25.3357 32.219 24.322V12.857C32.219 11.8433 31.8163 10.8712 31.0996 10.1544C30.3828 9.43767 29.4107 9.035 28.397 9.035V9.035ZM30.308 24.322C30.3083 24.5731 30.259 24.8218 30.1631 25.0539C30.0672 25.286 29.9265 25.4969 29.749 25.6746C29.5715 25.8522 29.3608 25.9932 29.1288 26.0893C28.8968 26.1855 28.6481 26.235 28.397 26.235H25.627C25.1755 26.2353 24.7387 26.3954 24.394 26.687L20.755 29.761L17.117 26.684C16.7711 26.3928 16.3331 26.2337 15.881 26.235H13.111C12.6042 26.235 12.1181 26.0337 11.7597 25.6753C11.4013 25.3169 11.2 24.8308 11.2 24.324V12.857C11.2 12.3502 11.4013 11.8641 11.7597 11.5057C12.1181 11.1473 12.6042 10.946 13.111 10.946H28.397C28.648 10.946 28.8965 10.9954 29.1283 11.0915C29.3602 11.1875 29.5708 11.3283 29.7483 11.5057C29.9257 11.6832 30.0665 11.8938 30.1625 12.1257C30.2586 12.3575 30.308 12.606 30.308 12.857V24.322Z"
          fill="black"
        />
        <path
          d="M15.976 15.723H20.753C21.0064 15.723 21.2495 15.6223 21.4286 15.4431C21.6078 15.2639 21.7085 15.0209 21.7085 14.7675C21.7085 14.5141 21.6078 14.2711 21.4286 14.0919C21.2495 13.9127 21.0064 13.812 20.753 13.812H15.976C15.7226 13.812 15.4796 13.9127 15.3004 14.0919C15.1212 14.2711 15.0205 14.5141 15.0205 14.7675C15.0205 15.0209 15.1212 15.2639 15.3004 15.4431C15.4796 15.6223 15.7226 15.723 15.976 15.723V15.723Z"
          fill="black"
        />
        <path
          d="M25.531 17.634H15.976C15.7226 17.634 15.4796 17.7347 15.3004 17.9139C15.1212 18.093 15.0205 18.3361 15.0205 18.5895C15.0205 18.8429 15.1212 19.0859 15.3004 19.2651C15.4796 19.4443 15.7226 19.545 15.976 19.545H25.531C25.7844 19.545 26.0275 19.4443 26.2066 19.2651C26.3858 19.0859 26.4865 18.8429 26.4865 18.5895C26.4865 18.3361 26.3858 18.093 26.2066 17.9139C26.0275 17.7347 25.7844 17.634 25.531 17.634Z"
          fill="black"
        />
        <path
          d="M25.531 21.455H15.976C15.7226 21.455 15.4796 21.5557 15.3004 21.7349C15.1212 21.9141 15.0205 22.1571 15.0205 22.4105C15.0205 22.6639 15.1212 22.907 15.3004 23.0861C15.4796 23.2653 15.7226 23.366 15.976 23.366H25.531C25.7844 23.366 26.0275 23.2653 26.2066 23.0861C26.3858 22.907 26.4865 22.6639 26.4865 22.4105C26.4865 22.1571 26.3858 21.9141 26.2066 21.7349C26.0275 21.5557 25.7844 21.455 25.531 21.455V21.455Z"
          fill="black"
        />
      </svg>
    </Link>
  );
};
// END = NAVIGATION ICONS

export default Navbar;
