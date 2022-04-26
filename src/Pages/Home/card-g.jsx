import styled from "styled-components";
import imgsrc from "../../Assets/Images/3.png";

function CardGrande(props) {
  return (
    <S_div>
      <S_imgDiv>
        <S_img src={imgsrc} alt="placeholder" />
      </S_imgDiv>
      <S_infoDiv>
        <h2>Titulo</h2>
      </S_infoDiv>
    </S_div>
  );
}
export default CardGrande;

const S_div = styled.div`
  resize: none;
  width: 23rem;
  height: 12rem;
  border: 2px solid #ebba3e;
  border-radius: 15px;
  overflow: hidden;
`;

const S_imgDiv = styled.div`
  width: inherit;
  overflow: hidden;
  height: 65%;
`;
const S_img = styled.img`
  width: inherit;
`;
const S_infoDiv = styled.div`
  padding: 15px;
  font-size: 12px;
`;
