import Carrossel from "./carrossel";
import Cards from "./cards";
import styled from "styled-components";
import arcadeImg from "../../Assets/Images/arcade.jpg";
export function Home() {
  return (
    <>

      <Cards />

      <S_hero src={arcadeImg} alt="hero" />
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

const S_hero = styled.img`
  position: absolute;
  object-fit: cover;
  height: 170%;
  z-index: 0;

  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0));
`;
