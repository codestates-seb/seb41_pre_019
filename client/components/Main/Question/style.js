import styled from "styled-components";

export const QuBox = styled.div`
  padding: 15px;
  border-top: 1px solid #cccccc;
`;

export const QuList = styled.li`
  display: flex;
  margin: 7px;
`;

export const LeftSection = styled.section`
  width: 110px;
`;

export const CountBox = styled.div`
  font-size: 13px;
  text-align: right;
  margin: 0px 16px 4px 0px;
`;

export const VotesCount = styled.div`
  color: #0c0d0e;
`;
export const AnswerCount = styled.button`
  border: 1px solid #2e6f44;
  border-radius: 3px;
  background-color: white;
  padding: 2px;
  color: #2e6f44;
`;

export const ViewsCount = styled.div`
  color: #7b828a;
`;

export const RightSection = styled.section`
  width: 100%;
  font-size: 17px;
`;

export const TextSection = styled.section``;

export const QuestionTitle = styled.div`
  //link써서 글제목 누르면 질문글로
  text-decoration: none;
  color: #0074cc;
  font-weight: 400;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

export const QuestionText = styled.p`
  font-size: 13px;
  margin-top: 5px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const TagInFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 38px;
`;

export const TagBox = styled.div`
  width: 360px;
  height: 27px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: horizontal;
`;

// export const TagBtn = styled.button``;

export const InfoBox = styled.div`
  display: flex;
  column-gap: 6px;
`;

export const UserImg = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 3px;
`;

export const InfoName = styled.a`
  font-size: 12px;
  color: #0074cc;
  margin: 2px;
`;

export const LastName = styled.div`
  font-size: 12px;
  color: #6a737c;
`;
