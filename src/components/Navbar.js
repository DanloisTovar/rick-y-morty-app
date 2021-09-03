function Navbar({ titulo }) {
  return (
    <nav className="navbar navbar-dark bg-dark container-fluid titulo-principal">
      <a className="text-uppercase navbar-brand titulo-principal" href="/">
        <h1>{titulo}</h1>
      </a>
    </nav>
  );
}

export default Navbar;
