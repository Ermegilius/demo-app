import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">React demo app</Link>
      </h1>

      <nav>
        <ul>
          <li>
            <NavLink to="/"> List</NavLink>
          </li>
          <li>
            <NavLink to="about"> About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
