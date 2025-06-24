import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/apod">APOD</Link></li>
          <li><Link to="/mars">Mars Rover</Link></li>
          <li><Link to="/earth">Earth Daily</Link></li>
          <li><Link to="/funfacts">Fun Facts</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
