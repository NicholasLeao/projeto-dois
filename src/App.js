import { Routes, Route } from "react-router-dom";
import { Home, Project, NewProject } from "./Pages/index";
import Navbar from "./Components/navbar";
import styled from "styled-components";

function App() {
  return (
    <AppContainer className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/edit-project/:id" element={null} />
        <Route path="/new-project" element={<NewProject />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  * {
    font-family: "Roboto", sans-serif;
  }
  
  width: auto;
  height: fit-content;

  background-color: #171714;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
