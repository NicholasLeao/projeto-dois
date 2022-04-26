import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import styles from "../../Styles/markdown.module.css";

export function Project() {
  const { id } = useParams();
  console.log(id);
  // STATES
  const [cardData, SetCardData] = useState([]);

  // SIDE EFFECTS
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
      <ReactMarkdown className={styles.markdown +" "+styles.project}>
        {cardData.corpo}
      </ReactMarkdown>
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
