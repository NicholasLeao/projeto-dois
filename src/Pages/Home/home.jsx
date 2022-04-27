import Carrossel from "./carrossel";
import Cards from "./cards";
import styled from "styled-components";

export function Home() {
  return (
    <>
      <SCarrosselDiv>
        <Carrossel />
      </SCarrosselDiv>

      <Cards />

      <S_gradient />
    </>
  );
}

export default Home;

// ========== STYLED COMPONENTS ==============================
const SCarrosselDiv = styled.div`
  width: 100%;
  border: 2px solid red;
  padding: 65px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const S_gradient = styled.div`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 140%;
  z-index: 0;
  background: rgb(235, 186, 62);
  background: linear-gradient(180deg, #c49a2f 65%, rgba(235, 186, 62, 0) 100%);
`;
