import React from "react";
import Svg, { Path } from "react-native-svg";

const PlusIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 4V20M20 12H4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PlusIcon;
