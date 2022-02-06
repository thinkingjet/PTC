import React from "react";
import "./App.css";
import Nav from "./Componenets/Nav/Nav";
import Home from "./Componenets/Home/Home";
import Contribute from "./Componenets/Contribute/Contribute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clothes from "./Componenets/Contribute/Clothes";
import Blood from "./Componenets/Contribute/Blood";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contribute/food" element={<Contribute />} />
          <Route path="/contribute/clothes" element={<Clothes />} />
          <Route path="/contribute/blood" element={<Blood />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
