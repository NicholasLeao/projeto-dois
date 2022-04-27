import styled from "styled-components";

function CardMedio(props) {
  const { data } = props;
  const imgUrl = data.corpo.match(/!\[.*?\]\((.*?)\)/)[1];
  const rng = Math.random() > 0.5;

  return (
    <S_div>
      {!rng ? <h3>{data.titulo}</h3> : ""}
      <div className="img-container">
        <img src={imgUrl} alt="placeholder" />
      </div>
      {rng ? <h3>{data.titulo}</h3> : ""}
    </S_div>
  );
}

export default CardMedio;

const S_div = styled.div`
  width: 10rem;
  height: 14rem;
  border-radius: 15px;

  background: rgb(63, 63, 64);
  background: linear-gradient(180deg, #282829 0%, #19191a 100%);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .img-container {
    overflow: hidden;
    border-radius: 15px;
    height: 60%;
    width: 85%;
    margin: 10px 0;
  }

  & img {
    height: 100%;
    width: 100%;
  }
`;
