import React, { useEffect, useMemo } from "react";
import { useController } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";
import { AsyncPaginate } from "react-select-async-paginate";
import type { LoadOptions } from "react-select-async-paginate";
import {
  AsyncCategoryDropdownLabel,
  ErrorMessage,
  StyledAsyncCategoryDropdown,
} from "./styles";
import { secondary01, secondary12 } from "../../styles/abstracts/colors";

interface CategoryOption {
  label: string;
  value: string;
}

interface Category {
  name: string;
}

interface AsyncCategoryDropdownProps<T extends FieldValues = FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  defaultValue?: {
    label: string;
    value: string;
  };
}

const loadOptions: LoadOptions<CategoryOption, any, { page: number }> = async (
  search,
  loadedOptions,
  additional,
) => {
  const page = additional?.page ?? 0;
  // const data = await fetchProjects(search, page)
  const data = [];
  const categories = data || [];

  // Map the nested structure to extract the actual project data
  const options: CategoryOption[] = categories
    ?.filter((category) =>
      category.name?.toLowerCase().includes(search?.toLowerCase()),
    )
    .map((item) => {
      // The API returns items with structure: { project: { project: { ... }, videos, moments, ... } }
      return {
        label: item.name || "Unnamed Catgeory",
        value: String(item.id),
      };
    });

  return {
    options,
  };
};

const AsyncCategoryDropdown = <T extends FieldValues = FieldValues>({
  name,
  label,
  control,
  defaultValue,
}: AsyncCategoryDropdownProps<T>) => {
  const { field, fieldState } = useController({ control, name });
  const { error } = fieldState;
  const [selectedOption, setSelectedOption] =
    React.useState<CategoryOption | null>(null);

  // Only minimal event handling to prevent modal close on clear
  const handleChange = (option: CategoryOption | null) => {
    if (option === null && selectedOption !== null) {
      setSelectedOption(null);
      field.onChange("");
    } else {
      setSelectedOption(option);
      field.onChange(option?.value ?? "");
    }
  };

  // Ensure value is always defined to prevent controlled/uncontrolled warning
  const safeValue = useMemo(() => selectedOption || null, [selectedOption]);

  useEffect(() => {
    if (!selectedOption && defaultValue) {
      setSelectedOption(defaultValue);
      field.onChange(defaultValue.value);
    }
  }, [defaultValue, field, selectedOption]);

  return (
    <StyledAsyncCategoryDropdown>
      <AsyncCategoryDropdownLabel>{label}</AsyncCategoryDropdownLabel>
      <AsyncPaginate
        value={safeValue}
        loadOptions={loadOptions}
        onChange={handleChange}
        additional={{ page: 0 }}
        isClearable
        menuPortalTarget={
          typeof window !== "undefined" ? document.body : undefined
        }
        placeholder=""
        menuPosition="fixed"
        styles={{
          control: (base, state) => ({
            ...base,
            minHeight: 52,
            height: 52,
            borderRadius: 8,
            border: `1px solid ${secondary01}`,
            background: `${secondary12}`,
            cursor: "pointer",
            outline: 0,
          }),
          menuPortal: (base) => ({ ...base, zIndex: 11000 }),
        }}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledAsyncCategoryDropdown>
  );
};

export default AsyncCategoryDropdown;
