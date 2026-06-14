import "./LoginForm.scss";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:8081/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Identifiants incorrects !");
      }

      const data = await response.json();
      console.log("Réponse complète:", data);

      localStorage.setItem("token", data.token);

      // Une fois connecté, faites une seconde requête pour obtenir les informations de l'utilisateur
      const userResponse = await fetch("http://localhost:8081/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        credentials: "include",
      });

      if (userResponse.ok) {
        const userData = await userResponse.json();
        console.log("Données utilisateur:", userData);

        if (userData.uuid) {
          localStorage.setItem("uuid", userData.uuid);
        } else {
          console.error("UUID non trouvé dans les données utilisateur");
        }
      }

      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.error("Une erreur inconnue est survenue.");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Connexion</h2>
        {error && <p className="message error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">
            Se connecter
          </button>
        </form>
        <p className="auth-footer">
          Pas encore de compte ? <a href="/register">Inscris-toi</a>
        </p>
      </div>
    </div>
  );
}
