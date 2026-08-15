import { Modal } from "../../../components/Modal";
import { Button } from "../../../components/Button";
import {
  DeleteEventContent,
  DeleteEventContentButton,
  DeleteEventContentSubText,
  DeleteEventContentText,
  DeleteEventHeader,
  DeleteEventHeading,
  StyledDeleteEvent,
} from "./styles";
import { Icon } from "../../../components/Icon";
import type { Event } from "../../../types/event";

interface DeleteEventModalProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  event: Event | undefined;
}

const DeleteEventModal = ({
  toggleModal,
  setToggleModal,
  event,
}: DeleteEventModalProps) => {
  return (
    <>
      <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
        <StyledDeleteEvent>
          <DeleteEventHeader>
            <DeleteEventHeading>Delete Sponsor Event</DeleteEventHeading>
            <button type="button" onClick={() => setToggleModal(false)}>
              <Icon icon="close" />
            </button>
          </DeleteEventHeader>

          <DeleteEventContent>
            <DeleteEventContentText>
              Are you sure you want to this event{" "}
              <DeleteEventContentSubText>
                {event?.title}
              </DeleteEventContentSubText>
              . This action cannot be undone.
            </DeleteEventContentText>
            <DeleteEventContentButton>
              <Button
                variant="danger"
                type="button"
                label="Delete Sponsor Event"
                handleClick={() => setToggleModal(false)}
              />
            </DeleteEventContentButton>
          </DeleteEventContent>
        </StyledDeleteEvent>
      </Modal>
    </>
  );
};

export default DeleteEventModal;
