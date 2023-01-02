import { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import axios from "axios";
import PostAnswerButton from "../Button/PostAnswerButton/index";
import {
  ButtonContainer,
  Container,
  Header,
  NeedLogin,
} from "../../components/AnswerLayout/WriteAnswer/style";
const URL = "http://15.164.124.113:8080";

function TestUi() {
  // const { id } = useParams();
  let editorRef = useRef();

  const handlePostAnswer = () => {
    const markdownValue = editorRef.current.getInstance().getMarkdown();
    axios
      .post(`${URL}/questions?userId=1`, {
        title: "테스트 용도",
        content: "테스트 내용",
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          location.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Header>Your Answer</Header>

      <Editor
        ref={editorRef}
        height="400px"
        value=""
        initialEditType="WYSIWYG"
        useCommandShortcut={true}
        autofocus={false}
      ></Editor>

      <ButtonContainer>
        <PostAnswerButton handlePostAnswer={handlePostAnswer} />
      </ButtonContainer>
    </Container>
  );
}

export default TestUi;
