import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./Components/IndexPage";
// import NavBar from './Components/NavBar.jsx';

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>

    // <div>
    //   <p style={{ color: 'red' }}> hi </p>
    // </div>
  );
}

export default App;
