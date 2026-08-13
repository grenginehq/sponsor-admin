import styled from "@emotion/styled";
import { primary, secondary03, white } from "../../styles/abstracts/colors";

export const StyledButton = styled.button<{ variant }>`
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
  background-color: ${primary};
  color: ${({ variant }) => (variant === "primary" ? white : secondary03)};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border: 1px solid ${primary};
    color: ${primary};
    background-color: transparent;

    & svg path {
      stroke: ${primary};
    }
  }
`;
