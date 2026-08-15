import styled from "@emotion/styled";
import {
  primary,
  red,
  secondary03,
  white,
} from "../../styles/abstracts/colors";
import type { ButtonVariant } from "../../types/component";

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
  border-radius: ${({ variant }) => (variant === "primary" ? "8px" : "50px")};
  min-width: ${({ variant }) => (variant === "primary" ? "0px" : "223px")};
  cursor: pointer;
  width: fit-content;
  height: ${({ variant }) => (variant === "primary" ? "48px" : "58px")};
  gap: 8px;
  background-color: ${({ variant }) => (variant === "danger" ? red : variant === "outlined" ? "transparent" : primary)};
  color: ${({ variant }) => (variant === "secondary" ? secondary03 : variant === "outlined" ? primary : white)};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  border: ${({ variant }) => (variant === "outlined" ? `1px solid ${primary}` : "none")};

  &:hover {
    border: ${({ variant }) => (variant === "danger" ? `1px solid ${red}`: variant === "outlined" ? "none" : `1px solid ${primary}`)};
    color: ${({ variant }) => (variant === "danger" ? red : primary)};
    background-color: transparent;

    & svg path {
      stroke: ${primary};
    }
  }
`;
