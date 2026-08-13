import styled from "@emotion/styled";

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 48px;
`;

export const StyledPagination = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 8px;
  align-items: center;
`;

export const PaginationItem = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8;
  color: var(--black);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Ellipsis = styled.li`
  color: var(--black);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
