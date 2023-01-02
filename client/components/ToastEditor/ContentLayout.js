// import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import { Viewer } from "@toast-ui/react-editor";
import Prism from "prismjs";

import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import "prismjs/themes/prism.css";

import ContentInfo from "../ContentLayout/ContentInfo/index";
import { Container, ContentBody } from "../ContentLayout/style";

function ContentEditor({ testdata, questionId, answerId }) {
  let writerType;
  if (answerId) {
    writerType = "answerer";
  } else {
    writerType = "questioner";
  }
  return (
    testdata && (
      <Container>
        {/* <VoteLayout>
          <VoteCell
            questionId={questionId}
            score={testdata.score}
            answerId={answerId}
          />
        </VoteLayout> */}
        <ContentBody>
          <Viewer
            initialValue={testdata.body ? testdata.body : testdata.contents}
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          />
          <ContentInfo
            time={testdata.username}
            user={testdata.name}
            writerType={writerType}
            questionId={questionId}
            answerId={answerId}
          />
        </ContentBody>
      </Container>
    )
  );
}

export default ContentEditor;
