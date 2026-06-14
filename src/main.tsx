import { RoutesList } from "@/components/RoutesList";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./main.scss";

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
  colorSchemeQuery.addEventListener("change", applySystemTheme);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutesList />
  </StrictMode>
);
