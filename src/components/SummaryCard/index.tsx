import type { IconNames } from "../../types/icon";
import { Icon } from "../Icon";
import {
  StyledSummaryCard,
  SummaryCardBottom,
  SummaryCardHeading,
  SummaryCardHeadingContainer,
  SummaryCardMetric,
  SummaryCardMetricDescription,
  SummaryCardMetricPercentage,
  SummaryCardTop,
} from "./styles";

interface SummaryCardProps {
  title: string;
  metric: string;
  icon: IconNames;
  metricPercentage: number;
  status: "up" | "down";
  metricDescription: string;
}

const SummaryCard = ({
  title,
  metric,
  icon,
  metricDescription,
  metricPercentage,
  status,
}: SummaryCardProps) => {
  return (
    <StyledSummaryCard>
      <SummaryCardTop>
        <SummaryCardHeadingContainer>
          <SummaryCardHeading>{title}</SummaryCardHeading>
          <SummaryCardMetric>{metric}</SummaryCardMetric>
        </SummaryCardHeadingContainer>
        <Icon icon={icon} />
      </SummaryCardTop>
      <SummaryCardBottom>
        <SummaryCardMetricDescription>
          <Icon icon={status as IconNames} />
          <SummaryCardMetricPercentage status={status}>
            {metricPercentage}%
          </SummaryCardMetricPercentage>
          {metricDescription}
        </SummaryCardMetricDescription>
      </SummaryCardBottom>
    </StyledSummaryCard>
  );
};

export default SummaryCard;
