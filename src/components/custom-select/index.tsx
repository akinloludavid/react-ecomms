import styled from "@emotion/styled";
import React from "react";
import Select from "react-select";
import { IOptions } from "../../types";

interface ICustomSelect {
  options: any[];
  onChange: (options: IOptions) => void;
  placeholder: string;
  value?: any;
  isLoading?: boolean;
}
const CustomSelect = ({
  options = [],
  onChange,
  placeholder,
  isLoading,

  value,
  ...props
}: ICustomSelect) => {
  return (
    <CustomSelect.Wrapper>
      <Select
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        isClearable={true}
        isSearchable
        isLoading={isLoading}
        value={value}
        {...props}
      />
    </CustomSelect.Wrapper>
  );
};

CustomSelect.Wrapper = styled.div`
  width: 100%;
`;

export default CustomSelect;
