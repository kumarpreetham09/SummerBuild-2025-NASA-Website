import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">APOD</Link></li>
          <li><Link to="/mars">Mars Rover</Link></li>
          <li><Link to="/earth">Earth Imagery</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
