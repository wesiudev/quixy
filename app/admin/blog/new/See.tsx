"use state";
import { EditorState } from "draft-js";
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { stateToHTML } from "draft-js-export-html";
export default function See() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const html = stateToHTML(editorState.getCurrentContent());
  return (
    <div className="myEditor text-white">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <div
        className="output-class"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
