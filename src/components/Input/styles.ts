import styled from "@emotion/styled";
import {
  black,
  InstrumentSans,
  red,
  secondary01,
  secondary12,
} from "../../styles/abstracts/colors";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputContainer = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${secondary01};
  background: ${secondary12};
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-style: medium;
  font-size: 14.1px;
  line-height: 20.02px;
  letter-spacing: 1.68px;
  vertical-align: middle;
  color: ${black};

  &::placeholder {
    color: ${black};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
    text-transform: uppercase;
  }
`;

export const InputLabel = styled.label`
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

export const InputError = styled.p`
  font-weight: 400;
  font-size: 14;
  color: ${red};
  width: "100%";
`;
