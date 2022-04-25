import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import GamePage from "./Pages/GamePage"
import EditGame from "./Pages/EditGame"

function App() {
  return (
  
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/GamePage" element={<GamePage />}/>
            <Route path="/EditGame" element={<EditGame />}/> 
          </Routes>
        </BrowserRouter>

      </div>
  ) 
}

export default App;
