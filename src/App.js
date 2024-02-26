import "./reset.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/home";
import React, {useState} from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
      </Routes>
    </Router>
  );
}


export default App;
