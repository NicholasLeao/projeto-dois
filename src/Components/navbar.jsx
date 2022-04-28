import { Link } from "react-router-dom";
import styled from "styled-components";
import Home from "../Assets/Images/botao-home.png"

export function Navbar() {
  return (
    <SNav>
      <SUl>
        <SLi>
          <SBtnDiv1>
            <Link to="/"><SBtn><img src={Home} alt="botao-home"/></SBtn></Link>
          </SBtnDiv1>
        </SLi>
        <SLi>
          <SBtnDiv>
          <Link to="/new-project"><SBtn>CADASTRAR NOVO JOGO!</SBtn></Link>
          </SBtnDiv>
        </SLi>
      </SUl>
    </SNav>
  );
}
export default Navbar;

// ========== STYLED COMPONENTS ==============================

const SNav = styled.nav`
  font-family: "Roboto", sans-serif;
  z-index: 1;
  padding: 20px 0 35px 0;
`;

const SBtnDiv = styled.div`
  width: fit-content;
  padding: 10px 15px;
  height: 18px;
  border: 2px solid #ebba3e;
  background-color: #171714;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: -20px;
`;

const SBtnDiv1 = styled.div`
  width: fit-content;
  padding: 0px 15px;
  height: 18px;
  border-radius: 15px;
  cursor: pointer;
`;

const SBtn = styled.button`
  background: none;
  border: none;
  color: #ebba3e;
  cursor: pointer;
  font-size: 25px;
  margin-top: -5px;

  & img {
    width: 70px;
  }
`;

const SLi = styled.li`
  list-style: none;
  text-decoration: none;
`;

const SUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 35px;
`;
