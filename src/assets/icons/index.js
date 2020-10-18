import React from "react";
// Primary Outlet Color
//#110F48
//white
export const IcArrow = (props) => {
  return (
    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.375 9.75L5.625 5.5L1.375 1.25"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const IcProduct = (props) => {
  return (
    <svg className="mr-3" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.875 11.3333V5.66664C14.8747 5.41821 14.8092 5.17421 14.6848 4.95913C14.5605 4.74404 14.3818 4.56544 14.1667 4.44122L9.20833 1.60789C8.99297 1.48355 8.74868 1.41809 8.5 1.41809C8.25132 1.41809 8.00703 1.48355 7.79167 1.60789L2.83333 4.44122C2.61819 4.56544 2.43949 4.74404 2.31516 4.95913C2.19083 5.17421 2.12525 5.41821 2.125 5.66664V11.3333C2.12525 11.5817 2.19083 11.8257 2.31516 12.0408C2.43949 12.2559 2.61819 12.4345 2.83333 12.5587L7.79167 15.3921C8.00703 15.5164 8.25132 15.5819 8.5 15.5819C8.74868 15.5819 8.99297 15.5164 9.20833 15.3921L14.1667 12.5587C14.3818 12.4345 14.5605 12.2559 14.6848 12.0408C14.8092 11.8257 14.8747 11.5817 14.875 11.3333Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.31628 4.93005L8.50003 8.50714L14.6838 4.93005"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5 15.64V8.5" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const IcDevice = (props) => {
  return (
    <svg className="mr-3" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.54163 12.0417H2.83329C2.45757 12.0417 2.09723 11.8924 1.83156 11.6267C1.56588 11.3611 1.41663 11.0007 1.41663 10.625V3.54167C1.41663 3.16594 1.56588 2.80561 1.83156 2.53993C2.09723 2.27426 2.45757 2.125 2.83329 2.125H14.1666C14.5424 2.125 14.9027 2.27426 15.1684 2.53993C15.434 2.80561 15.5833 3.16594 15.5833 3.54167V10.625C15.5833 11.0007 15.434 11.3611 15.1684 11.6267C14.9027 11.8924 14.5424 12.0417 14.1666 12.0417H13.4583M8.49996 10.625L12.0416 14.875H4.95829L8.49996 10.625Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IcStatistic = (props) => {
  return (
    <>
      <svg className="mr-3" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <path
            d="M16.2917 4.25L9.56254 10.9792L6.02087 7.4375L0.708374 12.75"
            stroke={props.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0416 4.25H16.2916V8.5"
            stroke={props.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="17" height="17" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export const IcInfo = (props) => {
  return (
    <svg className="mr-3" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.49996 15.5833C12.412 15.5833 15.5833 12.412 15.5833 8.49996C15.5833 4.58794 12.412 1.41663 8.49996 1.41663C4.58794 1.41663 1.41663 4.58794 1.41663 8.49996C1.41663 12.412 4.58794 15.5833 8.49996 15.5833Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5 11.3333V8.5" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8.5 5.66663H8.50708"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
