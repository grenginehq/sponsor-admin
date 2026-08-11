import styled from "@emotion/styled";
import { black, black02, InstrumentSans } from "../../styles/abstracts/colors";

export const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 232px 1fr;
  height: 100vh;
  overflow: hidden;
`;

export const DashboardMainContent = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 24px 16px 48px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
`;

export const DashboardHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DashboardHeading = styled.h2`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;

export const DashboardHeadingDescription = styled.p`
  color: ${black02};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const SummaryCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 16px;
  align-items: center;
`;

export const DashboardChartsHeading = styled.h1`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

export const DashboardCharts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 48px;
`;

export const DashboardSponsors = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DashboardSponsorsHeading = styled.h2`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
