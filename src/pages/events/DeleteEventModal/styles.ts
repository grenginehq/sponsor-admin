import styled from "@emotion/styled";
import {
  black,
  gray02,
  InstrumentSans,
  white,
} from "../../../styles/abstracts/colors";

export const StyledDeleteEvent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  border-radius: 8px;
  min-width: 580px;
  height: auto;
  max-width: 580px;
`;

export const DeleteEventContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 19px 24px;
`;

export const DeleteEventHeading = styled.h4`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const DeleteEventContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 8px;
`;

export const DeleteEventHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  height: 62px;
  border-bottom: 0.8px solid ${gray02};
`;

export const DeleteEventContentText = styled.p`
  color: ${black};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  padding: 16px 0px;
`;

export const DeleteEventContentSubText = styled.span`
  color: ${black};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
