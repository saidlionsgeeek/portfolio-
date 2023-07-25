import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/Navigation";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/portfolio-/*" element={<Error />} />
        <Route path="/portfolio-" element={<Home />} />
        <Route path="/portfolio-/about" element={<About />} />
      </Routes>
    </>
  );
};
