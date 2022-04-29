import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useGetAllCategories } from "../../services/query/category";
import CustomSelect from "../custom-select";
import { IOptions } from "../../types";
import {
  categorySelector,
  searchTermSelector,
  useStore,
} from "../../zust/store";
import { MdSearch } from "react-icons/md";

const FilterSection = () => {
  const selectCategory = useStore(categorySelector);
  const setSearchTerm = useStore(searchTermSelector);
  const searchTerm = useStore((state) => state.searchTerm);
  const { data: categories, isLoading: isCategoryLoading } =
    useGetAllCategories();
  const categoryOptions = categories?.map((el: string) => ({
    label: el,
    value: el,
  }));
  const handleCategoryChange = (options: IOptions) => {
    if (options) {
      selectCategory(options.value);
    } else {
      selectCategory("");
    }
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems="center"
      width={"100%"}
      height="60px"
      bgColor={"gray.200"}
      gap={10}
    >
      <Text>Filter By: </Text>
      <Box width={"20%"}>
        <CustomSelect
          onChange={handleCategoryChange}
          placeholder="Select category"
          isLoading={isCategoryLoading}
          options={categoryOptions}
        />
      </Box>
      <Box width={"20%"}>
        <InputGroup>
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bgColor={"white"}
            outline="none"
            borderColor={"white"}
            placeholder="Search for product"
          />
          <InputRightElement children={<MdSearch />} />
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default FilterSection;
