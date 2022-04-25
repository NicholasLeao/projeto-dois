import styled from "styled-components";

export function Cards() {
  return (
    <SDiv>
      <div className="cards">
        <h1>CARDS</h1>
      </div>
    </SDiv>
  );
}

export default Cards;

// ========== STYLED COMPONENTS ==============================
const SDiv = styled.div`
  width: 800px;
  height: auto;
  border: 3px solid #ebba3e;
  border-radius: 22px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
