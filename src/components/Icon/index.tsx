import { icons } from "../../assets/icons/icon";
import type { IconNames } from "../../types/icon";
import { StyledIcon } from "./styles";
import * as React from "react";

interface IconProps {
  icon: IconNames;
  className?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  className,
}): React.ReactNode => {
  return (
    <StyledIcon
      style={className}
      aria-hidden={true}
      id="icon-element"
      dangerouslySetInnerHTML={{ __html: icons[icon] }}
    />
  );
};
