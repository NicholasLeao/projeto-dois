import { Link } from "react-router-dom";
import styled from "styled-components";

export function Navbar() {
  return (
    <SNav>
      <SUl>
        <SLi>
          <SBtnDiv>
            <SBtn>NAV1</SBtn>
          </SBtnDiv>
        </SLi>
        <SLi>
          <SBtnDiv>
          <Link to="/new-project"><SBtn>CADASTRAR NOVO JOGO!</SBtn></Link>
          </SBtnDiv>
        </SLi>
        <SLi>
          <SBtnDiv>
            <SBtn>NAV3</SBtn>
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
`;

const SBtn = styled.button`
  background: none;
  border: none;
  color: #ebba3e;
  cursor: pointer;
  font-size: 25px;
  margin-top: -5px;
  
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
