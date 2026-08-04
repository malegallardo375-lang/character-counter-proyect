import { useState } from "react"
import logo from "../assets/logo.png"

const Header = ({ dark, handleDarkTheme }) => {

  return (
    <header className="header" >
      <div className="header-logo">
        <img src={logo} alt="Character Counter Logo" />
        <h1>Character Counter</h1>
      </div>
      <button onClick={handleDarkTheme} className="theme-toggle-btn">
        {dark ? "☀️" : "🌙"}
      </button>
    </header>
  )
}

export { Header }