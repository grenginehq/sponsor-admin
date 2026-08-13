"use client";

import { useController } from "react-hook-form";
import type { Control } from "react-hook-form";
import type { IconNames } from "../../types/icon";
import { Icon } from "../Icon";
import {
  InputContainer,
  InputError,
  InputLabel,
  InputWrapper,
  StyledInput,
} from "./styles";

interface InputProps {
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
  disableSpecialCharFilter?: boolean;
  autoComplete?: string;
  onChange?: () => void;
  rules?: any;
  variant: "outlined" | "filled";
}

export const Input = ({
  label,
  name,
  placeholder,
  required,
  type,
  disabled,
  icon,
  size,
  control,
  min,
  autoFocus,
  autoComplete,
  onChange,
  rules,
  variant,
}: InputProps) => {
  const { field, fieldState } = useController({ control, name, rules });
  const { error } = fieldState;

  const getAutoCompleteValue = () => {
    if (autoComplete) return autoComplete;

    const autoCompleteMap: Record<string, string> = {
      email: "email",
      username: "username",
      password: "current-password",
      confirmPassword: "new-password",
      firstName: "given-name",
      lastName: "family-name",
      phone: "tel",
      phoneNumber: "tel",
      address: "street-address",
      city: "address-level2",
      state: "address-level1",
      zipCode: "postal-code",
      country: "country-name",
    };

    return autoCompleteMap[name as string] || "off";
  };

  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputContainer>
        {icon && <Icon icon={icon} />}
        <StyledInput
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
          autoComplete={getAutoCompleteValue()}
          data-form-type="other"
          data-lpignore={type === "password" ? "true" : undefined}
          spellCheck="false"
          disabled={disabled}
        />
      </InputContainer>
      {error && <InputError>{error?.message}</InputError>}
    </InputWrapper>
  );
};
