import styled from "styled-components";
import CarrosselCard from "./carrossel-card";

export function Carrossel() {
  return (
    <S_Div>
      <CarrosselCard />
    </S_Div>
  );
}

export default Carrossel;

// ========== STYLED COMPONENTS ==============================
const S_Div = styled.div`
  z-index: 1;
`;
