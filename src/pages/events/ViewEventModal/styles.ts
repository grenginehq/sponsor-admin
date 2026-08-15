import styled from "@emotion/styled";
import { black, InstrumentSans, white } from "../../../styles/abstracts/colors";

export const StyledViewEvent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  border-radius: 8px;
  min-width: 580px;
  height: auto;
  max-width: 580px;
`;

export const ViewEventContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 19px 24px;
`;

export const ViewEventHeading = styled.h4`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ViewEventContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 24px;
`;

export const ViewEventHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  height: 62px;
`;

export const ViewEventContentText = styled.p`
  color: ${black};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 100%;
  padding: 16px 0px;
`;

export const ViewEventContentSubText = styled.span`
  color: ${black};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ViewEventContentDescription = styled.p`
  color: ${black};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ViewEventContentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ViewEventContentRowText = styled.p`
  color: ${black};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ViewEventContentRowSubText = styled.span`
  font-weight: 400;
`;
