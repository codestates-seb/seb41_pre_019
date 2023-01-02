import Pagination from "react-js-pagination";
import styled from "styled-components";

function PaginationBar({ page, totalElements, handlePageChange, totalPages }) {
  return (
    <Container>
      <Pagination
        activePage={page} //현재 페이지
        itemsCountPerPage={1} //한 페이지당 보여줄 리스트 아이템의 개수
        totalItemsCount={totalElements} //총 아이템의 개수
        pageRangeDisplayed={totalPages < 5 ? totalPages : 5} //Paginator 내에서 보여줄 페이지의 범위
        onChange={handlePageChange} //페이지가 바뀔 때 핸들링해줄 함수
        prevPageText={"Prev"} //"이전"을 나타낼 텍스트 (prev, <, ...)
        nextPageText={"Next"} //"다음"을 나타낼 텍스트 (next, >, ...)
        hideFirstLastPages={true}
      />
    </Container>
  );
}

export const Container = styled.div`
  .pagination {
    display: flex;
    justify-content: baseline;
    margin-top: 20px 0;
    padding: 24px 16px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 25px;
    border: 1px solid #e6e7e9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    border-radius: 3px;
  }
  ul.pagination li a {
    text-decoration: none;
    color: grey;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #f48224;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;

export default PaginationBar;
