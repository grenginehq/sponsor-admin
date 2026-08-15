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
import type { Category } from "../../../types/category";
import { useEffect } from "react";

interface EditCategoryModalProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  category: Category;
}

const EditCategoryModal = ({
  toggleModal,
  setToggleModal,
  category,
}: EditCategoryModalProps) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: category?.name,
    },
  });

  useEffect(() => {
    reset({
      name: category?.name,
    });
  }, [category]);

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
