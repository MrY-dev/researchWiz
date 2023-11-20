import './App.css';
import { Routes,Route } from "react-router-dom";

import Welcome from './Components/Welcome.jsx';
import Loginpage from './Components/Loginpage.jsx';
import Signup from './Components/Signup.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}/> 
      <Route path="/login" element={<Loginpage />}/> 
      <Route path="/signup" element={<Signup />}/> 
    </Routes>
  );
}

export default App;
