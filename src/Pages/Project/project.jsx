import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import styles from "../../Styles/markdown.module.css";
import React from "react";

export function Project() {
  const navigate = useNavigate();
  const { id } = useParams();
  // STATES
  const [cardData, SetCardData] = useState([]);
  const [passwordState, setPasswordState] = useState("");

  // HANDLERS
  const handlePasswordChange = (e) => {
    setPasswordState(e.target.value);
  };
  const handleEditBtn = (e) => {
    e.preventDefault();
    if (cardData.senha === passwordState) {
      navigate(`/edit-project/${cardData._id}`);
    }
  };
  const handleExcluir = (e) => {
    if (cardData.senha === passwordState) {
      deletePost();
      navigate(`/`);
    }
  };

  // SIDE EFFECTS
  const deletePost = useCallback(async () => {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/projetodoiswillnick/${id}`
      );
    } catch (err) {}
  }, []);
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://ironrest.herokuapp.com/projetodoiswillnick/${id}`
      );
      SetCardData(data);
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  // ==== JSX ========================================
  return (
    <S_Div>
      <ReactMarkdown className={styles.markdown + " " + styles.project}>
        {cardData.corpo}
      </ReactMarkdown>
      <S_hud>
        <input
          name="password"
          onChange={handlePasswordChange}
          value={passwordState}
          type="password"
          placeholder="INSIRA SUA SENHA"
        ></input>
        <button onClick={handleEditBtn}>EDITAR</button>
        <button onClick={handleExcluir}>EXCLUIR</button>
      </S_hud>
    </S_Div>
  );
}

export default Project;

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

const S_hud = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  & button {
    background-color: transparent;
    border: 2px solid #ebba3e;
    border-radius: 15px;
    padding: 0px 20px;
    height: 30px;
    color: #ebba3e;
    margin-top: 20px;
  }

  & input {
    background-color: transparent;
    border: 2px solid #ebba3e;
    border-radius: 15px;
    padding: 0px 20px;
    height: 30px;
    margin-top: 20px;
    
    ::placeholder {
      color:#ebba3e ;
    }
  }
`;
