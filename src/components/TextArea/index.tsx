"use client";

import { useController } from "react-hook-form";
import type { Control, Path, FieldValues } from "react-hook-form";
import type { IconNames } from "../../types/icon";
import { Icon } from "../Icon";
import {
  TextAreaContainer,
  TextAreaError,
  TextAreaLabel,
  TextAreaWrapper,
  StyledTextArea,
} from "./styles";

interface TextAreaProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: IconNames;
  type: "text" | "email" | "number" | "password" | "search" | "url" | "color";
  size?: "medium" | "large";
  control: Control<T>;
  min?: string;
  autoFocus?: boolean;
  onChange?: () => void;
  rules?: any;
  variant: "outlined" | "filled";
}

export const TextArea = <T extends FieldValues>({
  label,
  name,
  placeholder,
  disabled,
  icon,
  control,
  autoFocus,
  onChange,
  rules,
}: TextAreaProps<T>) => {
  const { field, fieldState } = useController({ control, name, rules });
  const { error } = fieldState;

  return (
    <TextAreaWrapper>
      <TextAreaLabel htmlFor={name}>{label}</TextAreaLabel>
      <TextAreaContainer>
        {icon && <Icon icon={icon} />}
        <StyledTextArea
          id={name}
          readOnly={disabled}
          placeholder={placeholder}
          {...field}
          onChange={(e) => {
            field.onChange(e);
            onChange?.();
          }}
          autoFocus={autoFocus}
          spellCheck="false"
          disabled={disabled}
        />
      </TextAreaContainer>
      {error && <TextAreaError>{error?.message}</TextAreaError>}
    </TextAreaWrapper>
  );
};
