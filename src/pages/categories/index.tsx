import { useMemo, useState } from "react";
import { Button } from "../../components/Button";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import SponsorCategoryCard from "../../components/SponsorCategoryCard";
import { categories } from "../../constants";
import {
  CategoriesButton,
  CategoriesDescription,
  CategoriesGrid,
  CategoriesHeader,
  CategoriesHeading,
  CategoriesMainContent,
  CategoriesPagination,
  StyledCategories,
} from "./styles";

const ITEMS_PER_PAGE = 5;
export function Categories() {
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedCategories = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return categories.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [categories, currentPage, ITEMS_PER_PAGE]);

  return (
    <StyledCategories>
      <Sidebar />
      <CategoriesMainContent>
        <CategoriesHeader>
          <CategoriesHeading>Sponsor Categories</CategoriesHeading>
          <CategoriesDescription>
            View and manage all sponsor categories.
          </CategoriesDescription>
        </CategoriesHeader>
        <CategoriesButton>
          <Button
            type="button"
            variant="primary"
            label="Add Sponsor Category"
          />
        </CategoriesButton>
        <CategoriesGrid>
          {paginatedCategories?.map((category, index) => {
            return (
              <SponsorCategoryCard
                key={`event_${index + 1}`}
                category={category}
              />
            );
          })}
        </CategoriesGrid>
        <CategoriesPagination>
          <Pagination
            currentPage={currentPage}
            totalCount={categories.length}
            siblingCount={1}
            boundaryCount={1}
            pageSize={ITEMS_PER_PAGE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </CategoriesPagination>
      </CategoriesMainContent>
    </StyledCategories>
  );
}
