import { usePagination, ELLIPSIS } from "../../hooks/usePagination";
import type { PaginationHookProps } from "../../hooks/usePagination";
import {
  Ellipsis,
  PaginationContainer,
  PaginationItem,
  StyledPagination,
} from "./styles";

export interface PaginationProps extends PaginationHookProps {
  totalCount: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const DEFAULT_PAGE_SIZE = 5;

export function Pagination({
  currentPage,
  totalCount,
  pageSize = DEFAULT_PAGE_SIZE,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1,
  className = "",
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / pageSize);

  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount,
    boundaryCount,
  });

  return (
    <PaginationContainer>
      <StyledPagination>
        {paginationRange.map((pageItem, index) => {
          if (pageItem === ELLIPSIS) {
            return (
              <Ellipsis key={`ellipsis-${index}`} aria-hidden="true">
                &#8230;
              </Ellipsis>
            );
          }

          const pageNumber = pageItem as number;
          const isCurrent = pageNumber === currentPage;

          return (
            <li key={pageNumber}>
              <PaginationItem
                type="button"
                style={{
                  backgroundColor: isCurrent
                    ? "rgba(205, 205, 205, 0.40)"
                    : "transparent",
                }}
                onClick={() => onPageChange(pageNumber)}
                aria-current={isCurrent ? "page" : undefined}
                aria-label={`Go to page ${pageNumber}`}
              >
                {pageNumber}
              </PaginationItem>
            </li>
          );
        })}
      </StyledPagination>
    </PaginationContainer>
  );
}
