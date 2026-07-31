import { useState } from "react";
import logoImg from "../assets/logo.png"; // 1. Importas la imagen

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logoImg} alt="Logo" /> {/* 2. Usas la variable con llaves */}
        <span>Contador de caracteres UTN</span>
      </div>
      <button className="settings-btn">☀️</button>
    </header>
  );
};
export { Header }