import { Routes, Route } from "react-router-dom";
import { Home, Project, NewProject } from "./Pages/index";
import arcadeImg from "./Assets/Images/arcade.jpg";
import Navbar from "./Components/navbar";
import styled from "styled-components";
import Footer from "./Components/Footer";
import EditProject from "./Pages/EditProject/edit-project";

function App() {
  return (
    <AppContainer className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/edit-project/:id" element={<EditProject />} />
        <Route path="/new-project" element={<NewProject />} />
      </Routes>

      <Footer />

      <S_hero src={arcadeImg} alt="hero" />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  * {
    font-family: "Roboto", sans-serif;
    text-decoration: none;
  }

  width: auto;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const S_hero = styled.img`
  position: absolute;
  object-fit: cover;
  height: 170%;
  z-index: -1;

  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0)
  );
`;
