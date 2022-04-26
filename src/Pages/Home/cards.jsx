import styled from "styled-components";
import CardGrande from "./card-g";
import CardMedio from "./card-m";
import CardPequeno from "./card-p";

export function Cards() {
  return (
    <SDiv>
      <S_Row>
        {[1, 2].map((_, idx) => (
          <CardGrande key={"g" + idx} />
        ))}
      </S_Row>

      <S_Row>
        {[1, 2, 3, 4].map((_, idx) => (
          <CardMedio key={"m" + idx} />
        ))}
      </S_Row>

      <S_Row>
        {[1, 2].map((_, idx) => (
          <CardPequeno key={"s" + idx} />
        ))}
      </S_Row>
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
