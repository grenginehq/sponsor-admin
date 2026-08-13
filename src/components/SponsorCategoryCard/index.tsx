import { Icon } from "../Icon";
import {
  SponsorCategoryCardButtons,
  SponsorCategoryCardName,
  StyledSponsorCategoryCard,
} from "./styles";

interface SponsorCategoryCardProps {
  category: string;
  handleOpenEdit: () => void;
}
const SponsorCategoryCard = ({ category, handleOpenEdit }: SponsorCategoryCardProps) => {
  return (
    <StyledSponsorCategoryCard>
      <SponsorCategoryCardName>{category}</SponsorCategoryCardName>
      <SponsorCategoryCardButtons>
        <button type="button" onClick={handleOpenEdit}><Icon icon="edit" /></button>
        <Icon icon="delete" />
      </SponsorCategoryCardButtons>
    </StyledSponsorCategoryCard>
  );
};

export default SponsorCategoryCard;
