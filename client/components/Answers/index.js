// import ContentLayout from "../../ContentLayout";
import { Answer, Container } from "./style";
import ContentLayout from "../ContentLayout";

function Answers({ questionId, answers }) {
  console.log("Answers", questionId, answers);
  return (
    <Container>
      {answers &&
        answers.map((answer) => (
          <Answer key={answer.id}>
            <ContentLayout
              key={answer.id}
              testdata={answer}
              questionId={questionId}
              answerId={answer.id}
            />
          </Answer>
        ))}
    </Container>
  );
}

export default Answers;
