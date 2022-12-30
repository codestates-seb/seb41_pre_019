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
const URL = "https://jsonplaceholder.typicode.com/users";

function TestUi() {
  let editorRef = useRef();

  const handlePostAnswer = () => {
    const markdownValue = editorRef.current.getInstance().getMarkdown();
    axios
      .post(
        URL,
        {
          contents: markdownValue,
        },
        {
          headers: {
            Authorization: localStorage.getItem("accesstoken"),
          },
        }
      )
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
