import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { searchTagAction } from "../../../redux";

const Input = styled.input``;

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const onChangeValue = (e) => {
    setSearchValue(e.target.value);
    // console.log(e.target.value);
  };
  const handleEnter = (e) => {
    console.log(e);
    if (
      e.key === "Enter" &&
      searchValue.includes("[") &&
      searchValue.includes("]")
    ) {
    }
  };

  return (
    <Input
      type="search"
      placeholder="Search..."
      onChange={onChangeValue}
      onKeyPress={handleEnter}
    />
  );
}

export default Search;
