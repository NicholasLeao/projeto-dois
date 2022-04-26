import styled from "styled-components";
import imgsrc from "../../Assets/Images/3.png";

function CardGrande(props) {
  const { data } = props;
  const imgUrl = data.corpo.match(/!\[.*?\]\((.*?)\)/)[1];
  return (
    <S_div>
      <S_imgDiv>
        <S_img src={imgUrl} alt="placeholder" />
      </S_imgDiv>
      <S_infoDiv>
        <h2>{data.titulo}</h2>
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
  padding: 10px;
`;
const S_img = styled.img`
  width: 100%;
`;
const S_infoDiv = styled.div`
  padding: 15px;
  font-size: 12px;
`;
