import { Button } from "../../components/Button";
import { Sidebar } from "../../components/Sidebar";
import { SponsorCard } from "../../components/SponsorCard";
import { events } from "../../constants";
import {
  EventsButton,
  EventsDescription,
  EventsGrid,
  EventsHeader,
  EventsHeading,
  EventsMainContent,
  StyledEvents,
} from "./styles";

export function Events() {
  return (
    <StyledEvents>
      <Sidebar />
      <EventsMainContent>
        <EventsHeader>
          <EventsHeading>Events</EventsHeading>
          <EventsDescription>View and manage all Events.</EventsDescription>
        </EventsHeader>
        <EventsButton>
          <Button
            type="button"
            variant="primary"
            label="Add Sponsor Event"
          />
        </EventsButton>
        <EventsGrid>
          {events?.map((event, index) => {
            return <SponsorCard key={`event_${index + 1}`} event={event} />;
          })}
        </EventsGrid>
      </EventsMainContent>
    </StyledEvents>
  );
}
