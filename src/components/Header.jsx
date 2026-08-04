import { useState } from "react"
import { Moon, Sun } from "lucide-react";
import logo from "../assets/logo.png"


const Header = ({ dark, handleDarkTheme }) => {

  return (
    <header className="header">
  <div className="header-left">
    <img src={logo} alt="Logo" />
    <h1>Contador de caracteres</h1>
  </div>

  <button
    className="theme-toggle-btn"
    onClick={handleDarkTheme}
  >
    {dark ? <Sun size={20} /> : <Moon size={20} />}
  </button>
</header>
  )
}

export { Header }