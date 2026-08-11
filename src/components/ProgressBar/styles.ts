import styled from "@emotion/styled";
import {
  primary,
  secondary14,
  secondary15,
} from "../../styles/abstracts/colors";

export const StyledProgressBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 64px;
  background: ${secondary14};
  width: 100%;
  height: 8px;
`;
export const ProgressBarFilled = styled.div`
  background-color: ${primary};
  height: 100%;
  border-radius: 64px;
`;
export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const ProgressBarTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProgressBarPercentage = styled.p`
  color: ${secondary15};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
`;

export const ProgressBarAmount = styled.p`
  color: ${secondary15};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;
