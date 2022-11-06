import { customThemeMUI } from '../../styles/customThemeMUI';
const { palette } = customThemeMUI;

const IconBack = ({
  width = 32,
  height = 32,
  colorVariant = palette.custom['neutral-black'],
  strokeWidth = 5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66675 16L14.6667 24"
        stroke={colorVariant}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
      <path
        d="M6.66675 16L14.6667 8"
        stroke={colorVariant}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
    </svg>
  );
};

export default IconBack;
