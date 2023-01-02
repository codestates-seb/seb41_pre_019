import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { askBodyAction } from "../../redux";


const ToastEditor = ({ isEdit = false, value }) => {
  const dispatch = useDispatch();
  const editorRef = useRef();

  const onChangeBody = () => {
    dispatch(askBodyAction(editorRef.current?.getInstance().getMarkdown()));
  };




  return (

    <Editor
      useCommandShortcut={true}

      initialValue={isEdit ? value : " "}
 
      ref={editorRef}
      previewStyle="vertical"
      height="300px"
      initialEditType="wysiwyg"
      onChange={onChangeBody}
      autofocus={false}
    />

  );

  }
export default ToastEditor;
