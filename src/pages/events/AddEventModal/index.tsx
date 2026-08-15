import { Modal } from "../../../components/Modal";
import { Button } from "../../../components/Button";
import {
  AddEventForm,
  AddEventFormButton,
  AddEventFormGrid,
  AddEventHeader,
  AddEventHeading,
  StyledAddEvent,
} from "./styles";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import AsyncCategoryDropdown from "../../../components/AsyncCategoryDropdown";
import { TextArea } from "../../../components/TextArea";
import UploadImage from "../../../components/UploadImage";
import { Icon } from "../../../components/Icon";

interface AddEventModalProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddEventModal = ({ toggleModal, setToggleModal }: AddEventModalProps) => {
  const { control } = useForm();

  return (
    <>
      <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
        <StyledAddEvent>
          <AddEventHeader>
            <AddEventHeading>Add Sponsor Event</AddEventHeading>
            <button type="button" onClick={() => setToggleModal(false)}>
              <Icon icon="close" />
            </button>
          </AddEventHeader>

          <AddEventForm>
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
            <AddEventFormGrid>
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
            </AddEventFormGrid>
            <UploadImage name="image" label="Image" />

            <AddEventFormButton>
              <Button
                variant="secondary"
                type="button"
                label="Add Sponsor Event"
                handleClick={() => setToggleModal(false)}
              />
            </AddEventFormButton>
          </AddEventForm>
        </StyledAddEvent>
      </Modal>
    </>
  );
};

export default AddEventModal;
