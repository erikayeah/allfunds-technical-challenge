//style
import "./App.css";

//components
import Home from "./views/Home";
import Archived from "./views/archived";

//dependences
import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archived" element={<Archived />} />
      </Routes>
    </>
  );
}

export default App;
