import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Contactus from "./Components/Contactus";
import { useState } from "react";
import { Login } from "./Components/Login";
import Signup from "./Components/Signup";
// import DynamicBG from "./Components/DynamicBG";
// import ParticlesBG from "./Components/ParticlesBG";
import ParticlesComponent from "./Components/DynamicBG";
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
        <Route path="/login" element={<Login/>} /> 
        <Route path="/signup" element={<Signup/>} />
      </Route>
    </Routes>

    // <div>
    //   <Layout/>
    //   <Home/>
    //   <AboutUs/>
    //   <Contactus/>
    // </div>

    // <div style={{background: "black"}} className="bg-dynamic">
    //   <h1>hiiii</h1>
    //   <h1>hiiii</h1>
    //   <h1>hiiii</h1>
      
    //   <ParticlesComponent id="tsparticles"/>
    // </div>

  );
}

export default App;
