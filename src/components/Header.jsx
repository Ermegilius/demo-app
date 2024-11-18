import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>React demo app</h1>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="list"> List</Link>
          </li>
          <li>
            <Link to="about"> About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
