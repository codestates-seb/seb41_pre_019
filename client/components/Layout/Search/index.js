import { useEffect, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import SearchModal from "../../SearchModal";
import { useDispatch } from "react-redux";
import { searchTagAction } from "../../../redux";
import { Container, Input, SearchContainer } from "./style";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  //const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
    //input창을 클릭할때 마다 isOpen이
    //false => true or  true => false 로 바뀜
  };

  const modalRef = useRef();
  //html요소 돔(input)을 직접 제어하기 위해 쓰는 hook

  const clickModalOutside = (event) => {
    // console.log(event.target);
    if (
      isOpen &&
      (!modalRef.current || !modalRef.current.contains(event.target))
      //!modalRef.current : input 요소가 아닐때
      //Node.contains():주어진 인자가 node 의 자손인지, 아닌지에 대한 Boolean 값을 리턴
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", clickModalOutside);
    //mousedown: 마우스 버튼을 눌렀을 때 발생

    return () => {
      window.removeEventListener("mousedown", clickModalOutside);
    };
  });

  const onChangeValue = (e) => {
    setSearchValue(e.target.value);
    // console.log(e.target.value);
    //imput안에 입력한 내용
  };
  const handleEnter = (e) => {
    console.log(e);
    if (
      e.key === "Enter" &&
      searchValue.includes("[") &&
      searchValue.includes("]")
    ) {
      //디스패치 써야함

      setIsOpen(false);
      //여기서 tag검색 페이지로 가야함
    } else if (
      e.key === "Enter" &&
      !searchValue.includes("[") &&
      searchValue.length > 0
    ) {
      //디스패치 써야함

      //여기서 검색창으로 가야함
      setIsOpen(false);
    } else if (searchValue.length === 0) {
      return;
    }
  };

  return (
    <Container>
      <SearchContainer>
        <GoSearch color="#838C95" />
        <Input
          type="search"
          placeholder="Search..."
          onChange={onChangeValue}
          onKeyPress={handleEnter}
          onClick={handleOnClick}
          ref={modalRef}
        />
      </SearchContainer>
      {isOpen ? <SearchModal /> : null}

      {/* isOpen(검색창 클릭할때 true가 되고 모달창이 열림) */}
    </Container>
  );
}

export default Search;
