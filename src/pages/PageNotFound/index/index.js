import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
const PageNotFound = () => {
  const history = useHistory();
  return (
    <StyledPageNotFound>
      <div className="info">
        <h1>
          Upps <br /> Page not found
        </h1>
      </div>
      <div className="button-wrapper">
        <Link to="/" className="button home">
          Home
        </Link>
        <button className="button" onClick={() => history.goBack()}>
          Kembali
        </button>
      </div>
    </StyledPageNotFound>
  );
};

const StyledPageNotFound = styled.div`
  background-color: #eff8f1;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .info {
    h1 {
      text-align: center;
    }
  }
  .button-wrapper {
    display: flex;
    margin-top: 50px;
    gap: 1rem;
    .button {
      width: 200px;
      padding: 8px;
      text-align: center;
      border-radius: 15px;
      border: 0;
      text-decoration: none;
      font: inherit;
      background-color: transparent;
      border: 1px solid #4c9f70;
      &.kembali:hover {
        cursor: pointer;
      }
      &.home {
        background-color: #4c9f70;
        color: white;
      }
    }
  }
`;

export default PageNotFound;
