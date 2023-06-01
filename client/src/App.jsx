import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Contactus from "./Components/Contactus";
import { useState } from "react";
// import NavBar from './Components/NavBar.jsx';

function App() {
  const [Mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
    console.log("heloo!")
  };

  return (
    <Routes>
      <Route path="/" element={<Layout mode={Mode} toggleMode={toggleMode} />}>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contactus/>} />
      </Route>
    </Routes>

  );
}

export default App;
