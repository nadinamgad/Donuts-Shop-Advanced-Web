import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Contactus from "./Components/Contactus";
// import NavBar from './Components/NavBar.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contactus/>} />
      </Route>
    </Routes>

    // <div>
    //   <p style={{ color: 'red' }}> hi </p>
    // </div>
  );
}

export default App;
