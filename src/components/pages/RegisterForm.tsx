import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./RegisterForm.scss";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    const uuid = uuidv4();
    const requestData = {
      uuid,
      username,
      password,
      wallets: [],
      financialInterests: [],
    };

    console.log("Submitting registration data:", requestData);

    try {
      const response = await fetch("http://localhost:8081/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Server error:", errorData);
        throw new Error(errorData.message || "Erreur lors de l'inscription !");
      }

      const data = await response.json();
      console.log("Registration successful, response:", data);

      setSuccessMessage(
        "Inscription réussie! Redirection vers la page de connexion..."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.error("Une erreur inconnue est survenue.");
        setError("Une erreur inconnue est survenue.");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Inscription</h2>

        {successMessage && (
          <div className="message success">{successMessage}</div>
        )}

        {error && <div className="message error">{error}</div>}

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
          <button type="submit" className="register-btn">
            S'inscrire
          </button>
        </form>
        <p className="auth-footer">
          Déjà un compte ? <a href="/login">Connecte-toi</a>
        </p>
      </div>
    </div>
  );
}
