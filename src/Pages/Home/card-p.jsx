import styled from "styled-components";

function CardPequeno() {
  const emoji = ["💣", "🎮", "😁", "⛹️‍♂️", "🎲"];
  return (
    <S_div>
      <span style={{ fontSize: "20px" }}>{`${
        emoji[Math.floor(Math.random() * emoji.length)]
      }`}</span>
      <h1>Titulo maior para ocupar mais espaco</h1>
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
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 15px;
`;
