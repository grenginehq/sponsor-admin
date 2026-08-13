import { useMemo, useState } from "react";
import { Button } from "../../components/Button";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { SponsorCard } from "../../components/SponsorCard";
import { events } from "../../constants";
import AddEventModal from "./AddEventModal";
import {
  EventsButton,
  EventsDescription,
  EventsGrid,
  EventsHeader,
  EventsHeading,
  EventsMainContent,
  EventsPagination,
  StyledEvents,
} from "./styles";
const ITEMS_PER_PAGE = 5;
export function Events() {
  const [toggleEventModal, setToggleEventModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return events.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [events, currentPage, ITEMS_PER_PAGE]);

  return (
    <StyledEvents>
      <Sidebar />
      <EventsMainContent>
        <EventsHeader>
          <EventsHeading>Sponsor Events</EventsHeading>
          <EventsDescription>
            View and manage all sponsor events.
          </EventsDescription>
        </EventsHeader>
        <EventsButton>
          <Button
            handleClick={() => setToggleEventModal(!toggleEventModal)}
            type="button"
            variant="primary"
            label="Add Sponsor Event"
          />
        </EventsButton>
        <EventsGrid>
          {paginatedEvents?.map((event, index) => {
            return <SponsorCard key={`event_${index + 1}`} event={event} />;
          })}
        </EventsGrid>
        <EventsPagination>
          <Pagination
            currentPage={currentPage}
            totalCount={events.length}
            siblingCount={1}
            boundaryCount={1}
            pageSize={ITEMS_PER_PAGE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </EventsPagination>
      </EventsMainContent>
      <AddEventModal
        toggleModal={toggleEventModal}
        setToggleModal={setToggleEventModal}
      />
    </StyledEvents>
  );
}
