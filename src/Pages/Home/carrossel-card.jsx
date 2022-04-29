import Jokenpo from "../../Assets/Images/3.png";
import styled from "styled-components";

function CarrosselCard() {
  return (
    <SCardDiv>
      <SCardImgDiv>
        <SImg src={Jokenpo} alt="Will's Game" />
        <STextDiv>
          <SH2>Will's Jokenpô</SH2>
          <p>
            Jogo clássico, mas feito de jeito um diferente. DIVIRTA-SE!
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
  /* border: 3px solid #ebba3e; */
  background-color: #171714;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;

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
  font-size: 40px;
`;

const STextDiv = styled.div`
  padding: 20px 20px;
`;
