import type { Category } from "../../types/category";
import { Icon } from "../Icon";
import {
  SponsorCategoryCardButtons,
  SponsorCategoryCardName,
  StyledSponsorCategoryCard,
} from "./styles";

interface SponsorCategoryCardProps {
  category: Category;
  handleOpenEdit: () => void;
  handleOpenDelete: () => void;
}
const SponsorCategoryCard = ({
  category,
  handleOpenEdit,
  handleOpenDelete,
}: SponsorCategoryCardProps) => {
  return (
    <StyledSponsorCategoryCard>
      <SponsorCategoryCardName>{category?.name}</SponsorCategoryCardName>
      <SponsorCategoryCardButtons>
        <button type="button" onClick={handleOpenEdit}>
          <Icon icon="edit" />
        </button>
        <button type="button" onClick={handleOpenDelete}>
          <Icon icon="delete" />
        </button>
      </SponsorCategoryCardButtons>
    </StyledSponsorCategoryCard>
  );
};

export default SponsorCategoryCard;
