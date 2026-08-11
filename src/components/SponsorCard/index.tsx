import { useNavigate } from "react-router-dom";
import type { Event } from "../../types/event";
import { ProgressBar } from "../ProgressBar";
import {
  SponsorCardDate,
  SponsorCardImage,
  SponsorCardTitle,
  SponsorCardTitleContainer,
  StyledSponsorCard,
} from "./styles";

interface SponsorCardProps {
  event: Event;
}
export const SponsorCard = ({ event }: SponsorCardProps) => {
  const navigate = useNavigate();

  const handleNavigation = (category: string) => {
    navigate.push(`/sponsor/${category}`);
  };
  return (
    <StyledSponsorCard
      role="button"
      onClick={() => handleNavigation(event?.category)}
    >
      <SponsorCardImage>
        <img alt="sponsor" src={event?.image} />
      </SponsorCardImage>
      <ProgressBar
        totalAmount={event?.totalAmount}
        totalReceived={event?.totalReceived}
        currency={event?.currency}
      />
      <SponsorCardTitleContainer>
        <SponsorCardTitle>{event?.title}</SponsorCardTitle>
        <SponsorCardDate>{event?.date}</SponsorCardDate>
      </SponsorCardTitleContainer>
    </StyledSponsorCard>
  );
};
