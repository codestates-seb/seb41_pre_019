import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';



function EditorBox() {
  return (<div style={{width : "790px"}}>
    <Editor
    
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="400px"
      initialEditType="wysiwyg"
      useCommandShortcut={false}
    />
    </div>
  );
}

export default EditorBox;
