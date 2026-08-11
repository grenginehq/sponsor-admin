import styled from "@emotion/styled";
import { black, black02, InstrumentSans } from "../../styles/abstracts/colors";

export const StyledPayments = styled.div`
  display: grid;
  grid-template-columns: 232px 1fr;
  height: 100vh;
  overflow: hidden;
`;

export const PaymentsTable = styled.div`
  display: flex;
  padding: 24px 16px 0 16px;
  flex-direction: column;
  align-items: flex-start;
`;

export const PaymentsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const PaymentsHeading = styled.h3`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

export const PaymentsDescription = styled.p`
  color: ${black02};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const PaymentsButton = styled.div`
  display: flex;
  padding: 20px 0 19px 0;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;
