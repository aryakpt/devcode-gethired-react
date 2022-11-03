import React from 'react';
import colorPallete from '../../styles/colorPallete';

const IconPlus = ({ width = 24, height = 24, colorVariant = colorPallete['neutral-white'] }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4.99988V18.9999"
        stroke={colorPallete[colorVariant] ? colorPallete[colorVariant] : colorVariant}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke={colorPallete[colorVariant] ? colorPallete[colorVariant] : colorVariant}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconPlus;
