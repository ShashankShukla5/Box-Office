import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navs from "./components/Navs";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/starred" element={<Starred />} />
        <Route exact path="/show/:id" element={<Show />} />
        <Route element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
