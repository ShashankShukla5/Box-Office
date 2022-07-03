import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navs from "./components/Navs";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
    <BrowserRouter>
      <Navs />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/starred" element={<Starred />} />
        <Route element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
