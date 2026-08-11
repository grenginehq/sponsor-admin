import styled from "@emotion/styled";
import { primary, secondary03, white } from "../../styles/abstracts/colors";

export const StyledButton = styled.button`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
  height: 48px;
  gap: 8px;
  background-color: ${primary};
  color: ${white};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border: 1px solid ${primary};
    color: ${primary};
    background-color: transparent;
  }
`;
