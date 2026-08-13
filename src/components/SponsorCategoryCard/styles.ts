import styled from "@emotion/styled";
import { black, secondary05 } from "../../styles/abstracts/colors";

export const StyledSponsorCategoryCard = styled.div`
  display: flex;
  padding: 16px;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: ${secondary05};
`;

export const SponsorCategoryCardName = styled.p`
  color: ${black};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SponsorCategoryCardButtons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
