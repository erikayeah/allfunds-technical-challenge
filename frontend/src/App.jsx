//style
import "./App.css";

//components
import Home from "./views/Home";
import ArchivedNews from "./views/ArchivedNews";

//dependences
import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archived" element={<ArchivedNews />} />
      </Routes>
    </>
  );
}

export default App;
