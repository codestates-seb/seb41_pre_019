import styled from "styled-components";
import Question from "../Question";

const Container = styled.div`
  margin-bottom: 20px;
`;
//pages / AllQuetions에서 homeData 가져옴
const QuestionsList = ({ homeData }) => {
  console.log("QuestionsList", homeData);
  return (
    <Container>
      {homeData &&
        homeData.data.map((el) => <Question key={el.questionId} list={el} />)}
    </Container>
  );
};

export default QuestionsList;
