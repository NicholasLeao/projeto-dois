import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../../Styles/markdown.module.css";

import axios from "axios";

export function NewProject() {
  const navigate = useNavigate();
  const { id } = useParams();
  // STATES
  const [senhaState, setSenha] = useState("");
  const [isPreview, SetIsPreview] = useState(false);
  const [projectState, setProjectState] = useState({
    titulo: "",
    corpo: "",
    senha: "",
    id: "",
  });
  const [submitProjectState, setSubmitProjectState] = useState({});

  // EVENT HANDLERS
  const handlePreviewClick = (e) => {
    e.preventDefault();
    SetIsPreview((s) => !s);
  };

  const handleChangeForm = (e) => {
    setProjectState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleClickConfirmar = (e) => {
    e.preventDefault();
    if (projectState.senha === senhaState) {
      setSubmitProjectState(projectState);
    }
  };

  // SIDE EFFECT
  const postData = useCallback(async () => {
    try {
      await axios.put(
        `https://ironrest.herokuapp.com/projetodoiswillnick/${id}`,
        submitProjectState
      );
    } catch (err) {}
  });
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://ironrest.herokuapp.com/projetodoiswillnick/${id}`
      );
      setProjectState({
        titulo: data.titulo,
        corpo: data.corpo,
      });
      setSenha(data.senha);
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!submitProjectState.corpo) return;
    postData();
    navigate(`/`);
  }, [submitProjectState]);
  // STYLES
  const pCol = "#ebba3e";
  const sCol = "#171714";
  const markdownBg = `${isPreview ? pCol : sCol}`;
  const previewBg = `${!isPreview ? pCol : sCol}`;
  const markdownColor = `${!isPreview ? pCol : sCol}`;
  const previewColor = `${isPreview ? pCol : sCol}`;

  // ===== JSX ========================================

  return (
    <form>
      <S_Div>
        <S_tituloDiv>
          <h1>Título</h1>
          <S_input
            onChange={handleChangeForm}
            name="titulo"
            type="text"
            placeholder="Insira o nome aqui"
            value={projectState.titulo}
          ></S_input>
        </S_tituloDiv>
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
          <S_textarea
            onChange={handleChangeForm}
            name="corpo"
            value={projectState.corpo}
          />
        ) : (
          <ReactMarkdown className={styles.markdown}>
            {projectState.corpo}
          </ReactMarkdown>
        )}
        <S_Hud>
          <S_input
            onChange={handleChangeForm}
            name="senha"
            type="password"
            placeholder="Senha"
          ></S_input>
          <S_SubmitBtn onClick={handleClickConfirmar}>CONFIRMAR</S_SubmitBtn>
        </S_Hud>
      </S_Div>
    </form>
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
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
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

const S_SubmitBtn = styled.button`
  padding: 5px 20px;
  color: #ebba3e;
  border: 2px solid #ebba3e;
  background-color: rgba(1, 1, 1, 0);
  height: 100%;
  margin-left: 25px;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 8px;
`;

const S_textarea = styled.textarea`
  resize: none;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 0) 70%,
    rgba(23, 20, 23, 0.723) 100%
  );
  width: 98%;
  height: 600px;
  padding: 10px;
`;

const S_input = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #171714;
  max-width: inherit;
  padding: 10px 0 10px 10px;
  margin-top: 10px;
`;

const S_tituloDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: left;
`;
