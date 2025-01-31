import React, { useState } from "react";
import "./css/Token.css"; // Asegúrate de la ruta correcta

const TokenInput: React.FC = () => {
  const [token, setToken] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, ""); // Permitir solo números
    setToken(value);
  };

  const handleSubmit = () => {
    alert(`Token ingresado: ${token}`);
  };

  return (
    <div className="token-container">
      <div className="token-image">
        <img src="https://es.pngtree.com/freepng/happy-face-3d-render-emoji-side-view_5874667.html" alt="Token Visual" />
      </div>
      <div className="token-box">
        <h2 className="token-title">Ingresa un código</h2>
        <input
          type="text"
          className="token-input"
          placeholder="123456"
          value={token}
          onChange={handleChange}
          maxLength={6}
        />
        <button className="token-btn" onClick={handleSubmit}>
          Verificar
        </button>
      </div>
    </div>
  );
};

export default TokenInput;
