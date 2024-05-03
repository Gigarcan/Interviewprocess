import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import TAteam from './components/TAteam';
import HRteam from './components/HRteam';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/ta" element={<TAteam />} />
      <Route path="/hrteam" element={<HRteam />} />
    </Routes>
  );
}

export default App;
