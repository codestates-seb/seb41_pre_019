import axios from "axios";
import { Container, MainBar, QuestionBody, SideBar } from "./style";
import QuestionHeader from "../../../components/QuestionHeader/index"; //여기 바꿈
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import Editor from "../../../components/ToastEditor/index";
import WriteAnswer from "../../../components/AnswerLayout/WriteAnswer";
import AnswerLayout from "../../../components/AnswerLayout/index";
const URL = "http://15.164.124.113:8080";
//.get("https://jsonplaceholder.typicode.com/users")

function QuestionContent() {
  // const dispatch = useDispatch();
  let { id } = useParams;
  const [testdata, setTestdata] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/questions/1?page=1`, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((res) => {
        console.log("QuestionContent", res.data);
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
            <WriteAnswer />
            {testdata.username && <WriteAnswer />}
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
