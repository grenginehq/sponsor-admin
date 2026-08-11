import styled from "@emotion/styled";
import {
  black,
  black02,
  green03,
  InstrumentSans,
  red03,
  white,
} from "../../styles/abstracts/colors";

export const StyledSummaryCard = styled.div`
  border-radius: 14px;
  background: ${white};
  box-shadow: 6px 6px 54px 0 rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 161px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SummaryCardHeading = styled.h2`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SummaryCardMetric = styled.p`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1px;
  margin-top: 16px;
`;

export const SummaryCardHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SummaryCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SummaryCardBottom = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SummaryCardMetricDescription = styled.p`
  color: ${black02};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SummaryCardMetricPercentage = styled.p<{ status: "up" | "down" }>`
  color: ${({ status }) => (status === "down" ? red03 : green03)};
`;
