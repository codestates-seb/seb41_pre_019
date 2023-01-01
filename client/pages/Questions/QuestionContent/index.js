import axios from "axios";
import { Container, MainBar, QuestionBody, SideBar } from "./style";
import QuestionHeader from "../../../components/QuestionHeader/index"; //여기 바꿈
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import Editor from "../../../components/ToastEditor/index";
import WriteAnswer from "../../../components/AnswerLayout/WriteAnswer";
import AnswerLayout from "../../../components/AnswerLayout/index";

function QuestionContent() {
  // const dispatch = useDispatch();
  let { id } = useParams;

  const [testdata, setTestdata] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res.data); //[{..},{..}] 이런형태
        setTestdata(res.data);
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
            {/* <WriteAnswer />
            {testdata.id && <WriteAnswer />} */}
            {testdata.username && (
              <AnswerLayout answers={testdata.username} questionId={id} />
            )}
          </MainBar>
          <SideBar></SideBar>
        </QuestionBody>
      </Container>
    )
  );
}

export default QuestionContent;
