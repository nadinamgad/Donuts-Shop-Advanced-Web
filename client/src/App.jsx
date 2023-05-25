import './App.css'
import {Route, Routes} from "react-router-dom";
// import NavBar from './Components/NavBar.jsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BasicExample from './Components/Navbar';

function App() {
  return (
    <Routes>
      <Route index element={<BasicExample/>}/>
    </Routes>

    // <div>
    //   <p style={{ color: 'red' }}> hi </p>
    // </div>
  );
}

export default App;
