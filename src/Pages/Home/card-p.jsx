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
  margin-bottom: 25px;
  border-radius: 15px;
  padding: 10px 50px 10px 0px;
  position: relative;

  background: rgb(63, 63, 64);
  background: linear-gradient(180deg, #282829 0%, #19191a 100%);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  margin-right: 25px;
  & h1 {
    font-size: 18px;
    margin-left: 15px;
    margin-right: 15px;
  }
  & span {
    font-size: 18px;
    margin-left: 15px;
  }
`;
