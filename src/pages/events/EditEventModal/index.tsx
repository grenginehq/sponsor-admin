import { Modal } from "../../../components/Modal";
import { Button } from "../../../components/Button";
import {
  EditEventForm,
  EditEventFormButton,
  EditEventFormGrid,
  EditEventHeader,
  EditEventHeading,
  StyledEditEvent,
} from "./styles";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import AsyncCategoryDropdown from "../../../components/AsyncCategoryDropdown";
import { TextArea } from "../../../components/TextArea";
import UploadImage from "../../../components/UploadImage";
import { Icon } from "../../../components/Icon";
import type { Event } from "../../../types/event";
import { useEffect } from "react";

interface EditEventModalProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  event: Event | undefined;
}

const EditEventModal = ({
  toggleModal,
  setToggleModal,
  event,
}: EditEventModalProps) => {
  const { control, reset } = useForm({
    defaultValues: {
      name: event?.title,
      description: event?.description,
      image: event?.image,
      category: event?.category,
      date: event?.date,
      totalAmount: event?.totalAmount,
      currency: event?.currency,
    },
  });

  useEffect(() => {
    reset({
      name: event?.title,
      description: event?.description,
      image: event?.image,
      category: event?.category,
      date: event?.date,
      totalAmount: event?.totalAmount,
      currency: event?.currency,
    });
  }, [event]);

  return (
    <>
      <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
        <StyledEditEvent>
          <EditEventHeader>
            <EditEventHeading>Edit Sponsor Event</EditEventHeading>
            <button type="button" onClick={() => setToggleModal(false)}>
              <Icon icon="close" />
            </button>
          </EditEventHeader>

          <EditEventForm>
            <Input
              variant="filled"
              type="text"
              control={control}
              name="name"
              label="Name"
            />
            <AsyncCategoryDropdown
              control={control}
              name="category"
              label="Category"
            />
            <TextArea
              variant="filled"
              type="text"
              control={control}
              name="description"
              label="Description"
            />
            <EditEventFormGrid>
              <Input
                variant="filled"
                type="text"
                control={control}
                name="date"
                label="Event Date"
              />
              <Input
                variant="filled"
                type="number"
                control={control}
                name="totalAmount"
                label="Amount (in digits)"
              />
            </EditEventFormGrid>
            <UploadImage name="image" label="Image" />

            <EditEventFormButton>
              <Button
                variant="secondary"
                type="button"
                label="Save Changes"
                handleClick={() => setToggleModal(false)}
              />
            </EditEventFormButton>
          </EditEventForm>
        </StyledEditEvent>
      </Modal>
    </>
  );
};

export default EditEventModal;
