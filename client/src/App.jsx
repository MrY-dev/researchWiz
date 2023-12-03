import './App.css';
import { Routes,Route } from "react-router-dom";

import Welcome from './Components/Welcome.jsx';
import Loginpage from './Components/Loginpage.jsx';
import Signup from './Components/Signup.jsx';
import Search from './Components/Search.jsx';
import PDFViewer from './Components/PDFViewer.jsx';
import UserProfile from './Components/UserProfile.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}/> 
      <Route path="/login" element={<Loginpage />}/> 
      <Route path="/signup" element={<Signup />}/> 
      <Route path="/search" element={<Search />}/> 
      <Route path="/pdfviewer/:title" element={<PDFViewer />}/> 
      <Route path="/userprofile" element={<UserProfile />}/>
    </Routes>
  );
}

export default App;
