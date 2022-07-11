import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navs from "./components/Navs";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/starred" element={<Starred />} />
          <Route exact path="/show/:id" element={<Show />} />
          <Route element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
