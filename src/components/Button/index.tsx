"use client";

import { ReactNode } from "react";
import type { ButtonVariant, ButtonType } from "../../types/component";
import { Icon } from "../Icon";
import type { IconNames } from "../../types/icon";
import { StyledButton } from "./styles";

interface ButtonProps {
  label?: string;
  variant: ButtonVariant;
  type: ButtonType;
  disabled?: boolean;
  handleClick?: () => void;
  children?: ReactNode | string;
  classStyles?: any;
  icon?: IconNames;
}

export const Button = ({
  label,
  variant = "primary",
  type = "button",
  handleClick,
  children,
  classStyles,
  icon,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      role="button"
      type={type}
      onClick={(e) => {
        e.stopPropagation();
        handleClick?.();
      }}
      style={classStyles}
    >
      {icon && <Icon icon={icon} />}
      {label || children}
    </StyledButton>
  );
};
