import React from 'react';

const IconSort = ({ width = 54, height = 54, colorVariant = '#888888', strokeWidth = 2 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 24L22 20M22 20L26 24M22 20V34"
        stroke={colorVariant}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
      <path
        d="M36 30L32 34M32 34L28 30M32 34V20"
        stroke={colorVariant}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
      <rect x="0.5" y="0.5" width="53" height="53" rx="26.5" stroke="#E5E5E5" />
    </svg>
  );
};

export default IconSort;