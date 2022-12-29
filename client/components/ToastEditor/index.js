import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';



function EditorBox() {
  return (
    <Editor
    
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="400px"
      initialEditType="wysiwyg"
      useCommandShortcut={false}
    />
  );
}

export default EditorBox;
