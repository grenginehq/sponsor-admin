"use client";

import { useController } from "react-hook-form";
import type { Control } from "react-hook-form";
import type { IconNames } from "../../types/icon";
import { Icon } from "../Icon";
import {
  TextAreaContainer,
  TextAreaError,
  TextAreaLabel,
  TextAreaWrapper,
  StyledTextArea,
} from "./styles";

interface TextAreaProps {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: IconNames;
  type: "text" | "email" | "number" | "password" | "search" | "url" | "color";
  size?: "medium" | "large";
  control: Control<any>;
  min?: string;
  autoFocus?: boolean;
  onChange?: () => void;
  rules?: any;
  variant: "outlined" | "filled";
}

export const TextArea = ({
  label,
  name,
  placeholder,
  type,
  disabled,
  icon,
  control,
  min,
  autoFocus,
  onChange,
  rules,
}: TextAreaProps) => {
  const { field, fieldState } = useController({ control, name, rules });
  const { error } = fieldState;

  return (
    <TextAreaWrapper>
      <TextAreaLabel htmlFor={name}>{label}</TextAreaLabel>
      <TextAreaContainer>
        {icon && <Icon icon={icon} />}
        <StyledTextArea
          id={name}
          type={type}
          readOnly={disabled}
          placeholder={placeholder}
          {...field}
          onChange={(e) => {
            field.onChange(e);
            onChange?.();
          }}
          min={min}
          autoFocus={autoFocus}
          spellCheck="false"
          disabled={disabled}
        />
      </TextAreaContainer>
      {error && <TextAreaError>{error?.message}</TextAreaError>}
    </TextAreaWrapper>
  );
};
