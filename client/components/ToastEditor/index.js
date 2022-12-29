import Prism from "prismjs";
// import { useRef } from "react";
// import "prismjs/themes/prism.css";

// import "@toast-ui/editor/dist/toastui-editor.css";
// import { Editor } from "@toast-ui/react-editor";

// import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
// import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
// import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
// import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
// import { useDispatch } from "react-redux";
// import "tui-color-picker/dist/tui-color-picker.css";
// import { askBodyAction } from "../../redux";

const ToastEditor = ({ isEdit = false, value }) => {
  const dispatch = useDispatch();
  const editorRef = useRef();

  // const onChangeBody = () => {
  //   dispatch(askBodyAction(editorRef.current?.getInstance().getMarkdown()));
  // };

  return <div>editor</div>;
};

export default ToastEditor;
