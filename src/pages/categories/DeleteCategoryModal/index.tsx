import { Modal } from "../../../components/Modal";
import { Button } from "../../../components/Button";
import {
  DeleteCategoryContent,
  DeleteCategoryContentButton,
  DeleteCategoryContentSubText,
  DeleteCategoryContentText,
  DeleteCategoryHeader,
  DeleteCategoryHeading,
  StyledDeleteCategory,
} from "./styles";
import { Icon } from "../../../components/Icon";
import type { Category } from "../../../types/category";

interface DeleteCategoryModalProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  category: Category | undefined;
}

const DeleteCategoryModal = ({
  toggleModal,
  setToggleModal,
  category,
}: DeleteCategoryModalProps) => {
  return (
    <>
      <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
        <StyledDeleteCategory>
          <DeleteCategoryHeader>
            <DeleteCategoryHeading>
              Delete Sponsor Category
            </DeleteCategoryHeading>
            <button type="button" onClick={() => setToggleModal(false)}>
              <Icon icon="close" />
            </button>
          </DeleteCategoryHeader>

          <DeleteCategoryContent>
            <DeleteCategoryContentText>
              Are you sure you want to this category{" "}
              <DeleteCategoryContentSubText>
                {category?.name}
              </DeleteCategoryContentSubText>
              . This action cannot be undone.
            </DeleteCategoryContentText>
            <DeleteCategoryContentButton>
              <Button
                variant="danger"
                type="button"
                label="Delete Sponsor Category"
                handleClick={() => setToggleModal(false)}
              />
            </DeleteCategoryContentButton>
          </DeleteCategoryContent>
        </StyledDeleteCategory>
      </Modal>
    </>
  );
};

export default DeleteCategoryModal;
