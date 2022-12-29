import axios from "axios";
import { Container, MainBar, QuestionBody, SideBar } from "./style";
import { QuestionHeader } from "../../../components/QuestionHeader/index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function QuestionContent() {
  // const dispatch = useDispatch();
  let { id } = useParams;

  const [testdata, setTestdata] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data); //[{..},{..}] 이런형태
        setTestdata(res.data);
        console.log(setTestdata);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <Container>
      <QuestionHeader testdata={testdata} />
      <QuestionBody>
        <MainBar>
          {/* <ContentLayout questionId={id} testdata={testdata} />
          {testdata.answers && (
            <AnswerLayout answers={testdata.email} questionId={id} />
          )} */}
        </MainBar>
        <SideBar>{/* <SideBarWidget /> */}</SideBar>
      </QuestionBody>
    </Container>
  );
}

export default QuestionContent;
