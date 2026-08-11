import {
  ProgressBarAmount,
  ProgressBarContainer,
  ProgressBarFilled,
  ProgressBarPercentage,
  ProgressBarTextContainer,
  StyledProgressBar,
} from "./styles";

interface ProgressBarProps {
  totalReceived: number;
  totalAmount: number;
  currency: string;
}
export const ProgressBar = ({
  totalReceived,
  totalAmount,
  currency,
}: ProgressBarProps) => {
  const calculatedPercentage = (totalReceived / totalAmount) * 100;
  return (
    <ProgressBarContainer>
      <ProgressBarTextContainer>
        <ProgressBarPercentage>{calculatedPercentage}%</ProgressBarPercentage>
        <ProgressBarAmount>
          {totalAmount}&nbsp;({currency})
        </ProgressBarAmount>
      </ProgressBarTextContainer>
      <StyledProgressBar>
        <ProgressBarFilled
          style={{ width: `${calculatedPercentage}%` }}
        ></ProgressBarFilled>
      </StyledProgressBar>
    </ProgressBarContainer>
  );
};
