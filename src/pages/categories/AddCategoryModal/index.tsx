import { Modal } from "../../../components/Modal";
import { Button } from "../../../components/Button";
import {
  AddCategoryForm,
  AddCategoryFormButton,
  AddCategoryHeader,
  AddCategoryHeading,
  StyledAddCategory,
} from "./styles";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { Icon } from "../../../components/Icon";

interface AddCategoryModalProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCategoryModal = ({ toggleModal, setToggleModal }: AddCategoryModalProps) => {
  const { handleSubmit, control } = useForm();

  return (
    <>
      <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
        <StyledAddCategory>
          <AddCategoryHeader>
            <AddCategoryHeading>Add Sponsor Category</AddCategoryHeading>
            <button type="button" onClick={() => setToggleModal(false)}>
              <Icon icon="close" />
            </button>
          </AddCategoryHeader>

          <AddCategoryForm>
            <Input
              variant="filled"
              type="text"
              control={control}
              name="name"
              label="Name"
            />            
            <AddCategoryFormButton>
              <Button
                variant="secondary"
                type="button"
                label="Add Sponsor Category"
                handleClick={() => setToggleModal(false)}
              />
            </AddCategoryFormButton>
          </AddCategoryForm>
        </StyledAddCategory>
      </Modal>
    </>
  );
};

export default AddCategoryModal;
