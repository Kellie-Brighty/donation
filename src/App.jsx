import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function App() {

  return (
   <>
      <Router>
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<Success />} path="/success"/>
          <Route element={<Cancel />} path="/cancel"/>
        </Routes>
      </Router>
   </>
  );
}

export default App;
