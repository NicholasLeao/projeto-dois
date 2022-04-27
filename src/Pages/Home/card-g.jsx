import styled from "styled-components";

function CardGrande(props) {
  const { data } = props;
  const imgUrl = data.corpo.match(/!\[.*?\]\((.*?)\)/)[1];
  return (
    <StyledDiv>
      <div className="info">
        <h2>{data.titulo}</h2>
        <hr></hr>
      </div>
      <div className="gradient" />
      <div className="img-container">
        <img src={imgUrl} alt="placeholder" />
      </div>
    </StyledDiv>
  );
}
export default CardGrande;

// ==== STYLED COMPONENTS ====================
const StyledDiv = styled.div`
  resize: none;
  width: 23rem;
  height: 12rem;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;

  // ==== INFO ====================
  & .info {
    position: absolute;
    z-index: 10;
    margin-top: 15px;
    margin: 15px;
    & h2 {
      font-size: 32px;
      margin-right: 15px;
      margin: 0;
    }
    & hr {
      background-color: #ebba3e;
      height: 3px;
      border: none;
    }
  }

  // ==== GRADIENT ====================
  & .gradient {
    width: inherit;
    height: inherit;
    position: absolute;
    object-fit: cover;

    /* COLOR */
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 28%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0.2;
    /*  */
  }

  // ==== IMAGE ====================
  & .img-container {
    width: inherit;
    height: inherit;
    object-fit: cover;
    position: relative;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      position: absolute;
      height: 100%;
      opacity: 0.5;
    }
  }
`;
