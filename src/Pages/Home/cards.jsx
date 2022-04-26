import styled from "styled-components";
import CardGrande from "./card-g";
import CardMedio from "./card-m";
import CardPequeno from "./card-p";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
export function Cards() {
  // STATES
  const [cardData, SetCardData] = useState([]);

  // SIDE EFFECTS
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://ironrest.herokuapp.com/projetodoiswillnick"
      );
      // for (let i = 0; i < data.length; i++) {
      //   const rng = Math.floor(Math.random() * data.length);
      //   let mem = data[i];
      //   data[i] = data[rng];
      //   data[rng] = mem;
      // }
      SetCardData(data);
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SDiv>
      <S_Row>
        {cardData.map((data, idx) => {
          if (idx <= 1) {
            return <CardGrande data={data} key={"g" + idx} />;
          }
        })}
      </S_Row>

      <S_Row>
        {cardData.map((data, idx) => {
          if (idx >= 3 && idx <= 6) {
            return <CardMedio data={data} key={"m" + idx} />;
          }
        })}
      </S_Row>

      <S_RowLeft>
        {cardData.map((data, idx) => {
          if (idx >= 8 && idx <= 11) {
            return <CardPequeno data={data} key={"s" + idx} />;
          }
        })}
      </S_RowLeft>
    </SDiv>
  );
}

export default Cards;

// ========== STYLED COMPONENTS ==============================
const SDiv = styled.div`
  width: 800px;
  border: 3px solid #ebba3e;
  border-radius: 22px;
  height: fit-content;
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const S_Row = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

const S_RowLeft = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;
