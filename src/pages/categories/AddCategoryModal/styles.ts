import styled from "@emotion/styled";
import {
  black,
  gray02,
  InstrumentSans,
  white,
} from "../../../styles/abstracts/colors";

export const StyledAddCategory = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  border-radius: 8px;
  min-width: 580px;
  height: auto;
  max-width: 580px;
`;

export const AddCategoryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 19px 24px;
`;

export const AddCategoryHeading = styled.h4`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const AddCategoryFormButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 8px;
`;

export const AddCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  height: 62px;
  border-bottom: 0.8px solid ${gray02};
`;
