import { Icon } from "../Icon";
import {
  SponsorCategoryCardButtons,
  SponsorCategoryCardName,
  StyledSponsorCategoryCard,
} from "./styles";

interface SponsorCategoryCardProps {
  category: string;
}
const SponsorCategoryCard = ({ category }: SponsorCategoryCardProps) => {
  return (
    <StyledSponsorCategoryCard>
      <SponsorCategoryCardName>{category}</SponsorCategoryCardName>
      <SponsorCategoryCardButtons>
        <Icon icon="edit" />
        <Icon icon="delete" />
      </SponsorCategoryCardButtons>
    </StyledSponsorCategoryCard>
  );
};

export default SponsorCategoryCard;
