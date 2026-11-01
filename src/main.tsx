import "./i18n";
import "./main.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RoutesList } from "@/components/RoutesList";
import { ThemeProvider } from "@/context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RoutesList />
    </ThemeProvider>
  </StrictMode>
);
