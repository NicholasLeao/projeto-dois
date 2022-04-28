import { Link } from "react-router-dom";
import styled from "styled-components";
import Home from "../Assets/Images/botao-home.png"
import Add from "../Assets/Images/addgame.png"
import Logo from "../Assets/Images/logo.png"

export function Navbar() {
  return (
    <SNav>
      <SUl>
        <SLi>
          <SBtnDiv1>
            <Link to="/"><SBtn1><img src={Home} alt="botao-home"/></SBtn1></Link>
          </SBtnDiv1>
        </SLi>
        <SLi>
          <SBtnDiv2>
            <Link to="/"><SBtn2><img src={Logo} alt="logo"/></SBtn2></Link>
          </SBtnDiv2>
        </SLi>
        <SLi>
          <SBtnDiv1>
          <Link to="/new-project"><SBtn3><img src={Add} alt="botao-add"/></SBtn3></Link>
          </SBtnDiv1>
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

const SBtnDiv2 = styled.div`
  cursor: pointer; 
`;
const SBtnDiv1 = styled.div`
  width: fit-content;
  padding: 0px 15px;
  height: 18px;
  border-radius: 15px;
  cursor: pointer;
  justify-content: space-around;
`;

const SBtn1 = styled.button`
  background: none;
  border: none;
  color: #ebba3e;
  cursor: pointer;
  font-size: 25px;
  margin-top: -5px;

  & img {
    width: 90px;
  }
`;

const SBtn2 = styled.button`
  background: none;
  border: none;
  & img {
    width: 500px;
    margin-left: 219px;
    margin-top: -150px;
    margin-bottom: -200px;
    
    
  }
`

const SBtn3 = styled.button`
  background: none;
  border: none;
  color: #ebba3e;
  cursor: pointer;
  font-size: 25px;
  margin-top: -5px;

  & img {
    width: 90px;
    margin-left: 200px;
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
