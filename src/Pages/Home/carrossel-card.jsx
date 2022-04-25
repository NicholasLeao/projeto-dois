import Jokenpo from "../../Assets/Images/3.png";
import styled from "styled-components";

function CarrosselCard() {
  return (
    <SCardDiv>
      <SCardImgDiv>
        <SImg src={Jokenpo} alt="Will's Game" />
        <STextDiv>
          <SH2>Titulo do card</SH2>
          <p>
            Descricao do card, algumas coisas que poderiam estar escritas aqui
            para ocupar espaco.
          </p>
        </STextDiv>
      </SCardImgDiv>
    </SCardDiv>
  );
}

export default CarrosselCard;

// ========== STYLED COMPONENTS ==============================
const SCardDiv = styled.div`
  width: 530px;
  height: 280px;
  border: 3px solid #ebba3e;
  border-radius: 22px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SCardImgDiv = styled.div`
  width: 100%;
  height: 60%;
  border-bottom: 1px solid rgba(220, 220, 220, 0.4);
  margin-bottom: 10px;
`;

const SImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SH2 = styled.h2`
  margin-bottom: 5px;
`;

const STextDiv = styled.div`
  padding: 10px 20px;
`;
