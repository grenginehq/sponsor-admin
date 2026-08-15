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
  handleOpenViewEvent: () => void;
}
export const SponsorCard = ({
  event,
  handleOpenViewEvent,
}: SponsorCardProps) => {
  return (
    <StyledSponsorCard role="button" onClick={handleOpenViewEvent}>
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
