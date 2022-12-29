import axios from "axios";
import { useEffect, useState } from "react";
import PaginationBar from "../../components/PaginationBar";
import {
  Container,
  HomeHead,
  Main,
  PaginationContainer,
  TopQuetionsTitle,
  Total,
} from "./style";
import QuestionsList from "../../components/Main/QuestionsList";
import AskQuetionsButton from "../../components/Button/AskQuestionButton";
import Search from "../../components/Layout/Search";
const URL = "http://localhost:3000";

const AllQuestions = () => {
  const [totalCount, setTotalCount] = useState(0); //질문 총 갯수렌더링
  const [homeData, setHomeData] = useState(null);

  const [totalElements, setTotalElements] = useState(0); //총 아이템의 개수
  const [page, setPage] = useState(1); //현재 페이지
  const [totalPages, setTotalPages] = useState(null);
  //Paginator 내에서 보여줄 페이지의 범위

  useEffect(() => {
    axios
      .get(" https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data); //[{..},{..}] 이런형태
        setHomeData(res.data);
        console.log(homeData);
        setTotalCount(res.data.id);
        setTotalPages(res.data.email);
        setTotalElements(res.data.address);
        window.scrollTo(0, 0);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [page]);

  const handlePageChange = (e) => {
    setPage(e);
    // console.log(e);
  };

  return (
    <Container>
      <Main>
        <div>
          <HomeHead>
            {/* <Search></Search> */}
            <TopQuetionsTitle>All Questions</TopQuetionsTitle>
            <AskQuetionsButton />
          </HomeHead>
        </div>

        <Total>
          <span>{totalCount} questions</span>
        </Total>
        <QuestionsList homeData={homeData}> </QuestionsList>
        <PaginationContainer>
          <PaginationBar
            page={page}
            totalElements={totalElements}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        </PaginationContainer>
      </Main>
    </Container>
  );
};

export default AllQuestions;
