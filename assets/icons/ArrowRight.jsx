import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowRightIcon = ({
  size = 24,
  color = "white",
  strokeWidth = 1.5,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M18.5 12L4.99997 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowRightIcon;
