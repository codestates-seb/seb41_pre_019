import styled from "styled-components";
import Question from "../Question";

const Container = styled.div`
  margin-bottom: 20px;
`;
//pages / AllQuetions에서 homeData 가져옴
const QuestionsList = ({ homeData }) => {
  return (
    <Container>
      {homeData && homeData.map((el) => <Question key={el.id} list={el} />)}
    </Container>
  );
};

export default QuestionsList;
