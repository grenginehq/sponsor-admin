import { Modal } from "../../../components/Modal";
import { Button } from "../../../components/Button";
import {
  ViewEventContent,
  ViewEventContentButton,
  ViewEventHeader,
  ViewEventHeading,
  StyledViewEvent,
  ViewEventContentDescription,
  ViewEventContentRow,
  ViewEventContentRowText,
  ViewEventContentRowSubText,
} from "./styles";
import { Icon } from "../../../components/Icon";
import type { Event } from "../../../types/event";
import { Pill } from "../../../components/Pill";

interface ViewEventModalProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  event: Event | undefined;
  handleOpenEditEvent: () => void;
  handleOpenDeleteEvent: () => void;
}

const ViewEventModal = ({
  toggleModal,
  setToggleModal,
  event,
  handleOpenDeleteEvent,
  handleOpenEditEvent,
}: ViewEventModalProps) => {
  return (
    <>
      <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
        <StyledViewEvent>
          <ViewEventHeader>
            <ViewEventHeading>{event?.title}</ViewEventHeading>
            <button type="button" onClick={() => setToggleModal(false)}>
              <Icon icon="close" />
            </button>
          </ViewEventHeader>

          <ViewEventContent>
            <Pill
              style={{
                color: "#D4AF37",
                fontSize: "16px",
                height: "auto",
                padding: "8px 16px",
              }}
              label="Medical"
              variant="Pending"
            />
            <ViewEventContentDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </ViewEventContentDescription>
            <ViewEventContentRow>
              <Icon icon="calendar" />
              <ViewEventContentRowText>
                Date:{" "}
                <ViewEventContentRowSubText>
                  {event?.date}
                </ViewEventContentRowSubText>
              </ViewEventContentRowText>
            </ViewEventContentRow>
            <ViewEventContentRow>
              <Icon icon="money" />
              <ViewEventContentRowText>
                Total Amount Raised:{" "}
                <ViewEventContentRowSubText>
                  {event?.totalAmount}
                </ViewEventContentRowSubText>
              </ViewEventContentRowText>
            </ViewEventContentRow>
            <ViewEventContentRow>
              <Icon icon="money" />
              <ViewEventContentRowText>
                Total Amount Pending:{" "}
                <ViewEventContentRowSubText>
                  {event?.totalReceived}
                </ViewEventContentRowSubText>
              </ViewEventContentRowText>
            </ViewEventContentRow>
            <ViewEventContentButton>
              <Button
                variant="outlined"
                type="button"
                label="Edit Sponsor Event"
                handleClick={handleOpenEditEvent}
              />
              <Button
                variant="danger"
                type="button"
                label="Delete Sponsor Event"
                handleClick={handleOpenDeleteEvent}
              />
            </ViewEventContentButton>
          </ViewEventContent>
        </StyledViewEvent>
      </Modal>
    </>
  );
};

export default ViewEventModal;
