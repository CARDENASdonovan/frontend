import "./ThemeToggle.scss";

import { ReactElement } from "react";

import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle = (): ReactElement => {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-toggle-btn"
    >
      {resolvedTheme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};
