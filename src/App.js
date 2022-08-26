import './App.css';
import TeamPage from './pages/TeamPage';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import MatchPage from './pages/MatchPage';
import HomePage from './pages/HomePage';
import DeveloperInfo from './pages/DeveloperInfo';

function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
          <Route path="/teams/:teamName/matches/:year" element={[<MatchPage />]} />
          <Route path="/teams/:teamName" element={[<TeamPage />]} />
          <Route path="/ipl-dashboard/developerinfo" element={[<DeveloperInfo />]} /> 
          <Route path="/" element={[<HomePage />]} /> 
          
       </Routes>
       </div>
    </Router>
  );
}

export default App;
