import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contatti from "./pages/Contatti";
import Magazzino from "./pages/Magazzino";
import Lupetti from "./pages/Lupetti";
import Esploratori from "./pages/Esploratori";
import Rover from "./pages/Rover";
import Coccinelle from "./pages/Coccinelle";
import Guide from "./pages/Guide";
import Scolte from "./pages/Scolte";
import ChiSiamo from "./pages/ChiSiamo";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/magazzino" element={<Magazzino />} />
          <Route path="/lupetti" element={<Lupetti />} />
          <Route path="/esploratori" element={<Esploratori />} />
          <Route path="/rover" element={<Rover />} />
          <Route path="/coccinelle" element={<Coccinelle />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/scolte" element={<Scolte />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
        </Routes>
      </Layout>
    </Router>
  );
}
