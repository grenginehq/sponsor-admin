import styled from "@emotion/styled";
import { black } from "../../styles/abstracts/colors";

export const StyledSponsorCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  height: auto;
`;
export const SponsorCardImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  border-radius: 8px;
  border: 1px solid transparent;

  & img {
    object-fit: cover;
    border-radius: 8px;
    object-position: top;
    width: 100%;
    height: 100%;
  }
`;

export const SponsorCardTitle = styled.h4`
  color: ${black};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SponsorCardDate = styled.p`
  color: ${black};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SponsorCardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
