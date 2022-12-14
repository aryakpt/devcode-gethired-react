const IconUnfinished = ({ width = 16, height = 12, variantColor = '#16ABF8' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 3.75L4.25 0.75M4.25 0.75L7.25 3.75M4.25 0.75V11.25"
        stroke={variantColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.75 8.25L11.75 11.25M11.75 11.25L8.75 8.25M11.75 11.25V0.75"
        stroke={variantColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconUnfinished;
