import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import cyStonksLogo from "@/assets/cy_stonks_logo.png";
import moneyLogo from "@/assets/money_logo.png";

import "./SideMenu.scss";

export default function SideMenu(): React.ReactElement {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();

    const intervalId = setInterval(checkLoginStatus, 1000);

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "token" || e.key === null) {
        checkLoginStatus();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav className="side-menu">
      <div>
        <header className="menu-header">
          <img src={cyStonksLogo} />
        </header>
        <main className="menu-main">
          <div className="menu-section">
            <h2>General</h2>
            <div className="menu-item" onClick={() => navigate("/")}>
              <img src={moneyLogo} />
              <p>Accueil</p>
            </div>
            <div className="menu-item" onClick={() => navigate("/analyse")}>
              <img src={moneyLogo} />
              <p>Analyse</p>
            </div>
          </div>
          <div className="menu-section">
            <h2>Personnel</h2>
            <div
              className="menu-item"
              onClick={() => navigate("/portefeuille")}
            >
              <img src={moneyLogo} />
              <p>Portefeuille</p>
            </div>
            <div className="menu-item" onClick={() => navigate("/transaction")}>
              <img src={moneyLogo} />
              <p>Transaction</p>
            </div>
            <div
              className="menu-item"
              onClick={() => navigate("/notifications")}
            >
              <img src={moneyLogo} />
              <p>Notification</p>
            </div>
          </div>
        </main>
      </div>
      <footer>
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Se déconnecter
          </button>
        ) : (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Se connecter
          </button>
        )}
      </footer>
    </nav>
  );
}
