import "./App.css";
import Home from "./views/Home";
import ArchivedNews from "./views/ArchivedNews";
import Landing from "./views/landing/Landing";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/news" element={<Home />} />
        <Route path="/archived" element={<ArchivedNews />} />
      </Routes>
    </>
  );
}

export default App;
