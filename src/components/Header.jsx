import logo from "../assets/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Character Counter Logo" />
        <h1>Character Counter</h1>
      </div>
    </header>
  )
}

export { Header }