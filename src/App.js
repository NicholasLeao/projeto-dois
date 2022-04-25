import { Routes, Route } from "react-router-dom";
import { Home, Project, NewProject } from "./Pages/index";
import Navbar from "./Components/navbar";

function App() {
  return (
    <div className="App">
 
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GamePage" element={<Project />} />
          <Route path="/NewProject" element={<NewProject />} />
        </Routes>
    
    </div>
  );
}

export default App;
