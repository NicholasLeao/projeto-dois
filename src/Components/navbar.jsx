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
            <SBtn>NAV2</SBtn>
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

  padding: 20px 0 35px 0;
`;

const SBtnDiv = styled.div`
  width: fit-content;
  padding: 3px 15px;
  height: 18px;
  border: 2px solid #ebba3e;
  border-radius: 15px;
  cursor: pointer;
`;

const SBtn = styled.button`
  background: none;
  border: none;
  color: #ebba3e;
  cursor: pointer;
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
