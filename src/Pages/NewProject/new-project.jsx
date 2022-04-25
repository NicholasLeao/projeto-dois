import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import styles from "../../Styles/markdown.module.css";

export function NewProject() {
  // STATES
  const [isPreview, SetIsPreview] = useState(false);
  const [editorState, setEditorState] = useState("");

  // EVENT HANDLERS
  const handlePreviewClick = () => SetIsPreview((s) => !s);
  const handleTextareaChange = (e) => setEditorState(e.target.value);

  // STYLES
  const markdownBg = `${isPreview ? "#ebba3e" : "#171714"}`;
  const previewBg = `${!isPreview ? "#ebba3e" : "#171714"}`;
  const markdownColor = `${!isPreview ? "#ebba3e" : "#171714"}`;
  const previewColor = `${isPreview ? "#ebba3e" : "#171714"}`;

  // ===== JSX ========================================
  return (
    <S_Div>
      <S_Hud>
        <h1>Editor</h1>
        <S_btnSpan>
          <S_btn
            onClick={handlePreviewClick}
            style={{
              color: markdownColor,
              backgroundColor: markdownBg,
              borderRight: "3px solid #ebba3e",
            }}
          >
            Markdown
          </S_btn>
          <S_btn
            onClick={handlePreviewClick}
            style={{ color: previewColor, backgroundColor: previewBg }}
          >
            Preview
          </S_btn>
        </S_btnSpan>
      </S_Hud>
      {isPreview ? (
        <S_textarea value={editorState} onChange={handleTextareaChange} />
      ) : (
        <ReactMarkdown className={styles.markdown}>{editorState}</ReactMarkdown>
      )}
    </S_Div>
  );
}

export default NewProject;

const S_Div = styled.div`
  padding: 20px 30px;
  width: 800px;
  height: auto;
  border: 3px solid #ebba3e;
  border-radius: 22px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const S_Hud = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const S_btnSpan = styled.span`
  background-color: #171714;
  border: 2px solid #ebba3e;
  border-radius: 15px;
  overflow: hidden;
`;
const S_btn = styled.button`
  padding: 5px 20px;
  color: #ebba3e;
  border: none;
  background-color: rgba(1, 1, 1, 0);
`;

const S_textarea = styled.textarea`
  resize: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #171714;
  width: 98%;
  height: 600px;
  padding: 10px;
`;
