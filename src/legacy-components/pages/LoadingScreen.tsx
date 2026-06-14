import "./LoadingScreen.scss";

import { CircularProgress } from "@mui/material";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <h1>CY Stonks</h1>
      <span>By Pauline, Jules & Donovan</span>
      <span>For Ms. Djaouida</span>
      <br />
      <CircularProgress />
    </div>
  );
}
