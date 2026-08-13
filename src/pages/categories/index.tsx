import { useMemo, useState } from "react";
import { Button } from "../../components/Button";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import SponsorCategoryCard from "../../components/SponsorCategoryCard";
import { categories } from "../../constants";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
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
  const [toggleCategoryModal, setToggleCategoryModal] = useState(false);
  const [toggleEditCategoryModal, setToggleEditCategoryModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const paginatedCategories = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return categories.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [categories, currentPage, ITEMS_PER_PAGE]);

  const handleOpenEdit = () => {
    setToggleEditCategoryModal(!toggleEditCategoryModal)
  }

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
            handleClick={() => setToggleCategoryModal(!toggleCategoryModal)}
          />
        </CategoriesButton>
        <CategoriesGrid>
          {paginatedCategories?.map((category, index) => {
            return (
              <SponsorCategoryCard
                key={`Category_${index + 1}`}
                category={category}
                handleOpenEdit={handleOpenEdit}

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
      <AddCategoryModal
        toggleModal={toggleCategoryModal}
        setToggleModal={setToggleCategoryModal}
      />
      <EditCategoryModal
        toggleModal={toggleEditCategoryModal}
        setToggleModal={setToggleEditCategoryModal} />
    </StyledCategories>
  );
}
