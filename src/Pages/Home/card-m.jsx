import styled from "styled-components";
import imgsrc from "../../Assets/Images/3.png";

function CardMedio() {
  const rng = Math.random() > 0.5;
  const rng2 = Math.random() > 0.5;
  return (
    <S_div>
      {!rng ? <h3>Titulo</h3> : ""}
      <S_imgDiv>
        <S_img src={imgsrc} alt="placeholder" />
      </S_imgDiv>
      {rng ? <h3>Titulo</h3> : ""}
    </S_div>
  );
}

export default CardMedio;

const S_div = styled.div`
  width: 10rem;
  height: 14rem;
  border: 2px solid #ebba3e;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const S_imgDiv = styled.div`
  overflow: hidden;
  border-radius: 15px;
  height: 50%;
  width: 80%;
  margin: 10px 0;
  /* object-fit: scale-down; */
`;
const S_img = styled.img`
  /* object-fit: scale-down; */
  /* object-fit: cover; */
`;
