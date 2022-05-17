import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MemberHomepage from "./pages/MemberHomepage";
import StartPointWithChargeStaions from "./pages/StartPointWithChargeStations";
import RouteSuggestion from "./pages/RouteSuggestion";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memberhomepage" element={<MemberHomepage />} />
        <Route path="/startpoint" element={<StartPointWithChargeStaions />} />
        <Route path="/routesuggestion" element={<RouteSuggestion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
