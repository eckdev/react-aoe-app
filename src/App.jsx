import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/navbar";
import Home from "./pages/Home";
import Units from "./pages/Units";
import UnitDetail from "./pages/UnitDetail";
import Error from "./pages/Error";

function App() {
  return (
    <div className="relative min-h-screen h-full w-full bg-slate-100">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error />} />
          <Route path="/units" element={<Units />} />
          <Route path="/unit/:id" element={<UnitDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;