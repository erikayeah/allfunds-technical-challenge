import "./App.css";
import HomePage from "./views/homePage/HomePage";
import Landing from "./views/landing/Landing";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/news" element={<HomePage type="active" />} />
        <Route path="/archived" element={<HomePage type="archived" />} />
      </Routes>
    </>
  );
}

export default App;
