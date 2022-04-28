import styled from "styled-components";
import CardGrande from "./card-g";
import CardMedio from "./card-m";
import CardPequeno from "./card-p";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

export function Cards() {
  // STATES
  const [cardData, SetCardData] = useState([]);

  // SIDE EFFECTS
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://ironrest.herokuapp.com/projetodoiswillnick"
      );
      SetCardData(data);
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SDiv>
      <div className="row">
        {cardData.map((data, idx) => {
          if (idx <= 1) {
            return (
              <Link to={`/project/${data._id}`}>
                <CardGrande data={data} key={"g" + idx} />
              </Link>
            );
          }
        })}
      </div>

      <div className="row">
        {cardData.map((data, idx) => {
          if (idx >= 3 && idx <= 6) {
            return (
              <Link to={`/project/${data._id}`}>
                <CardMedio data={data} key={"m" + idx} />
              </Link>
            );
          }
        })}
      </div>

      <div className="row row-left">
        {cardData.map((data, idx) => {
          if (idx >= 8 && idx <= 11) {
            return (
              <Link to={`/project/${data._id}`}>
                <CardPequeno data={data} key={"s" + idx} />
              </Link>
            );
          }
        })}
      </div>
    </SDiv>
  );
}

export default Cards;

// ========== STYLED COMPONENTS ==============================
const SDiv = styled.div`
  width: 800px;
  ///border: 1px solid #e93382;

  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 0) 70%,
    rgba(23, 20, 23, 0.723) 100%
  );

  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  border-radius: 22px;
  height: fit-content;
  padding: 50px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  

  // ==== ROWS
  & .row {
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 25px;
  }

  & .row-left {
    justify-content: start;
  }
`;
