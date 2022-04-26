import styled from "styled-components";
import imgsrc from "../../Assets/Images/3.png";

function CardGrande(props) {
  const { data } = props;
  const imgUrl = data.corpo.match(/!\[.*?\]\((.*?)\)/)[1];
  return (
    <S_div>
      <S_infoDiv>
        <h2>{data.titulo}</h2>
      </S_infoDiv>
      <S_imgDiv>
        <S_img src={imgUrl} alt="placeholder" />
      </S_imgDiv>
    </S_div>
  );
}
export default CardGrande;

const S_div = styled.div`
  resize: none;
  width: 23rem;
  height: 12rem;
  /* border: 2px solid #ebba3e; */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  position: relative;
`;

const S_imgDiv = styled.div`
  width: inherit;
  /* overflow: hidden; */
  height: 100%;
  /* padding: 10px; */
  position: absolute;
  top: 0;

  background-size: cover;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const S_img = styled.img`
  height: 100%;
  opacity: 0.2;
`;
const S_infoDiv = styled.div`
  position: absolute;
  z-index: 10;
  padding: 15px;
  font-size: 16px;
  /* & h2 {
    color: black;
  } */
`;
