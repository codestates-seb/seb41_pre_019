import axios from "axios";
import { Container, MainBar, QuestionBody, SideBar } from "./style";
import  QuestionHeader  from "../../../components/QuestionHeader/index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import WriteAnswer from "../../../components/AnswerLayout/WriteAnswer/index"


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
    testdata && (
    <Container>
      <QuestionHeader testdata={testdata} />
      <QuestionBody>
        <MainBar>
            <WriteAnswer answers={testdata.answers} questionId={id} />
        </MainBar>
        <SideBar>{/* <SideBarWidget /> */}</SideBar>
      </QuestionBody>
    </Container>
    )
  );
}

export default QuestionContent;
