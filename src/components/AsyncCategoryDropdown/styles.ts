import styled from "@emotion/styled";
import { black, InstrumentSans, red } from "../../styles/abstracts/colors";

export const AsyncCategoryDropdownLabel = styled.label`
  color: ${black};
  font-family: ${InstrumentSans};
  line-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  font-style: regular;
  font-weight: 400;
`;

export const Error = styled.div`
  font-size: 12px;
  color: ${red};
`;

export const StyledAsyncCategoryDropdown = styled.div<{
  isSuccess?: boolean;
  isError?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${red} !important;
`;
