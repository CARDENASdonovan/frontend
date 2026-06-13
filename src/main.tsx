import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";

const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const applySystemTheme = () => {
  document.documentElement.dataset.theme = colorSchemeQuery.matches
    ? "dark"
    : "light";
};

applySystemTheme();

if (colorSchemeQuery.addEventListener) {
  colorSchemeQuery.addEventListener("change", applySystemTheme);
} else {
  colorSchemeQuery.addListener(applySystemTheme);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
