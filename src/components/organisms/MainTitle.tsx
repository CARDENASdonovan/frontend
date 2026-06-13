import React, { useEffect, useState } from "react";
import "./MainTitle.scss";

export default function MainTitle(): React.ReactElement {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://localhost:8081/users/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("User not authenticated");
          }
          return response.json();
        })
        .then((data) => setUsername(data.username))
        .catch(() => setUsername(null));
    }
  }, []);

  return (
    <header className="main-title">
      <h2>Suivez, Analysez et Faites Croître Votre Patrimoine</h2>
      <div className="title-actions">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const query = (e.target as HTMLFormElement).elements.namedItem(
              "search"
            ) as HTMLInputElement;
            window.open(
              `https://www.google.com/finance/quote/${query.value}:NYSE?hl=fr`,
              "_blank"
            );
          }}
        >
          <input
            type="text"
            name="search"
            placeholder="🕵️‍♀️ Chercher en bourse"
          />
        </form>

        {username ? (
          <span className="user-info">👤 {username}</span>
        ) : (
          <a href="/login">Se connecter</a>
        )}
      </div>
    </header>
  );
}
