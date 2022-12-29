import AskQuestionButton from "../Button/AskQuestionButton";
import toDateFormatOfUS from "../../util/toDateFormatOfUS";
import {
  Container,
  Figure,
  FigureContent,
  FigureName,
  FiguresContainer,
  Title,
  TitleContainer,
} from "./style";

function QuestionHeader({ testdata }) {
  console.log(testdata);
  // let asked = toDateFormatOfUS(new Date(testdata.id));
  // let modified = toDateFormatOfUS(new Date(testdata.id));

  return (
    testdata && (
    <Container>
      <TitleContainer>
        <Title>{testdata.name}</Title>
        <AskQuestionButton />
      </TitleContainer>
      <FiguresContainer>
        <Figure>
          <FigureName>Asked</FigureName>
          {/* <FigureContent>{asked}</FigureContent> */}
        </Figure>
        <Figure>
          <FigureName>Modified</FigureName>
          {/* <FigureContent>{modified}</FigureContent> */}
        </Figure>
        <Figure>
          <FigureName>Viewed</FigureName>
          {/* <FigureContent>{`${testdata.id} times`}</FigureContent> */}
        </Figure>
      </FiguresContainer>
    </Container>
    )
  );
}

export default QuestionHeader;
