import { Homepage } from './pages/Homepage'
import { Topics } from "./pages/Topics"
import { Question } from './pages/Question';
import Results from './pages/Results/Results';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Homepage />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/quiz" element={<Question />} /> 
      <Route path="/leaderboard" element={<Results />} />
    </Routes>
  );
}

export default App;
