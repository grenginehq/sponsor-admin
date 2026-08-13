import { Modal } from "../../../components/Modal";
import { Button } from "../../../components/Button";
import {
  EditCategoryForm,
  EditCategoryFormButton,
  EditCategoryHeader,
  EditCategoryHeading,
  StyledEditCategory,
} from "./styles";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { Icon } from "../../../components/Icon";

interface EditCategoryModalProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditCategoryModal = ({ toggleModal, setToggleModal }: EditCategoryModalProps) => {
  const { handleSubmit, control } = useForm();

  return (
    <>
      <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
        <StyledEditCategory>
          <EditCategoryHeader>
            <EditCategoryHeading>Edit Sponsor Category</EditCategoryHeading>
            <button type="button" onClick={() => setToggleModal(false)}>
              <Icon icon="close" />
            </button>
          </EditCategoryHeader>

          <EditCategoryForm>
            <Input
              variant="filled"
              type="text"
              control={control}
              name="name"
              label="Name"
            />            
            <EditCategoryFormButton>
              <Button
                variant="secondary"
                type="button"
                label="Save Changes"
                handleClick={() => setToggleModal(false)}
              />
            </EditCategoryFormButton>
          </EditCategoryForm>
        </StyledEditCategory>
      </Modal>
    </>
  );
};

export default EditCategoryModal;
