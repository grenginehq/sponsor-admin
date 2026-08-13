import styled from "@emotion/styled";
import { black, black02, InstrumentSans } from "../../styles/abstracts/colors";

export const StyledCategories = styled.div`
  display: grid;
  grid-template-columns: 232px 1fr;
  height: 100vh;
  overflow: hidden;
`;

export const CategoriesMainContent = styled.div`
  display: flex;
  padding: 24px 16px 48px 16px;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  overflow: auto;
  width: 100%;
`;

export const CategoriesHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const CategoriesHeading = styled.h3`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

export const CategoriesDescription = styled.p`
  color: ${black02};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const CategoriesButton = styled.div`
  display: flex;
  padding: 20px 0 19px 0;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
`;

export const CategoriesPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 132px;
`;
