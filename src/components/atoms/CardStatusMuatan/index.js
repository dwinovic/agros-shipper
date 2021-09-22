import React from 'react';
import styled from 'styled-components';
import { CardWrapper, ItemStatusMuatan } from '..';
import { ICDikirim, ICTerkirim, ICTertunda } from '../../../assets';

const StatusMuatan = ({ status }) => {
  return (
    <StyledStatusMuatan>
      <CardWrapper className="content-status-muatan" hoverDisabled>
        <div className="left-status-muatan">
          <h3 className="heading-card-md">Status Muatan</h3>
          <div className="body-status-muatan">
            <p className="text-md">
              Pilih salah satu menu untuk mendapatkan informasi yang Anda
              inginkan terkait dengan muatan Anda.
            </p>
            <div className="status-muatan">
              <div className={`icon ${status === 'terkirim' && 'active'}`}>
                <img src={ICTerkirim} alt="terkirim" />
                <p>Terkirim</p>
              </div>
              <div className={`icon ${status === 'dikirim' && 'active'}`}>
                <img src={ICDikirim} alt="Dikirim" />
                <p>Dikirim</p>
              </div>
              <div className={`icon ${status === 'tertunda' && 'active'}`}>
                <img src={ICTertunda} alt="Tertunda" />
                <p>Tertunda</p>
              </div>
            </div>
          </div>
          <div className="footer-status-mantan hover">
            <p>Lihat lebih lanjut</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 0H5C2.23858 0 0 2.23858 0 5V11C0 13.7614 2.23858 16 5 16H11C13.7614 16 16 13.7614 16 11V5C16 2.23858 13.7614 0 11 0Z"
                fill="#4c9f70"
              />
              <path
                d="M5.13799 8.22406H10.006L8.08399 10.1451L8.39999 10.4611L10.861 8.00006L8.39999 5.53906L8.08399 5.85506L10.006 7.77706L5.13799 7.77706V8.22406Z"
                fill="white"
                stroke="white"
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="right-status-muatan">
          <CardWrapper hoverDisabled className="list-status">
            <ItemStatusMuatan idStatusMuatan="DO-AGRS-040221.71" />
            <ItemStatusMuatan idStatusMuatan="DO-AGRS-040221.71" />
            <ItemStatusMuatan idStatusMuatan="DO-AGRS-040221.71" />
            <ItemStatusMuatan idStatusMuatan="DO-AGRS-040221.71" />
            <ItemStatusMuatan idStatusMuatan="DO-AGRS-040221.71" />
            <ItemStatusMuatan idStatusMuatan="DO-AGRS-040221.71" />
            <ItemStatusMuatan idStatusMuatan="DO-AGRS-040221.71" />
            <ItemStatusMuatan idStatusMuatan="DO-AGRS-040221.71" />
            <ItemStatusMuatan idStatusMuatan="DO-AGRS-040221.71" />
            <ItemStatusMuatan idStatusMuatan="DO-AGRS-040221.71" />
          </CardWrapper>
        </div>
      </CardWrapper>
    </StyledStatusMuatan>
  );
};
StatusMuatan.defaultProps = {};

StatusMuatan.propTypes = {};
const StyledStatusMuatan = styled.div`
  width: 100%;
  .content-status-muatan {
    width: 100%;
    display: flex;
    gap: 16px;
    .left-status-muatan {
      width: 30%;
      display: flex;
      flex-direction: column;
      .heading-card-md {
        margin-bottom: 1rem;
      }
      .body-status-muatan {
        flex: 1;
        .text-md {
          margin-bottom: 1.7rem;
        }
        .status-muatan {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          .icon {
            display: flex;
            align-items: center;
            gap: 1rem;
            opacity: 0.5;
            img {
              width: 40px;
            }
            &.active {
              opacity: 1;
              p {
                font-weight: 700;
              }
            }
          }
        }
      }
      .footer-status-mantan {
        display: flex;
        gap: 50px;
        align-items: center;
        color: #4c9f70;
      }
    }
    .right-status-muatan {
      background-color: yellow;
      flex: 1;
      .list-status {
        width: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 1rem;
      }
    }
  }
`;
export default StatusMuatan;
