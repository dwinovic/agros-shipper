import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ICLocation, ICNextRight } from '../../../assets';
const ItemStatusMuatan = ({ idStatusMuatan, onClick }) => {
  return (
    <StyledItemStatusMuatan>
      <div className="icon">
        <img src={ICLocation} alt="location" />
      </div>
      <p className="idMuatan">{idStatusMuatan}</p>
      <div className="icon next" onClick={onClick}>
        <img src={ICNextRight} alt="location" />
      </div>
    </StyledItemStatusMuatan>
  );
};
ItemStatusMuatan.defaultProps = {
  idStatusMuatan: 'AGR000/00/000#00',
};

ItemStatusMuatan.propTypes = {
  idStatusMuatan: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const StyledItemStatusMuatan = styled.div`
  display: flex;
  background-color: #eff8f1;
  gap: 1rem;
  padding: 8px;
  border-radius: 5px;
  .icon {
    background-color: white;
    width: 36px;
    height: 36px;
    box-shadow: 0px 0px 10px #0000001b;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 10px #0000001b;
    align-items: center;
    &.next {
      cursor: pointer;
    }
  }
  .idMuatan {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #000000;
    flex: 1;
  }
  &:hover {
    box-shadow: 0px 0px 20px #00000029;
  }
`;
export default ItemStatusMuatan;
