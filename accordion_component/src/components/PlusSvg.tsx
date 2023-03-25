import React, { HTMLAttributes } from 'react';

const PlusSvg: React.FC<HTMLAttributes<SVGElement>> = ({ ...props }) => (
  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_1_22)">
      <path d="M9 4.25V14.75" stroke="#0E1C4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.75 9.5H14.25" stroke="#0E1C4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_1_22">
        <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
      </clipPath>
    </defs>
  </svg>
);

export default PlusSvg;
