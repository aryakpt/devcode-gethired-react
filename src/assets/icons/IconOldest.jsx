const IconOldest = ({ width = 15, height = 10, variantColor = '#16ABF8' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0.5H6.25" stroke={variantColor} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 5H6.25" stroke={variantColor} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 9.5H7.75" stroke={variantColor} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.25 2.75L11.5 0.5L13.75 2.75"
        stroke={variantColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.5 0.5V9.5" stroke={variantColor} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default IconOldest;
