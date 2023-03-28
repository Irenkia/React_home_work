import { Link } from "react-router-dom";
//import Button from "../button";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <nav >
        <ul className="nav">
          <ol className="nav-link">
            <Link to="/">Home
              {/* <Button value="Home" /> */}
            </Link>
          </ol>
          <ol>
            <Link to="/currency">Currency
              {/* <Button value="Currency" /> */}
            </Link>
          </ol>
          <ol>
            <Link to="/bank-info">Bank-info
              {/* <Button value="Bank-info" /> */}
            </Link>
          </ol>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
