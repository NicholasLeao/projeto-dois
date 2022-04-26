import styled from "styled-components";

function CardPequeno(props) {
  const { data } = props;
  const emoji = ["💣", "🎮", "😁", "⛹️‍♂️", "🎲"];
  return (
    <S_div>
      <span style={{ fontSize: "20px" }}>{`${
        emoji[Math.floor(Math.random() * emoji.length)]
      }`}</span>
      <h1>{data.titulo}</h1>
    </S_div>
  );
}

export default CardPequeno;

const S_div = styled.div`
  width: fit-content;
  height: 2rem;
  border: 2px solid #ebba3e;
  margin-bottom: 25px;
  border-radius: 15px;
  padding: 10px 50px 10px 25px;

  display: flex;
  align-items: center;
  justify-content: left;
  gap: 15px;
  margin-right: 25px;
  & h1 {
    font-size: 18px;
  }
`;
