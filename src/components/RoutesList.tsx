import { LandingPage } from "@/components/pages/LandingPage/LandingPage";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const RoutesList = (): React.ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};
