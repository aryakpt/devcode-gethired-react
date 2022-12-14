const IconZA = ({ width = 13, height = 16, variantColor = '#16ABF8' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.25 14.75V11C9.25 9.965 9.715 9.5 10.75 9.5C11.785 9.5 12.25 9.965 12.25 11V14.75M12.25 12.5H9.25"
        stroke={variantColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.25 6.5H9.25L12.25 1.25H9.25"
        stroke={variantColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 10.25L3.25 12.5L5.5 10.25"
        stroke={variantColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3.25 3.5V12.5" stroke={variantColor} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default IconZA;
